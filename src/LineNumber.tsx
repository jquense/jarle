import React from 'react';

const lineNumberStyle = {
  textAlign: 'right',
  userSelect: 'none',
  pointerEvents: 'none',
  paddingRight: 12,
} as const;

function LineNumber({ children, className, theme = true, style }: any) {
  return (
    <span
      aria-hidden
      className={`${className || ''} line-number`}
      style={
        theme
          ? {
              ...style,
              ...lineNumberStyle,
              ...theme.lineNumber,
            }
          : undefined
      }
    >
      {children}
    </span>
  );
}

export default LineNumber;
