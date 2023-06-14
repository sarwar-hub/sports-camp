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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='bg-deepLight dark:bg-deepDark'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </QueryClientProvider>
    </AuthProvider>

  </React.StrictMode>,
)
