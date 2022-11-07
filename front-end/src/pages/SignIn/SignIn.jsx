// React Hooks
import { useContext } from "react";
// React Router
import { Link } from "react-router-dom";
// MUI Components
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// React Hook Form
import { Controller, useForm } from "react-hook-form";
// Context
import AuthContext from "../../setup/auth/auth.context";

export default function SignIn() {
  const { handleSubmit, control } = useForm();
  const { onLogin } = useContext(AuthContext);

  async function handleLogin(credentials) {
    await onLogin(credentials);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Container
        sx={{ maxWidth: "314px", boxSizing: "content-box" }}
        maxWidth={false}
      >
        {/* Sign in header */}
        <Box
          sx={{
            marginBottom: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BusinessIcon sx={{ marginBottom: "16px" }} />
          <Typography component="div" variant="h5">
            Rental Calculator
          </Typography>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </Box>

        {/* Sign in form */}
        <form onSubmit={handleSubmit(handleLogin)}>
          <Grid container spacing={2}>
            {/* Email */}
            <Grid item xs={12}>
              <Controller
                control={control}
                name="email"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    required
                    label="Email"
                    variant="outlined"
                    onChange={onChange}
                    value={value ?? ""}
                    error={!!error}
                    helperText={error ? error.message : null}
                    fullWidth
                  />
                )}
                rules={{ required: "Email required" }}
              />
            </Grid>

            {/* Password */}
            <Grid item xs={12}>
              <Controller
                control={control}
                name="password"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    required
                    label="Password"
                    variant="outlined"
                    type="password"
                    autoComplete="password"
                    onChange={onChange}
                    value={value ?? ""}
                    error={!!error}
                    helperText={error ? error.message : null}
                    fullWidth
                  />
                )}
                rules={{ required: "Password required" }}
              />
            </Grid>

            {/* Sign In Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                onClick={handleSubmit(handleLogin)}
                fullWidth
              >
                Sign in
              </Button>
            </Grid>

            {/* Create Account Button */}
            <Grid item xs={12}>
              <Link variant="body1" to="/sign-up">
                Create account
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}
