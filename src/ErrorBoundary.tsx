import React, { ReactElement } from 'react';
import { ActionContext } from './Provider.js';

interface Props {
  element: ReactElement | null;
  showLastValid: boolean;
}

type State = { hasError?: boolean; element?: ReactElement | null };

class CodeLiveErrorBoundary extends React.Component<Props, State> {
  declare context: React.ContextType<typeof ActionContext>;

  lastGoodResult: ReactElement | null = null;

  pendingLastGoodResult: ReactElement | null = null;
  timeout: NodeJS.Timeout | null = null;

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

    return {
      hasError: false,
      element: props.element,
    };
  }

  componentWillUnmount(): void {
    clearTimeout(this.timeout!);
  }

  componentDidCatch(error: Error) {
    clearTimeout(this.timeout!);
    this.pendingLastGoodResult = null;

    // if the lastGoodResult is crashing then don't keep reporting it.
    if (this.state.hasError && this.lastGoodResult) {
      this.lastGoodResult = null;
      return;
    }

    this.context.onError(error);
  }

  componentDidMount() {
    if (!this.state.hasError) {
      this.pendingLastGoodResult = this.props.element;
    }
  }

  componentDidUpdate() {
    if (!this.state.hasError) {
      if (this.pendingLastGoodResult) {
        this.lastGoodResult = this.pendingLastGoodResult;
      }

      this.pendingLastGoodResult = this.props.element;

      // sometimes cDU is called before the error is caught...
      this.timeout = setTimeout(() => {
        if (this.state.hasError || !this.pendingLastGoodResult) return;
        this.lastGoodResult = this.pendingLastGoodResult;
      }, 100);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.showLastValid ? this.lastGoodResult : null;
    }

    return this.props.element;
  }
}

CodeLiveErrorBoundary.contextType = ActionContext;

export default CodeLiveErrorBoundary;
