import cn from 'classnames'
import Highlight, { Language, Prism, PrismTheme } from 'prism-react-renderer'
import React from 'react'
import { LineOutputProps } from './prism'

type MapTokens = Omit<LineOutputProps, 'props'> & {
  lineNumbers?: boolean
  errorLocation?: { line: number; col: number }
}

function addErrorHighlight(
  props: LineOutputProps,
  index: number,
  errorLocation?: MapTokens['errorLocation'],
) {
  if (errorLocation && index === errorLocation.line) {
    props.className = cn(props.className, 'token-line-error')
  }
  return props
}

export const mapTokens = ({
  tokens,
  getLineProps,
  getTokenProps,
  lineNumbers,
  errorLocation,
}: MapTokens) => (
  <>
    {tokens.map((line, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <div
        {...addErrorHighlight(
          getLineProps({ line, key: String(i) }),
          i,
          errorLocation,
        )}
      >
        {lineNumbers && <span className="token-line-number">{i + 1}</span>}
        {line.map((token, ii) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={ii} {...getTokenProps({ token, key: String(ii) })} />
        ))}
      </div>
    ))}
  </>
)

interface Props {
  className?: string
  style?: any
  theme?: PrismTheme
  code: string
  language: Language
  lineNumbers?: boolean
}

function CodeBlock({ code, theme, language, lineNumbers, ...props }: Props) {
  const style = typeof theme?.plain === 'object' ? theme.plain : {}

  return (
    <Highlight
      theme={theme}
      Prism={Prism}
      code={code.trim()}
      language={language}
    >
      {(hl) => (
        <pre
          className={cn(props.className, hl.className)}
          style={{ ...props.style, ...style, ...hl.style }}
        >
          <code>{mapTokens({ ...hl, lineNumbers })}</code>
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
