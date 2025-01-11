import { StrictMode } from 'react';

import App from '@/App.tsx';
import '@/index.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import ErrorBoundary from '@/components/error-boundary';

import { store } from '@/lib/store/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
