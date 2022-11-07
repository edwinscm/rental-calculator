// React
import { createContext, useState } from "react";
// Secure LS
import SecureLS from "secure-ls";
// React Router
import { useNavigate } from "react-router-dom";
// Services
import * as AuthService from "./auth.service";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const ls = new SecureLS({
    encodingType: "aes",
    isCompression: true,
  });
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(ls.get("token"));

  async function signIn(credentials) {
    const response = await AuthService.signIn(credentials);
    if (response.token) {
      ls.set("token", response.token);
      ls.set("userId", response.user.user_id);
      ls.set("userEmail", response.user.email);
      setIsAuth(true);
      navigate("/rental-report");
    }
  }

  async function signUp(credentials) {
    const response = await AuthService.signUp(credentials);
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
