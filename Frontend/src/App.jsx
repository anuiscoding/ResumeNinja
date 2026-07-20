import React from 'react'
import {RouterProvider} from "react-router";
import {router} from "./app.routes.jsx";

const App = () => {
  return (
    //To use the router configuration we need RouterProvider, Which watches the current URL and renders component 
    <RouterProvider router={router} />
  )
}

export default App