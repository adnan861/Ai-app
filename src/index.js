import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Responsive.css';

import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
// import Login from './components/Loginold';
import Register from './components/Register';
import Home from './components/pages/Home';
import Login from './components/Login';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Service from './components/pages/Service';
import Contact from './components/pages/Contact';
import BlogDetails from './components/pages/BlogDetails';
// import LoginPage from './components/pages/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true, element:<Home/>},
      // {path:"login", element:<Login/>},
      {path:"register", element:<Register/>},
      {path:"login", element:<Login/>},
      {path:"about", element:<About/>},
      {path:"blog", element:<Blog/>},
      {path:"blog-details", element:<BlogDetails/>},
      {path:"service", element:<Service/>},
      {path:"contact", element:<Contact/>},
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
reportWebVitals();
