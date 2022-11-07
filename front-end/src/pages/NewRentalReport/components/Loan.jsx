// MUI Components
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// React Hook Form
import { Controller } from "react-hook-form";

export default function Loan({ control }) {
  return (
    <>
      {/* Loan */}
      <Grid item xs={12}>
        <Typography component="h2" variant="h5" gutterBottom>
          Loan
        </Typography>
      </Grid>

      {/* Down Payment */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="down_payment"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Down Payment"
              variant="outlined"
              onChange={onChange}
              value={value ?? ""}
              fullWidth
              InputProps={{
                type: "number",
                pattern: "[0-9]*",
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Interest Rate */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="interest_rate"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              required
              label="Interest Rate"
              variant="outlined"
              onChange={onChange}
              value={value ?? ""}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              InputProps={{
                type: "number",
                pattern: "[0-9]*",
                endAdornment: (
                  <InputAdornment position="start">%</InputAdornment>
                ),
              }}
            />
          )}
          rules={{ required: "Interest ratee required" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Points Charged */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="points_charged"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Points Charged"
              variant="outlined"
              onChange={onChange}
              // defaultValue={0}
              value={value ?? 0}
              fullWidth
              InputProps={{
                type: "number",
                pattern: "[0-9]*",
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Loan term */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="loan_term"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              required
              label="Loan Term"
              variant="outlined"
              onChange={onChange}
              value={value ?? ""}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              InputProps={{
                type: "number",
                pattern: "[0-9]*",
                endAdornment: (
                  <InputAdornment position="start">years</InputAdornment>
                ),
              }}
            />
          )}
          rules={{ required: "Loan term required" }}
        />
      </Grid>
    </>
  );
}
