import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Cart,
  About,
  Contact,
  HomeLayout,
  Landing,
  Login,
  Register,
  WhishList,
} from "./pages";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/wishlist",
        element: <WhishList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
