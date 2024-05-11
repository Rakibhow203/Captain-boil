import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SingUp from "../pages/SingUp/SingUp";




const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {

        path: 'login',
        element: <LogIn></LogIn>
      },

      {
        path: 'signUp',
        element: <SingUp></SingUp>

      },



    ]
  },
]);

export default Routes;