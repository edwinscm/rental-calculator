// MUI Components
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// React Hook Form
import { Controller } from "react-hook-form";

export default function EditRentalReportFormPurchase({ control }) {
  return (
    <>
      {/* Purchase */}
      <Grid item xs={12}>
        <Typography component="h2" variant="h5" gutterBottom>
          Purchase
        </Typography>
      </Grid>

      {/* Purchase price */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="purchase_price"
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              required
              label="Purchase Price"
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
              }}
            />
          )}
          rules={{ required: "Purchase price required" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Purchase closing costs */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="purchase_closing_costs"
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              required
              label="Purchase Closing Costs"
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
              }}
            />
          )}
          rules={{ required: "Purchase closing costs required" }}
        />
      </Grid>
    </>
  );
}
