import React from 'react'
import {RouterProvider} from "react-router";
import {router} from "./app.routes.jsx";
import {AuthProvider} from "./features/auth/auth.context.jsx";

const App = () => {
  return (
    //We wrap the entire application with AuthProvider to make authentication state available to all components
    <AuthProvider>
      {/* To use the router configuration we need RouterProvider, Which watches the current URL and renders component */}
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App