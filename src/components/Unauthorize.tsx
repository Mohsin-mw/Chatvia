import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
type Props = {
  children: JSX.Element;
};
const Unauthorize: React.FC<Props> = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? children : <Navigate to={"/"} replace />;
};

export default Unauthorize;
