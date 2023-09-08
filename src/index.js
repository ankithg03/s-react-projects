import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from './Route/Index';
import reportWebVitals from './reportWebVitals';
import './styles/index.css'
import toast, { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route />
    <Toaster 
      // position="top-right"
      reverseOrder={false}/>
  </React.StrictMode>
);

reportWebVitals();
