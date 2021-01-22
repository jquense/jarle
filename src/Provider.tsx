import useEventCallback from '@restart/hooks/useEventCallback';
import { PrismTheme } from 'prism-react-renderer';
import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
  isValidElement,
  createElement,
} from 'react';
import { isValidElementType } from 'react-is';
import { decode } from 'sourcemap-codec';
import { Root } from './transform';
import { Import } from './transform/modules';

import { Wrapper } from './transform/wrapContent';
import transpile, { parseImports } from './transpile';

const prettierComment = /(\{\s*\/\*\s+prettier-ignore\s+\*\/\s*\})|(\/\/\s+prettier-ignore)/gim;

const hooks = {};
Object.entries(React).forEach(([key, value]) => {
  if (key.startsWith('use')) hooks[key] = value;
});

export type LiveError = Error & {
  location?: { line: number; col: number };
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
    return imports[request];
  };

const wrapAsComponent: Wrapper = (ctx) => {
  ctx.prepend('return React.createElement(function StateContainer() {\n');
  ctx.append('\n})');
};

function handleError(
  err: any,
  result: ReturnType<typeof transpile>,
  fn: Function
): LiveError {
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

  const decoded = decode(result.map?.mappings);

  const line = pos.line - offset;
  const mapping = decoded[line]?.find(([col]) => col === pos.column);

  if (mapping) {
    err.location = { line: mapping[2], column: mapping[3] };
  }

  return err;
}

interface CodeToComponentOptions<S extends {}> {
  scope?: S;
  ast?: Root;
  renderAsComponent?: boolean;
  preample?: string;
}

function codeToComponent<TScope extends {}>(
  code: string,
  {
    ast,
    scope,
    preample,
    renderAsComponent = false,
  }: CodeToComponentOptions<TScope>
): Promise<React.ReactElement> {
  return new Promise((resolve, reject) => {
    const isInline = !code.match(/render\S*\(\S*</);

    if (renderAsComponent && !isInline) {
      throw new Error(
        'Code using `render()` cannot use top level hooks. ' +
          'Either provide your own stateful component, or return a jsx element directly.'
      );
    }

    const result = transpile(ast || code, {
      inline: isInline,
      wrapper: renderAsComponent ? wrapAsComponent : undefined,
    });

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

    const args = ['React', 'render'].concat(Object.keys(finalScope));
    const values = [React, render].concat(Object.values(finalScope));

    let body = result.code;
    if (preample) body = `${preample}\n\n${body}`;

    // eslint-disable-next-line no-new-func
    const fn = new Function(...args, body);

    let element;
    try {
      element = fn(...values);
    } catch (err) {
      reject(handleError(err, result, fn));
      return;
    }

    if (!isInline) return;

    if (element === undefined) {
      reject(new SyntaxError('The code did not return a JSX element'));
      return;
    }
    if (!isValidElement(element)) {
      if (isValidElementType(element)) {
        element = createElement(element);
      } else {
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
   *
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
  return Promise.all(sources.map((s) => import(/* webpackIgnore: true */ s)));
}

function useNormalizedCode(code: string, showImports: boolean, setError: any) {
  return useMemo(() => {
    const nextCode = code.replace(prettierComment, '').trim();
    if (showImports) return [nextCode, [], ''] as [string, Import[], string];
    try {
      const result = parseImports(nextCode, true);
      return [
        result.code,
        result.imports,
        result.imports
          .map((i) => i.code)
          .join('\n')
          .trimStart(),
      ] as const;
    } catch (err) {
      setError(err);
      return [code, [], ''] as [string, Import[], string];
    }
  }, [code, showImports]);
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
  showImports = true,
  renderAsComponent = false,
  resolveImports = defaultResolveImports,
}: Props<TScope>) {
  const [error, setError] = useState<LiveError | null>(null);
  const [{ element }, setState] = useState<State>({ element: null });

  const [cleanCode, ogImports, ogImportBlock] = useNormalizedCode(
    rawCode,
    showImports,
    setError
  );

  const handleChange = useEventCallback((nextCode: string) => {
    try {
      const { ast, imports } = parseImports(nextCode, false);
      const sources = Array.from(
        new Set([...ogImports, ...imports].map((i) => i.source))
      );

      Promise.resolve(resolveImports(sources))
        .then((results) =>
          Array.isArray(results) ? objectZip(sources, results) : results
        )
        .then((fetchedImports) =>
          codeToComponent(nextCode, {
            ast,
            renderAsComponent,
            // also include the orginal imports if they were removed
            preample: ogImportBlock,
            scope: {
              ...scope,
              require: getRequire(fetchedImports),
            },
          })
        )
        .then((element) => {
          setState({ element });
          setError(null);
        }, setError);
    } catch (err) {
      setError(err);
    }
  });

  useEffect(() => {
    handleChange(cleanCode);
  }, [cleanCode, scope, handleChange]);

  const context = useMemo(
    () => ({
      theme,
      error,
      element,
      language,
      code: cleanCode,
      onError: setError,
      onChange: handleChange,
    }),
    [cleanCode, element, error, handleChange, language, theme]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
