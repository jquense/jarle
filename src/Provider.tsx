import useEventCallback from '@restart/hooks/useEventCallback';
import { PrismTheme } from 'prism-react-renderer';
import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { decode } from 'sourcemap-codec';

import { Wrapper } from './transform/wrapContent';
import transpile, { removeImports } from './transpile';

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

function codeToComponent<TScope extends {}>(
  code: string,
  scope?: TScope,
  renderAsComponent = false
): Promise<React.ReactElement> {
  return new Promise((resolve, reject) => {
    const isInline = !code.match(/render\S*\(\S*</);

    if (renderAsComponent && !isInline) {
      throw new Error(
        'Code using `render()` cannot use top level hooks. Either provide your own stateful component, or return a jsx element directly.'
      );
    }

    const result = transpile(code, {
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

    const body = result.code;

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

    resolve(element);
  });
}

export type ImportResolver = () => Promise<Record<string, any>>;

export interface Props<TScope> {
  code: string;
  scope?: TScope;
  children?: ReactNode;
  language?: string;

  theme?: PrismTheme;

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
   * A function that resolves to a hash of import requests to the result
   *
   * ```ts
   * const resolverImports = () => ({
   *   './foo': Foo
   * })
   * ```
   *
   * @default undefined
   * @type {geyt} getfffy
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

export default function Provider<TScope extends {} = {}>({
  scope,
  children,
  code: codeText,
  language,
  theme,
  showImports = false,
  renderAsComponent = false,
  resolveImports = () => Promise.resolve({}),
}: Props<TScope>) {
  const [error, setError] = useState<LiveError | null>(null);
  const [{ element }, setState] = useState<State>({ element: null });

  const [code, importBlock] = useMemo<[string, string]>(() => {
    // Remove the prettier comments.
    const nextCode = codeText.replace(prettierComment, '').trim();

    if (showImports) return [nextCode, ''];
    const r = removeImports(nextCode);
    return [
      r.code,
      r.imports
        .map((i) => i.code)
        .join('\n')
        .trimStart(),
    ];
  }, [codeText, showImports]);

  const handleChange = useEventCallback((nextCode: string) => {
    resolveImports()
      .then((importHash) =>
        codeToComponent(
          `${importBlock}\n\n${nextCode}`.trimStart(),
          {
            ...scope,
            require: getRequire(importHash),
          },
          renderAsComponent
        )
      )
      .then((element) => {
        setState({ element });
        setError(null);
      }, setError);
  });

  useEffect(() => {
    handleChange(code);
  }, [code, importBlock, scope, handleChange]);

  useEffect(() => {
    handleChange(code);
  }, [code, scope, handleChange]);

  const context = useMemo(
    () => ({
      code,
      error,
      element,
      language,
      theme,
      onError: setError,
      onChange: handleChange,
    }),
    [code, element, error, handleChange, language, theme]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
