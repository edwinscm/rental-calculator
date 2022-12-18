// React
import { createContext, useState } from "react";
// Secure LS
import SecureLS from "secure-ls";
// React Router
import { useNavigate } from "react-router-dom";
// Services
import * as authenticationService from "../services/authentication.service";

const AuthenticationContext = createContext(null);

export function AuthProvider({ children }) {
  const ls = new SecureLS({
    encodingType: "aes",
    isCompression: true,
  });
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(ls.get("token"));

  async function signIn(credentials) {
    const response = await authenticationService.signIn(credentials);
    if (response.token) {
      ls.set("token", response.token);
      ls.set("userId", response.user.user_id);
      ls.set("userEmail", response.user.email);
      setIsAuth(true);
      navigate("/rental-report");
    }
  }

  async function signUp(credentials) {
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
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContext;
