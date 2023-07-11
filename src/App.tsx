import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.tsx";
import Loader from "./components/Loader";
import { useLoading } from "./context/LoadierContext.tsx";

function App() {
  const { isLoading } = useLoading();

  return (
    <div className="h-screen">
      {isLoading && <Loader />}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
