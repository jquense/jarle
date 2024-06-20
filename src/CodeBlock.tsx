import { Highlight, Language, Prism, PrismTheme } from 'prism-react-renderer';
import React from 'react';
import LineNumber from './LineNumber.js';
import { LineOutputProps } from './prism.js';

type MapTokens = Omit<LineOutputProps, 'props'> & {
  getLineNumbers?: (line: number) => React.ReactNode;
  errorLocation?: { line: number; col: number };
};

function addErrorHighlight(
  props: LineOutputProps,
  index: number,
  errorLocation?: MapTokens['errorLocation']
) {
  if (index + 1 === errorLocation?.line) {
    props.className = `${props.className || ''} token-line-error`;
  }
  return props;
}

export const mapTokens = ({
  tokens,
  getLineProps,
  getTokenProps,
  errorLocation,
  getLineNumbers,
}: MapTokens) => (
  <>
    {tokens.map((line, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <div
        {...addErrorHighlight(
          getLineProps({ line, key: String(i) }),
          i,
          errorLocation
        )}
      >
        {getLineNumbers?.(i + 1)}
        {line.map((token, ii) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={ii} {...getTokenProps({ token, key: String(ii) })} />
        ))}
      </div>
    ))}
  </>
);

interface Props {
  className?: string;
  style?: any;
  theme?: PrismTheme;
  code: string;
  language: Language;
  lineNumbers?: boolean;
}

function CodeBlock({ code, theme, language, lineNumbers, ...props }: Props) {
  const style = typeof theme?.plain === 'object' ? theme.plain : {};

  const getLineNumbers = lineNumbers
    ? (num: number) => <LineNumber theme={theme}>{num}</LineNumber>
    : undefined;
  return (
    <Highlight
      theme={theme}
      prism={Prism}
      code={code.trim()}
      language={language}
    >
      {(hl) => (
        <pre
          className={`${props.className || ''} ${hl.className}`}
          style={{ ...props.style, ...style, ...hl.style }}
        >
          <code>{mapTokens({ ...hl, getLineNumbers })}</code>
        </pre>
      )}
    </Highlight>
  );
}

export default CodeBlock;
