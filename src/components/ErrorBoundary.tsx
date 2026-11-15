import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error('Application render error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#fcf6ee] text-slate-900 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-3xl border border-[#ebd7c2] p-8 shadow-xl text-center space-y-4">
            <h1 className="text-2xl font-bold font-serif text-slate-900">
              {SITE_CONFIG.brandName}
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Something went wrong while loading this view. Please refresh the page or reach our Punjab team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="px-6 py-2.5 rounded-full bg-[#d94819] hover:bg-[#c23d13] text-white text-sm font-bold transition-colors"
              >
                Reload Page
              </button>
              <a
                href={SITE_CONFIG.phoneHref}
                className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition-colors"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
