import React from 'react';

const srOnlyStyle = {
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'inset(50%)',
  height: 1,
  width: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
};
export default function InfoMessage({
  srOnly = false,
  ...props
}: React.HTMLProps<HTMLDivElement> & { srOnly?: boolean }) {
  return (
    <div
      {...props}
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        right: 0,
        ...(srOnly && srOnlyStyle),
      }}
    />
  );
}
