import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

import Blogs from "./pages/blog/Blogs";
import Services from "./pages/home/Services";

import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/services", element: <Services /> },
      { path: "*", element: <ErrorPage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
