// React DOM
import ReactDOM from "react-dom/client";
// MUI
import { ThemeProvider } from "@mui/material/styles";
import theme from "./style/theme";
// React Router
import { BrowserRouter } from "react-router-dom";
// CSS
import "./style/index.css";
// Components
import App from "./components/app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
