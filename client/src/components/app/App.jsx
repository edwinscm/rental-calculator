// Context
import { AuthProvider } from "../../contexts/AuthenticationContext";
// Routes
import Routes from "../routes/Routes";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
