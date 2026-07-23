import {createBrowserRouter} from "react-router";
import Login from "./features/auth/pages/Login.jsx";
import Register from "./features/auth/pages/Register.jsx";
import Protected from "./features/auth/components/Protected.jsx";

export const router = createBrowserRouter([
    //Each object containes a route path and the component to render for that path
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <Protected><h1>Home Page</h1></Protected>
  }
])

