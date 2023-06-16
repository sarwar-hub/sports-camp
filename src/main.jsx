import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { RouterProvider } from "react-router-dom";
import router from './router';
import AuthProvider from './context/AuthProvider';

// data for tanstack query
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
const queryClient = new QueryClient()
// helmet
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='bg-deepLight dark:bg-deepDark'>
            <RouterProvider router={router}></RouterProvider>
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>,
)
