import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import LogOut from "../components/logOut/logOut";
import Error from "../components/Error/error";
// import { Account } from "../components/Account/Account";
import { Cart } from "../components/Cart/Cart";
import Body from "../components/Home/Body";
import { RestaurantsDetails } from "../components/RestaurantsDetails/RestaurantsDetails";
import { About } from "../components/About/About";
import { Help } from "../components/Help/Help";

// const RestaurantsDetails = lazy(() => {
//   import("../components/RestaurantsDetails/RestaurantsDetails");
// });

// function delayForDemo(promise) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }

export const MainRouting = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/restaurants/:id",
          element: <RestaurantsDetails />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Cart",
          element: <Cart />,
        },
        {
          path: "/help",
          element: <Help />,
        },
      ],
      errorElement: <Error />,
    },
    {
      path: "/logout",
      element: <LogOut />,
    },
  ]);

  return <RouterProvider router={router} />;
};
