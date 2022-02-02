import React from 'react';
import ResortCardError from '../ResortCardError/ResortCardError';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <ResortCardError
            title="Woah... Gnarly Crash!!!"
            help="Looks like we french fried instead of pizzad. Maybe try refreshing and see if it works again?"
            error={this.state.error.toString()}
            errorInfo={this.state.errorInfo.componentStack}
          />
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
