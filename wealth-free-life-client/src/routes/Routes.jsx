import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import App from "@/App";
import Wallet from "@/pages/Wallet";
import Signin from "@/pages/auth/Signin";
import Signup from "@/pages/auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
    ],
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

export default router;
