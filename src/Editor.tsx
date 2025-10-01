import { Highlight, Prism, type PrismTheme } from 'prism-react-renderer';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import SimpleCodeEditor from './SimpleEditor.js';

import { mapTokens } from './CodeBlock.js';
import InfoMessage from './InfoMessage.js';
import { useActions, useEditorConfig, useError, useLiveContext } from './Provider.js';
import LineNumber from './LineNumber.js';

let uid = 0;

function useStateFromProp<TProp>(prop: TProp) {
  const state = useState(prop);
  const firstRef = useRef(true);

  useMemo(() => {
    if (firstRef.current) {
      firstRef.current = false;
      return;
    }
    state[1](prop);
  }, [prop]);

  return state;
}

function useInlineStyle() {
  useEffect(() => {
    if (document.getElementById('__jarle-style-tag')) {
      return;
    }

    const style = document.createElement('style');
    document.head.append(style);
    style.setAttribute('id', '__jarle-style-tag');
    style.sheet!.insertRule(`
      .__jarle {
        display: grid;
        position: relative;
        grid-template-columns: auto 1fr;
      }
    `);
    style.sheet!.insertRule(`
      .__jarle pre,
      .__jarle textarea {
        overflow: visible;
      }
    `);
  }, []);
}

export interface ControlledEditorProps extends Props {
  language?: string;

  code: string;

  errorLocation?:
    | {
        line: number;
        col: number;
      }
    | undefined;

  onCodeChange: (code: string) => void;

}

/**
 * The Editor is the code text editor component, some props can be supplied directly
 * or take from the Provider context if available.
 */
export const ControlledEditor = React.forwardRef(
  (
    {
      code,
      style,
      className,
      theme,
      language,
      onCodeChange,
      errorLocation,
      infoComponent: Info = InfoMessage,
      lineNumbers,
      infoSrOnly = false,
    }: ControlledEditorProps,
    ref: any
  ) => {
    const mouseDown = useRef(false);

    useInlineStyle();

    const [{ visible, ignoreTab, keyboardFocused }, setState] = useState({
      visible: false,
      ignoreTab: false,
      keyboardFocused: false,
    });

    const id = useMemo(() => `described-by-${++uid}`, []);

    const handleKeyDown = (event: React.KeyboardEvent) => {
      const { key } = event;

      if (ignoreTab && key !== 'Tab' && key !== 'Shift') {
        if (key === 'Enter') event.preventDefault();
        setState((prev) => ({ ...prev, ignoreTab: false }));
      }
      if (!ignoreTab && key === 'Escape') {
        setState((prev) => ({ ...prev, ignoreTab: true }));
      }
    };

    const handleFocus = (e: React.FocusEvent) => {
      if (e.target !== e.currentTarget) return;
      setState({
        visible: true,
        ignoreTab: !mouseDown.current,
        keyboardFocused: !mouseDown.current,
      });
    };

    const handleBlur = (e: React.FocusEvent) => {
      if (e.target !== e.currentTarget) return;
      setState((prev) => ({
        ...prev,
        visible: false,
      }));
    };

    const handleMouseDown = () => {
      mouseDown.current = true;
      setTimeout(() => {
        mouseDown.current = false;
      });
    };

    const highlight = useCallback(
      (value: string) => (
        <Highlight
          theme={theme}
          prism={Prism}
          code={value}
          language={language as any}
        >
          {(hl) =>
            mapTokens({
              ...hl,
              errorLocation,
              getLineNumbers: (line: number) =>
                lineNumbers ? (
                  <LineNumber
                    style={{
                      position: 'absolute',
                      transform: 'translateX(-100%)',
                      left: 0,
                    }}
                    theme={theme}
                  >
                    {line}
                  </LineNumber>
                ) : null,
            })
          }
        </Highlight>
      ),
      [theme, lineNumbers, language, errorLocation]
    );

    const baseTheme = {
      whiteSpace: 'pre',
      fontFamily: 'monospace',
      ...(theme?.plain || {}),
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`${className || ''} __jarle`}
        style={{ ...baseTheme }}
      >
        <div className="line-numbers">
          {/* 
          These line numbers are visually hidden in order to dynamically create enough space for the numbers. 
          The visible numbers are added to the actual lines, and absolutely positioned to the left into the same space.
          this allows for soft wrapping lines as well as not changing the dimensions of the `pre` tag to keep 
          the syntax highlighting synced with the textarea.
          */}
          {lineNumbers &&
            (code || '').split(/\n/g).map((_, i) => (
              <LineNumber
                key={i}
                theme={theme}
                className={i + 1 === errorLocation?.line && 'token-line-error'}
                style={{ display: 'block' }}
              >
                <span style={{ visibility: 'hidden' }}>{i + 1}</span>
              </LineNumber>
            ))}
        </div>
        <SimpleCodeEditor
          value={code || ''}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onValueChange={onCodeChange}
          highlight={highlight}
          ignoreTabKey={ignoreTab}
          aria-describedby={id}
          aria-label="Example code editor"
          style={{ overflow: 'visible' }}
        />
        {visible && (keyboardFocused || !ignoreTab) && (
          <Info id={id} aria-live="polite" srOnly={infoSrOnly}>
            {ignoreTab ? (
              <>
                Press <kbd>enter</kbd> or type a key to enable tab-to-indent
              </>
            ) : (
              <>
                Press <kbd>esc</kbd> to disable tab-to-indent
              </>
            )}
          </Info>
        )}
      </div>
    );
  }
);

export interface Props {
  className?: string;

  style?: any;

  /** A Prism theme object, can also be specified on the Provider */
  theme?: PrismTheme;

  /** Render line numbers */
  lineNumbers?: boolean;

  /** Styles the info component so that it is not visible but still accessible by screen readers. */
  infoSrOnly?: boolean;

  /** The component used to render A11y messages about keyboard navigation, override to customize the styling */
  infoComponent?: React.ComponentType<any>;
}

export default function Editor({ theme, ...props }: Props) {
  const {
    code: contextCode,
    theme: contextTheme,
    language,
  } = useEditorConfig();
  const error = useError();
  const actions = useActions()
  const [code, setCode] = useStateFromProp(contextCode || '');

  const errorLocation = error?.location || error?.loc;

  return (
    <ControlledEditor
      {...props}
      code={code}
      language={language}
      theme={theme || contextTheme}
      onCodeChange={nextCode => {
        setCode(nextCode);
        actions.onChange(nextCode);
      }}
      errorLocation={errorLocation}
    />
  );
}
