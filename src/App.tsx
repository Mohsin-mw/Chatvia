import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.tsx";
import { useSelector } from "react-redux";
import { RootState } from "./store/store.ts";
import Loader from "./components/Loader";

function App() {
  const app = useSelector((state: RootState) => state.app);

  return (
    <div className="h-screen">
      {app.isLoading && <Loader />}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
