import useEventCallback from '@restart/hooks/useEventCallback';
import useMounted from '@restart/hooks/useMounted';
import { PrismTheme } from 'prism-react-renderer';
import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
  isValidElement,
  createElement,
  useCallback,
} from 'react';
import { isValidElementType } from 'react-is';
// import { decode } from 'sourcemap-codec';
import { transform } from './transform';

// try and match render() calls with arguments to avoid false positives with class components
const hasRenderCall = (code: string) => !!code.match(/render\((?!\s*\))/gm);

const prettierComment =
  /(\{\s*\/\*\s+prettier-ignore\s+\*\/\s*\})|(\/\/\s+prettier-ignore)/gim;

const hooks = {};
Object.entries(React).forEach(([key, value]) => {
  if (key.startsWith('use')) hooks[key] = value;
});

export type LiveError = Error & {
  location?: { line: number; col: number };
  loc?: { line: number; col: number };
};

export const isTypeScriptEnabled = (language?: string) => {
  if (!language) return false;
  const lower = language.toLowerCase();
  return lower === 'typescript' || lower === 'tsx' || lower === 'ts';
};

export interface LiveContext {
  code?: string;
  language?: string;
  theme?: PrismTheme;
  disabled?: boolean;
  error: LiveError | null;
  element: JSX.Element | null;
  onChange(code: string): void;
  onError(error: Error): void;
}

export const Context = React.createContext<LiveContext>({} as any);

const getRequire = (imports?: Record<string, any>) =>
  function require(request: string) {
    if (!imports) throw new Error('no imports');
    if (!(request in imports)) throw new Error(`Module not found: ${request}`);
    const obj = imports[request];
    return obj && (obj.__esModule || obj[Symbol.toStringTag] === 'Module')
      ? obj
      : { default: obj };
  };

function handleError(err: any, fn: Function): LiveError {
  const fnStr = fn.toString();
  // account for the function chrome lines
  const offset = fnStr.slice(0, fnStr.indexOf('{')).split(/\n/).length;

  let pos;
  if ('line' in err) {
    pos = { line: err.line, column: err.column };
  } else if ('lineNumber' in err) {
    pos = { line: err.lineNumber - 1, column: err.columnNumber - 1 };
  } else {
    const [, line, col] = err.stack?.match(
      /at eval.+<anonymous>:(\d+):(\d+)/m
    )!;
    pos = { line: +line - 1, column: +col - 1 };
  }
  if (!pos) return err;

  // if (result.map) {
  //   const decoded = decode(result.map.mappings);

  //   const line = pos.line - offset;
  //   const mapping = decoded[line]?.find(([col]) => col === pos.column);

  //   if (mapping) {
  //     err.location = { line: mapping[2], column: mapping[3] };
  //   }
  // }

  return err;
}

interface CodeToComponentOptions<S extends {}> {
  scope?: S;
  exportToRender?: string;
  renderAsComponent?: boolean;
  preample?: string;
  isTypeScript?: boolean;
}

function codeToComponent<TScope extends {}>(
  compiledCode: string,
  {
    scope,
    preample,
    exportToRender,
    renderAsComponent = false,
  }: CodeToComponentOptions<TScope>
): Promise<React.ReactElement> {
  return new Promise((resolve, reject) => {
    const isInline = !hasRenderCall(compiledCode);

    if (renderAsComponent && !isInline) {
      throw new Error(
        'Code using `render()` cannot use top level hooks. ' +
          'Either provide your own stateful component, or return a jsx element directly.'
      );
    }

    const render = (element: JSX.Element) => {
      if (element === undefined) {
        reject(new SyntaxError('`render()` was called without a JSX element'));
        return;
      }

      resolve(element);
    };

    // const [clearTimes, timers] = createTimers();
    // DU NA NA NAAAH
    const finalScope = { ...hooks, ...scope };
    const exports: Record<string, any> = {};

    const args = ['React', 'render', 'exports'].concat(Object.keys(finalScope));
    const values = [React, render, exports].concat(Object.values(finalScope));

    let body = compiledCode;

    if (renderAsComponent) {
      body = `return React.createElement(function StateContainer() {\n${body}\n})`;
    }

    if (preample) body = `${preample}\n\n${body}`;

    // eslint-disable-next-line no-new-func
    const fn = new Function(...args, body);

    let element: any;
    try {
      element = fn(...values);
    } catch (err) {
      reject(handleError(err, fn));
      return;
    }

    const exportedValues = Object.values(exports);

    if ('default' in exports) {
      element = exports.default ?? element;
    } else if (exportedValues.length) {
      element = exports[exportToRender!] ?? exportedValues[0] ?? element;
    }

    if (element === undefined) {
      if (isInline) {
        reject(new SyntaxError('The code did not return a JSX element'));
      }
      return;
    }
    if (!isValidElement(element)) {
      if (isValidElementType(element)) {
        element = createElement(element);
      } else if (isInline) {
        reject(
          new SyntaxError(
            'The code did not return a valid React element or element type'
          )
        );
      }
    }

    resolve(element);
  });
}

export type ImportResolver = (
  requests: string[]
) => Promise<Record<string, any> | any[]>;

export interface Props<TScope> {
  /**
   * A string of code to render
   */
  code: string;

  /**
   * The named export of the code that JARLE should attempt to render if present
   */
  exportToRender?: string;

  /** A context object of values automatically available for use in editor code */
  scope?: TScope;

  /** Render subcomponents */
  children?: ReactNode;

  /** A Prism language string for selecting a grammar for syntax highlighting */
  language?: string;

  /** A Prism theme object, leave empty to not use a theme or use a traditional CSS theme. */
  theme?: PrismTheme;

  /** Whether the import statements in the initial `code` text are shown to the user or not. */
  showImports?: boolean;

  /**
   * Creates a react component using the code text as it's body. This allows
   * using top level hooks in your example without having to create and return your
   * own component. Cannot be used with `render()` in the example.
   *
   * ```jsx
   * import Button from './Button'
   *
   * const [active, setActive] = useState()
   *
   * <Button active={active} onClick={() => setActive(true)}/>
   * ```
   */
  renderAsComponent?: boolean;

  /**
   * A function that maps an array of import requests to modules, may return a promise.
   *
   * ```ts
   * const resolveImports = (requests) =>
   *   Promise.all(requests.map(req => import(req)))
   * ```
   *
   * Or an object hash of import requests to the result
   *
   * ```ts
   * const resolveImports = () => ({
   *   './foo': Foo
   * })
   * ```
   * @default (requests) => Promise.all(requests.map(req => import(req)))
   */
  resolveImports?: ImportResolver;
}

export function useLiveContext() {
  return useContext(Context);
}

export function useElement() {
  return useLiveContext().element;
}

export function useError() {
  return useLiveContext().error;
}

interface State {
  element: React.ReactElement | null;
}

export const objectZip = <T extends PropertyKey, U>(
  arr: T[],
  arr2: U[]
): Record<string, U> => Object.fromEntries(arr.map((v, i) => [v, arr2[i]]));

function defaultResolveImports(sources) {
  // @ts-ignore
  return Promise.all(sources.map(__IMPORT__));
}

function useCompiledCode(
  consumerCode: string,
  showImports: boolean,
  isTypeScript: boolean,
  setError: any
) {
  const compile = useCallback(
    (nextCode) => {
      const isInline = !hasRenderCall(nextCode);

      nextCode = nextCode.replace(prettierComment, '').trim();

      try {
        return transform(nextCode, {
          compiledFilename: 'compiled.js',
          filename: 'example.js',
          wrapLastExpression: isInline,
          syntax: isTypeScript ? 'typescript' : 'js',
          transforms: isTypeScript
            ? ['typescript', 'imports', 'jsx']
            : ['imports', 'jsx'],
        });
      } catch (err) {
        setError(err);
        return { code: nextCode, imports: [] };
      }
    },
    [isTypeScript, setError]
  );

  const initialResult = useMemo(() => {
    const nextCode = consumerCode.replace(prettierComment, '').trim();

    return !showImports
      ? transform(nextCode, {
          syntax: isTypeScript ? 'typescript' : 'js',
          compiledFilename: 'compiled.js',
          filename: 'example.js',
          removeImports: true,
          transforms: [],
        })
      : { code: nextCode, imports: [] };
  }, [consumerCode, compile, showImports]);

  return [
    {
      compiledCode: showImports
        ? initialResult.code
        : initialResult.code.trimStart(),
      removedImports: showImports ? [] : initialResult.imports,
    },
    compile,
  ] as const;
}

/**
 * The Provider supplies the context to the other components as well as handling
 * jsx transpilation and import resolution.
 */
export default function Provider<TScope extends {} = {}>({
  scope,
  children,
  code: rawCode,
  language,
  theme,
  exportToRender,
  showImports = true,
  renderAsComponent = false,
  resolveImports = defaultResolveImports,
}: Props<TScope>) {
  const isMounted = useMounted();
  const [error, setError] = useState<LiveError | null>(null);
  const [{ element }, setState] = useState<State>({ element: null });
  const isTypeScript = isTypeScriptEnabled(language);

  const [initialResult, compile] = useCompiledCode(
    rawCode,
    showImports,
    isTypeScript,
    setError
  );
  const initialCompiledCode = initialResult.compiledCode;

  const handleChange = useEventCallback((nextCode: string) => {
    try {
      const { code: compiledCode, imports } = compile(nextCode);

      const sources = Array.from(
        new Set(
          [...initialResult.removedImports, ...imports].map((i) => i.source)
        )
      );

      Promise.resolve(resolveImports(sources))
        .then((results) =>
          Array.isArray(results) ? objectZip(sources, results) : results
        )
        .then((fetchedImports) =>
          codeToComponent(compiledCode, {
            renderAsComponent,
            isTypeScript,
            exportToRender,
            // also include the orginal imports if they were removed
            preample: initialResult.removedImports
              .map((i) => i.code)
              .join('\n')
              .trimStart(),
            scope: {
              ...scope,
              require: getRequire(fetchedImports),
            },
          })
        )
        .then(
          (element) => {
            if (!isMounted()) return;

            setState({ element });
            setError(null);
          },
          (err) => {
            if (!isMounted()) return;
            setError(err);
          }
        );
    } catch (err: any) {
      setError(err);
    }
  });

  useEffect(() => {
    handleChange(initialCompiledCode);
  }, [initialCompiledCode, scope, handleChange]);

  const context = useMemo(
    () => ({
      theme,
      error,
      element,
      language,
      code: initialCompiledCode,
      onError: setError,
      onChange: handleChange,
    }),
    [initialCompiledCode, element, error, handleChange, language, theme]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
