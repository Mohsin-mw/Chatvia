import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Protected from "../components/Protected";
import Unauthorize from "../components/Unauthorize";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import ViewProfile from "../pages/ViewProfile";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Unauthorize>
        <Login />
      </Unauthorize>
    ),
  },
  {
    path: "/signup",
    element: (
      <Unauthorize>
        <Signup />
      </Unauthorize>
    ),
  },
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/viewprofile",
        element: <ViewProfile />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Profile />
      </Protected>
    ),
  },
]);

export default routes;
