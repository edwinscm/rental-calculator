// React Hooks
import { useContext } from "react";
// React Router
import { Navigate, Outlet } from "react-router-dom";
// Context
import AuthContext from "../../contexts/AuthenticationContext";

export default function PrivateRoutes() {
  let { isAuth } = useContext(AuthContext);
  return isAuth ? <Outlet /> : <Navigate to="/sign-in" replace />;
}
