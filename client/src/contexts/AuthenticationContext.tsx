import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SecureLS from "secure-ls";
import * as authenticationService from "../services/authentication.service";

const AuthenticationContext = createContext(null);

interface Props {
  children: any;
}

export function AuthProvider({ children }: Props) {
  const ls = new SecureLS({
    encodingType: "aes",
    isCompression: true,
  });
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(ls.get("token"));

  async function signIn(credentials: object) {
    const response = await authenticationService.signIn(credentials);
    if (response.token) {
      ls.set("token", response.token);
      ls.set("userId", response.user.user_id);
      ls.set("userEmail", response.user.email);
      setIsAuth(true);
      navigate("/rental-report");
    }
  }

  async function signUp(credentials: object) {
    const response = await authenticationService.signUp(credentials);
    if (response) {
      signIn(credentials);
    }
  }

  function signOut() {
    ls.clear();
    setIsAuth(false);
  }

  const value = {
    ls,
    isAuth,
    onLogin: signIn,
    onRegister: signUp,
    onLogout: signOut,
  } as any;

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContext;
