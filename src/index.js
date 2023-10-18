import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from './components/navbar';
import ErrorPage from "./error-page";
import Project from './components/projects';
import About from './components/about';
import BlogList from './components/blog';

import './index.css';
import reportWebVitals from './reportWebVitals';



const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "projects",
    element: <Project />,
  },
  {
    path: "blog",
    element: <BlogList />,
    // children: [
    //   {
    //     path: "blog/:blogId",
    //     element: <BlogDetail />,
    //   },
    // ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
