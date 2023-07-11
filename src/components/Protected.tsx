import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
type Props = {
  children: JSX.Element;
};
const Protected: React.FC<Props> = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? children : <Navigate to={"/login"} replace />;
};

export default Protected;
