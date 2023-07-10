import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.tsx";
import Loader from "./components/Loader";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.tsx";
import { useLoading } from "./context/LoadierContext.tsx";

function App() {
  const { isLoading } = useLoading();
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="h-screen">
      {isLoading && <Loader />}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
