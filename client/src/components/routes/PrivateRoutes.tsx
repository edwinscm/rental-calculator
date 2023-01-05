import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/AuthenticationContext";

export default function PrivateRoutes() {
  const { isAuth }: any = useContext(AuthContext);
  return isAuth ? <Outlet /> : <Navigate to="/sign-in" replace />;
}
