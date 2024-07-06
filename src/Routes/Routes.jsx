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
import Update from "../pages/AddFoodItem/Update";
import Purchase from "../pages/Purchase/Purchase";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import PurRequest from "../pages/Purchase/PurRequest";





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
        path: '/request',
        element: (
          <PrivateRoute>
            <PurRequest></PurRequest>
          </PrivateRoute>
        ),
      },
      {
        path: 'signUp',
        element: <SingUp></SingUp>

      },


      {
        path: '/gallery',
        element: <Gallery></Gallery>,
        loader: () => fetch('https://the-captain-boil-server.vercel.app/foods'),
      },
      {

        path: 'allFoods',
        element: <AllFoods></AllFoods>
      },
      {

        path: 'addFoodItem',
        element: <PrivateRoute><AddFoodItem></AddFoodItem>
        </PrivateRoute>
      },
      {

        path: '/singleDetails/:id',
        element: <PrivateRoute> <SinglePageDetails></SinglePageDetails></PrivateRoute>,
        loader: () => fetch('https://the-captain-boil-server.vercel.app/foods')

      },
      {

        path: '/Top/:id',
        element: <PrivateRoute><TopFoodDetails></TopFoodDetails></PrivateRoute>,
        loader: () => fetch('https://the-captain-boil-server.vercel.app/foods')

      },

      {
        path: '/myFood',
        element: <MyAddFood></MyAddFood>
      },
      {
        path: '/order',
        element: <MyOrderFood></MyOrderFood>

      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://the-captain-boil-server.vercel.app/tops/${params.id}`)

      },
      {
        path: '/purchase/:id',
        element: <Purchase></Purchase>,
        loader: () => fetch('https://the-captain-boil-server.vercel.app/foods')


      },






    ]
  },
]);

export default Routes;