import { RouterProvider, useNavigate } from "react-router-dom";
import routes from "./routes/routes.tsx";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store.ts";
import { useEffect } from "react";
import useLoader from "./hooks/useLoader.tsx";
import Loader from "./components/Loader";
import { toggleLoading } from "./store/appSlice.tsx";

function App() {
  const app = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const HandlerLoader = () => {
    useLoader(dispatch);
  };
  useEffect(() => {
    dispatch(toggleLoading(true));
    HandlerLoader();
  }, []);

  return (
    <div className="h-screen">
      {app.isLoading && <Loader />}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
