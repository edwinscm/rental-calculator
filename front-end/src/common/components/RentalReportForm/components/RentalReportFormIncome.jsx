// MUI Components
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// React Hook Form
import { Controller } from "react-hook-form";

export default function EditRentalReportFormIncome({ control }) {
  return (
    <>
      {/* Income */}
      <Grid item xs={12}>
        <Typography component="h2" variant="h5" gutterBottom>
          Income
        </Typography>
      </Grid>

      {/* Gross Monthly Income */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="gross_monthly_income"
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              required
              label="Gross Monthly Income"
              variant="outlined"
              {...field}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              InputProps={{
                type: "number",
                pattern: "[0-9]*",
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">/month</InputAdornment>
                ),
              }}
            />
          )}
          rules={{ required: "Gross monthly income required" }}
        />
      </Grid>
    </>
  );
}
