import React from "react";
// MUI Components
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// React Hook Form
import { Controller } from "react-hook-form";

interface Props {
  control: any;
}

export default function EditRentalReportFormExpenses({ control }: Props) {
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
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              required
              label="Property Taxes"
              variant="outlined"
              error={!!error}
              {...field}
              helperText={error ? error.message : null}
              fullWidth
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">/month</InputAdornment>
                  ),
                } as any
              }
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
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              required
              label="Insurance"
              variant="outlined"
              {...field}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">/month</InputAdornment>
                  ),
                } as any
              }
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
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Water & Sewer"
              variant="outlined"
              {...field}
              fullWidth
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">/month</InputAdornment>
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

      {/* Electricity */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="electricity"
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Electricity"
              variant="outlined"
              {...field}
              fullWidth
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">/month</InputAdornment>
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

      {/* Gas */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="gas"
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Gas"
              variant="outlined"
              {...field}
              fullWidth
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">/month</InputAdornment>
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

      {/* Garbage */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="garbage"
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Garbage"
              variant="outlined"
              {...field}
              fullWidth
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">/month</InputAdornment>
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
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="HOA Fees"
              variant="outlined"
              {...field}
              fullWidth
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">/month</InputAdornment>
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

      {/* Management Fees */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="management_fees"
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Management Fees"
              variant="outlined"
              {...field}
              fullWidth
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">/month</InputAdornment>
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
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Repairs & Maintenance"
              variant="outlined"
              {...field}
              fullWidth
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">/month</InputAdornment>
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

      {/* Capital Expenditures */}
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="capital_expenditures"
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Capital Expenditures"
              variant="outlined"
              {...field}
              fullWidth
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">/month</InputAdornment>
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
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Vacancy"
              variant="outlined"
              {...field}
              fullWidth
              InputProps={
                {
                  type: "number",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">/month</InputAdornment>
                  ),
                } as any
              }
            />
          )}
        />
      </Grid>
    </>
  );
}
