import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SingUp from "../pages/SingUp/SingUp";
import Gallery from "../pages/Gallery/Gallery";
import AllFoods from "../pages/AllFoods/AllFoods";
import AddFoodItem from "../pages/AddFoodItem/AddFoodItem";
import SinglePageDetails from "../pages/SinglePageDetails/SinglePageDetails";
import TopFoodDetails from "../pages/SinglePageDetails/TopFoodDetails";
import MyAddFood from "../pages/AddFoodItem/MyAddFood";
import MyOrderFood from "../pages/AddFoodItem/MyOrderFood";




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


      {
        path: 'Gallery',
        element: <Gallery></Gallery>
      },
      {

        path: 'allFoods',
        element: <AllFoods></AllFoods>
      },
      {

        path: 'addFoodItem',
        element: <AddFoodItem></AddFoodItem>

      },
      {

        path: '/singleDetails/:id',
        element: <SinglePageDetails></SinglePageDetails>,
        loader: () => fetch('http://localhost:5000/foods')

      },
      {

        path: '/Top/:id',
        element: <TopFoodDetails></TopFoodDetails>,
        loader: () => fetch('http://localhost:5000/tops')

      },

      {
        path: '/myFood',
        element: <MyAddFood></MyAddFood>
      },
      {
        path: '/orderFood',
        element: <MyOrderFood></MyOrderFood>

      }


    ]
  },
]);

export default Routes;