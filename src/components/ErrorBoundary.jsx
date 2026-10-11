import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
    
    // Here you could also log to an error reporting service
    // e.g., Sentry, LogRocket, etc.
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full glass-card rounded-3xl p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-2">Oops! Something went wrong</h1>
              <p className="text-gray-400 mb-6">
                We're sorry for the inconvenience. Please try refreshing the page.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.location.reload()}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Refresh Page
              </button>
              <a
                href="/"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Go to Homepage
              </a>
            </div>
            
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-300">
                  Error Details (Dev Only)
                </summary>
                <pre className="mt-2 text-xs bg-black/50 p-3 rounded-lg overflow-auto max-h-40">
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
