import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
type Props = {
  children: JSX.Element;
};
const Protected: React.FC<Props> = ({ children }) => {
  const userAuthenticated = useSelector((state: RootState) => state.user);
  return userAuthenticated.user ? children : <Navigate to={"/login"} replace />;
};

export default Protected;
