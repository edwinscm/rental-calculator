// React Hooks
import { useContext } from "react";
// MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// Context
import AuthContext from "../../setup/auth/auth.context";

export default function Account() {
  let { onLogout } = useContext(AuthContext);
  let { ls } = useContext(AuthContext);

  return (
    <>
      <h1>Account</h1>
      <Box sx={{ marginBottom: 2 }}>Email: {ls.get("userEmail")}</Box>
      <Box>
        <Button variant="outlined" color="error" onClick={onLogout}>
          Sign Out
        </Button>
      </Box>
    </>
  );
}
