// Context
import { AuthProvider } from "./setup/auth/auth.context";
// Routes
import Routes from "./setup/routes";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
