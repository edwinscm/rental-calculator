// MUI Components
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// React Hook Form
import { Controller } from "react-hook-form";

export default function Expenses({ control }) {
  return (
    <>
      {/* Expenses */}
      <Grid item xs={12}>
        <Typography component="h2" variant="h5" gutterBottom>
          Expenses
        </Typography>
      </Grid>

      {/* Taxes & Insurance */}
      <Grid item xs={12}>
        <Divider textAlign="left">
          <Typography variant="body1" sx={{ color: "#6c757d" }} gutterBottom>
            Taxes & Insurance
          </Typography>
        </Divider>
      </Grid>

      {/* Property Taxes */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="property_taxes"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              required
              label="Property Taxes"
              variant="outlined"
              onChange={onChange}
              value={value ?? ""}
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
          rules={{ required: "Property taxes required" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Insurance */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="insurance"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              required
              label="Insurance"
              variant="outlined"
              onChange={onChange}
              value={value ?? ""}
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
          rules={{ required: "Insurance required" }}
        />
      </Grid>

      {/* Utilities */}
      <Grid item xs={12}>
        <Divider textAlign="left">
          <Typography variant="body1" sx={{ color: "#6c757d" }} gutterBottom>
            Utilities
          </Typography>
        </Divider>
      </Grid>

      {/* Water & Sewer */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="water_sewer"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Water & Sewer"
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
                endAdornment: (
                  <InputAdornment position="start">/month</InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Electricity */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="electricity"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Electricity"
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
                endAdornment: (
                  <InputAdornment position="start">/month</InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Gas */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="gas"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Gas"
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
                endAdornment: (
                  <InputAdornment position="start">/month</InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Garbage */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="garbage"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Garbage"
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
                endAdornment: (
                  <InputAdornment position="start">/month</InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Fees */}
      <Grid item xs={12}>
        <Divider textAlign="left">
          <Typography variant="body1" sx={{ color: "#6c757d" }} gutterBottom>
            Fees
          </Typography>
        </Divider>
      </Grid>

      {/* HOA Fees */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="hoa_fees"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="HOA Fees"
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
                endAdornment: (
                  <InputAdornment position="start">/month</InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Management Fees */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="management_fees"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Management Fees"
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
                endAdornment: (
                  <InputAdornment position="start">/month</InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Maintenance */}
      <Grid item xs={12}>
        <Divider textAlign="left">
          <Typography variant="body1" sx={{ color: "#6c757d" }} gutterBottom>
            Maintenance
          </Typography>
        </Divider>
      </Grid>

      {/* Repairs & Maintenance */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="repairs_maintenance"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Repairs & Maintenance"
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
                endAdornment: (
                  <InputAdornment position="start">/month</InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Capital Expenditures */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="capital_expenditures"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Capital Expenditures"
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
                endAdornment: (
                  <InputAdornment position="start">/month</InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Use as offset */}
      </Grid>

      {/* Other */}
      <Grid item xs={12}>
        <Divider textAlign="left">
          <Typography variant="body1" sx={{ color: "#6c757d" }} gutterBottom>
            Other
          </Typography>
        </Divider>
      </Grid>

      {/* Vacancy */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="vacancy"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Vacancy"
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
                endAdornment: (
                  <InputAdornment position="start">/month</InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
    </>
  );
}
