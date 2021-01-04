import React from 'react';

const lineNumberStyle = {
  textAlign: 'right',
  userSelect: 'none',
  pointerEvents: 'none',
  paddingRight: 12,
} as const;

function LineNumber({ children, theme = true }: any) {
  return (
    <div
      aria-hidden
      className="line-number"
      style={theme ? { ...lineNumberStyle, ...theme.lineNumber } : undefined}
    >
      {children}
    </div>
  );
}

export default LineNumber;
