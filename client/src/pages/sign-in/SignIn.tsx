import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import BusinessIcon from "@mui/icons-material/Business";
import {
  Button,
  Box,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AuthContext from "../../contexts/AuthenticationContext";

export default function SignIn() {
  const { handleSubmit, control } = useForm();
  const { onLogin }: any = useContext(AuthContext);

  async function handleLogin(credentials: any) {
    await onLogin(credentials);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Container
        sx={{
          maxWidth: "314px",
          boxSizing: "content-box",
          paddingTop: "10rem",
        }}
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
              <Link to="/sign-up">Create account</Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}
