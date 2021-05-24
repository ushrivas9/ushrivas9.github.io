import React from "react";
import { Navigate } from "react-router-dom";
import About from "src/views/about/About";
import Home from "src/views/home/Home";

const routes = () => [
  {
    path: "/",
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "/", element: <Navigate to="/home" /> },
    ],
  },
];

export default routes;
