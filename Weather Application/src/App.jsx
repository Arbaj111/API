import React from "react"

import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Service } from "./components/Service";



import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { About } from "./components/About";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "Service",
          element: <Service/>
        },
        {
          path: "",
          element: <Home/>
        },
        {
          path: "About",
          element: <About/>
        }
      ]
    },
  ]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
