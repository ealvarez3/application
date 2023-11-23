// React dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
// Styles
import './assets/css/normalize.css';
import './assets/css/globals.css';
// React router dependencies and routes
import { RouterProvider } from 'react-router-dom';
import routerMichelin from './MichelinRouter';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerMichelin} />
  </React.StrictMode>,
);