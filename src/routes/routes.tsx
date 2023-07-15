import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Protected from "../components/Protected";
import Unauthorize from "../components/Unauthorize";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import ViewProfile from "../pages/ViewProfile";
import ErrorPage from "../pages/ErrorPage";
import SettingsDashboard from "../pages/SettingsDashboard";
import DashboardHome from "../pages/DashboardHome";
import MessagesDashboard from "../pages/MessagesDashboard";
import ChatPage from "../pages/ChatPage";

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
        children: [
          {
            path: "",
            element: <DashboardHome />,
          },
          {
            path: "/chat/:id",
            element: <MessagesDashboard />,
          },
        ],
      },
      {
        path: "/viewprofile/:id",
        element: <ViewProfile />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "",
            element: <Navigate to="/profile/settings" replace={true} />,
          },
          {
            path: "settings",
            element: <SettingsDashboard />,
          },
        ],
      },
      {
        path: "/messages/:id",
        element: <ChatPage />,
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
