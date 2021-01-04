import Highlight, { Prism, PrismTheme } from 'prism-react-renderer';
import useMergeState from '@restart/hooks/useMergeState';
import useStableMemo from '@restart/hooks/useStableMemo';
import React, {
  useCallback,
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

    const highlight = useCallback(
      (value: string) => (
        <Highlight
          theme={userTheme}
          Prism={Prism}
          code={value}
          language={language as any}
        >
          {(hl) =>
            mapTokens({
              ...hl,
              hasTheme: !!userTheme,
              errorLocation: error?.location,
            })
          }
        </Highlight>
      ),
      [userTheme, language, error]
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
        className={className}
        style={{
          ...baseTheme,
          display: 'grid',
          position: 'relative',
          gridTemplateColumns: 'auto 100%',
        }}
      >
        <div className="line-numbers">
          {lineNumbers &&
            (code || '')
              .split(/\n/g)
              .map((_, i) => (
                <LineNumber theme={userTheme}>{i + 1}</LineNumber>
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
