import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { RouterProvider } from "react-router-dom";
import router from './router';
import AuthProvider from './context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <div className='bg-deepLight dark:bg-deepDark'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthProvider>

  </React.StrictMode>,
)
