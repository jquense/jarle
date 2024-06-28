import { Highlight, Language, Prism, PrismTheme } from 'prism-react-renderer';
import React from 'react';
import LineNumber from './LineNumber.js';
import { LineOutputProps, RenderProps } from './prism.js';

type MapTokens = RenderProps & {
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
    {tokens.map((line, i) => {
      const { key = i, ...lineProps } = getLineProps({ line, key: String(i) });

      return (
        <div key={key} {...addErrorHighlight(lineProps, i, errorLocation)}>
          {getLineNumbers?.(i + 1)}
          {line.map((token, ii) => {
            const { key = ii, ...props } = getTokenProps({
              token,
              key: String(ii),
            });

            return <span key={key} {...props} />;
          })}
        </div>
      );
    })}
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
