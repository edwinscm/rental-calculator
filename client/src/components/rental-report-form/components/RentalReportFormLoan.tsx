import React from "react";
// MUI Components
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// React Hook Form
import { Controller } from "react-hook-form";

interface Props {
  control: any;
}

export default function EditRentalReportFormLoan({ control }: Props) {
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
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Down Payment"
              variant="outlined"
              fullWidth
              {...field}
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                } as any
              }
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
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              required
              label="Interest Rate"
              variant="outlined"
              {...field}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  endAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                } as any
              }
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
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Points Charged"
              variant="outlined"
              fullWidth
              {...field}
              InputLabelProps={{ shrink: true }}
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                } as any
              }
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
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              required
              label="Loan Term"
              variant="outlined"
              {...field}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  endAdornment: (
                    <InputAdornment position="start">years</InputAdornment>
                  ),
                } as any
              }
            />
          )}
          rules={{ required: "Loan term required" }}
        />
      </Grid>
    </>
  );
}
