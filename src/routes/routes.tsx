import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Protected from "../components/Protected";
import Unauthorize from "../components/Unauthorize";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import ViewProfile from "../pages/ViewProfile";
import Users from "../pages/Users";
import ErrorPage from "../pages/ErrorPage";

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
    errorElement: <ErrorPage />,
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
      {
        path: "/users",
        element: <Users />,
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
