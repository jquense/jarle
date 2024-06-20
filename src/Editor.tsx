import { Highlight, Prism, type PrismTheme } from 'prism-react-renderer';
import useMergeState from '@restart/hooks/useMergeState';
import useStableMemo from '@restart/hooks/useStableMemo';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import SimpleCodeEditor from 'react-simple-code-editor';

import { mapTokens } from './CodeBlock';
import InfoMessage from './InfoMessage';
import { useLiveContext } from './Provider';
import LineNumber from './LineNumber';

let uid = 0;

function useStateFromProp<TProp>(prop: TProp) {
  const state = useState(prop);
  const firstRef = useRef(true);

  useStableMemo(() => {
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

/**
 * The Editor is the code text editor component, some props can be supplied directly
 * or take from the Provider context if available.
 */
const Editor = React.forwardRef(
  (
    {
      style,
      className,
      theme,
      infoComponent: Info = InfoMessage,
      lineNumbers,
      infoSrOnly = false,
    }: Props,
    ref: any
  ) => {
    const {
      code: contextCode,
      theme: contextTheme,
      language,
      onChange,
      error,
    } = useLiveContext();
    const userTheme = theme || contextTheme;
    const [code, setCode] = useStateFromProp(contextCode);

    const mouseDown = useRef(false);

    useInlineStyle();

    useLayoutEffect(() => {
      onChange(code || '');
    }, [code, onChange]);

    const [{ visible, ignoreTab, keyboardFocused }, setState] = useMergeState({
      visible: false,
      ignoreTab: false,
      keyboardFocused: false,
    });

    const id = useMemo(() => `described-by-${++uid}`, []);

    const handleKeyDown = (event: React.KeyboardEvent) => {
      const { key } = event;

      if (ignoreTab && key !== 'Tab' && key !== 'Shift') {
        if (key === 'Enter') event.preventDefault();
        setState({ ignoreTab: false });
      }
      if (!ignoreTab && key === 'Escape') {
        setState({ ignoreTab: true });
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
      setState({
        visible: false,
      });
    };

    const handleMouseDown = () => {
      mouseDown.current = true;
      setTimeout(() => {
        mouseDown.current = false;
      });
    };

    const errorLocation = error?.location || error?.loc;
    const highlight = useCallback(
      (value: string) => (
        <Highlight
          theme={userTheme}
          prism={Prism}
          code={value}
          language={language as any}
        >
          {(hl) =>
            mapTokens({
              ...hl,
              lineNumbers,
              theme: userTheme,
              errorLocation,
              getLineNumbers: (line: number) =>
                lineNumbers ? (
                  <LineNumber
                    style={{
                      position: 'absolute',
                      transform: 'translateX(-100%)',
                      left: 0,
                    }}
                    theme={userTheme}
                  >
                    {line}
                  </LineNumber>
                ) : null,
            })
          }
        </Highlight>
      ),
      [userTheme, lineNumbers, language, errorLocation]
    );

    const baseTheme = {
      whiteSpace: 'pre',
      fontFamily: 'monospace',
      ...(userTheme?.plain || {}),
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
                theme={userTheme}
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
          onValueChange={setCode}
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

export default Editor;
