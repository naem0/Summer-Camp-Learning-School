import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto font-sans'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
   
  </React.StrictMode>,
)