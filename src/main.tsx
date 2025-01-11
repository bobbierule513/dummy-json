import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '@/App.tsx';
import ErrorBoundary from '@/components/error-boundary';
import '@/index.css';
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
