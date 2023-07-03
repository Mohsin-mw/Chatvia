import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
type Props = {
  children: JSX.Element;
};
const Unauthorize: React.FC<Props> = ({ children }) => {
  const app = useSelector((state: RootState) => state.app);
  const user = app.user;
  return !user ? children : <Navigate to={"/"} replace />;
};

export default Unauthorize;
