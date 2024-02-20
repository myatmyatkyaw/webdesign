import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import {
//   createBrowserRouter,
//   RouterProvider
// } from "react-router-dom";

import App from './App';

// import Home from './Home';
// import Feature from './Feature/Feature';
// import Feature2 from './Feature/Feature2';
// import Feature3 from './Feature/Feature3';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import Pricing from './Pricing/Pricing';
// import Pricing2 from './Pricing/Pricing2';
// import Pricing3 from './Pricing/Pricing3';
// import About from './About/About';
// import About2 from './About/About2';
// import Contact from './Contact';



//const router = createBrowserRouter([
  
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/home",
//     element: <div><Home /></div>,
//   },
//   {
//     path: "/feature",
//     element: <div><Feature /><Feature2 /><Feature3 /></div>,
//   },
 

//   {
//     path: "/price",
//     element: <div><Pricing /><Pricing2 /><Pricing3 /></div>,
//   },
 
//   {
//     path: "/about",
//     element: <div><About /><About2 /></div>,
//   },
 
//   {
//     path: "/contact",
//     element: <div><Contact /></div>,
//   },
 
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

