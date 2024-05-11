import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react'; // Don't forget to import React

import {
  BrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";

import Routes from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-7xl mx-auto py-3'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </AuthProvider>

    </React.StrictMode>

  </div>

);
