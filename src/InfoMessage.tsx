import React from 'react';

export default function InfoMessage(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        right: 0,
      }}
    />
  );
}
