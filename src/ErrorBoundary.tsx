import React from 'react';
import { Context } from './Provider';

interface Props {
  element: React.ReactNode;
}

class CodeLiveErrorBoundary extends React.Component<
  Props,
  { hasError?: boolean }
> {
  context!: React.ContextType<typeof Context>;

  componentDidCatch(error: Error) {
    this.context.onError(error);
  }

  render() {
    const { element: Element } = this.props;
    return typeof Element === 'function' ? <Element /> : Element;
  }
}

CodeLiveErrorBoundary.contextType = Context;

export default CodeLiveErrorBoundary;
