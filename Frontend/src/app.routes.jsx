import {createBrowserRouter} from "react-router";
import Login from "./features/auth/pages/Login.jsx";
import Register from "./features/auth/pages/Register.jsx";

export const router = createBrowserRouter([
    //Each object containes a route path and the component to render for that path
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

