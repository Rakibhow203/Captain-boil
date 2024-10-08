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

  <div className='max-w-screen-xl mx-auto'>

    <React.StrictMode>

      <AuthProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </AuthProvider>

    </React.StrictMode>

  </div>

);
