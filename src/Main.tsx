import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { ModalProvider } from '@/contexts/ModalProvider';

import App from './App';
import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: false,
              refetchOnWindowFocus: false,
              cacheTime: 0,
            },
            mutations: {
              retry: false,
            },
          },
          queryCache: new QueryCache({
            onError: (error: any) => {
              alert(error?.response?.data.message);
            },
          }),
        })
      }
    >
      <BrowserRouter>
        <ModalProvider>
          <App />
        </ModalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
