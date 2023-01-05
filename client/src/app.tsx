import React from "react";
import { AuthProvider } from "./contexts/AuthenticationContext";
import Routes from "./components/routes/Routes";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
