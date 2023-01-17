import React, { useState } from "react";
// MUI Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import HelpIcon from "@mui/icons-material/Help";
// React Hook Form
import { Controller } from "react-hook-form";
import AlertDialog from "../../alert-dialog/AlertDialog";

interface Props {
  control: any;
}

export default function EditRentalReportFormPurchase({ control }: Props) {
  const dialogText = {
    dialogTitle: `Calculating closing costs`,
    dialogContent: `1.5% of the purchase price is a good number to begin with.`,
    dialogButton1: `Close`,
  };

  const [open, setOpen] = useState(false);

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
          rules={{ required: "Purchase closing costs required" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <aside>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.875rem",
              color: "#858d94",
              marginBottom: "0.25rem",
            }}
          >
            <HelpIcon fontSize="inherit" />{" "}
            <Box
              sx={{
                marginLeft: "0.25rem",
              }}
            >
              HELP
            </Box>
          </Box>
          <Link
            sx={{ cursor: "pointer" }}
            underline="none"
            onClick={() => {
              setOpen(true);
            }}
          >
            Calculating closing costs
          </Link>
        </aside>
      </Grid>

      {/* Alert dialog */}
      <AlertDialog
        open={open}
        setOpen={setOpen}
        dialogTitle={dialogText.dialogTitle}
        dialogContent={dialogText.dialogContent}
        dialogButton1={dialogText.dialogButton1}
      />
    </>
  );
}
