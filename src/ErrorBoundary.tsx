import React, { ReactElement } from 'react';
import { Context } from './Provider.js';

interface Props {
  element: ReactElement | null;
  showLastValid: boolean;
}

type State = { hasError?: boolean; element?: ReactElement | null };

class CodeLiveErrorBoundary extends React.Component<Props, State> {
  declare context: React.ContextType<typeof Context>;

  lastGoodResult: ReactElement | null = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
      element: props.element,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.element === state.element) {
      return state;
    }

    return { hasError: false, element: props.element };
  }

  componentDidCatch(error: Error) {
    this.context.onError(error);
  }

  componentDidMount() {
    if (!this.state.hasError) {
      this.lastGoodResult = this.props.element;
    }
  }

  componentDidUpdate() {
    if (!this.state.hasError) {
      this.lastGoodResult = this.props.element;
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.showLastValid ? this.lastGoodResult : null;
    }

    return this.props.element;
  }
}

CodeLiveErrorBoundary.contextType = Context;

export default CodeLiveErrorBoundary;
