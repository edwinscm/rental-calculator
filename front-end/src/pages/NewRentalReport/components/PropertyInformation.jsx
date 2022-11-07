// MUI Components
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// React Hook Form
import { Controller } from "react-hook-form";
// Constants
import states from "../../../common/constants/states";
import bedrooms from "../../../common/constants/bedrooms";
import bathrooms from "../../../common/constants/bathrooms";

export default function PropertyInformation({ control }) {
  const generateMuiSelectOptions = (options) => {
    return options.map((option, index) => {
      return (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <>
      {/* Property Information */}
      <Grid item xs={12}>
        <Typography component="h2" variant="h5" gutterBottom>
          Property Information
        </Typography>
      </Grid>

      {/* Street Address */}
      <Grid item xs={12} md={12}>
        <Controller
          control={control}
          name="street_address"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              required
              label="Street Address"
              variant="outlined"
              onChange={onChange}
              value={value ?? ""}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
            />
          )}
          rules={{ required: "Street address required" }}
        />
      </Grid>

      {/* City */}
      <Grid item xs={12} md={4}>
        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              required
              label="City"
              variant="outlined"
              onChange={onChange}
              value={value ?? ""}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
            />
          )}
          rules={{ required: "City required" }}
        />
      </Grid>

      {/* State */}
      <Grid item xs={12} md={4}>
        <Controller
          control={control}
          name="state"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel required shrink>
                  State
                </InputLabel>
                <Select
                  notched
                  label="State"
                  onChange={onChange}
                  // defaultValue=""
                  value={value ?? ""}
                  error={!!error}
                  fullWidth
                >
                  {generateMuiSelectOptions(states)}
                </Select>
                {error && (
                  <FormHelperText sx={{ color: "#d32f2f" }}>
                    State required
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
          )}
          rules={{ required: true }}
        />
      </Grid>

      {/* Zip Code */}
      <Grid item xs={12} md={4}>
        <Controller
          control={control}
          name="zip_code"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              required
              label="Zip Code"
              variant="outlined"
              onChange={onChange}
              value={value ?? ""}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              InputProps={{
                type: "number",
                pattern: "[0-9]*",
              }}
            />
          )}
          rules={{ required: "Zip code required" }}
        />
      </Grid>

      {/* Property features & Description */}
      <Grid item xs={12}>
        <Divider textAlign="left">
          <Typography variant="body1" sx={{ color: "#6c757d" }} gutterBottom>
            Property features & Description
          </Typography>
        </Divider>
      </Grid>

      {/* Bedrooms */}
      <Grid item xs={12} md={4}>
        <Controller
          control={control}
          name="bedrooms"
          render={({ field: { onChange, value } }) => (
            <FormControl fullWidth>
              <InputLabel shrink>Bedrooms</InputLabel>
              <Select
                notched
                label="Bedrooms"
                // defaultValue=""
                onChange={onChange}
                value={value ?? ""}
                fullWidth
              >
                {generateMuiSelectOptions(bedrooms)}
              </Select>
            </FormControl>
          )}
        />
      </Grid>

      {/* Bathrooms */}
      <Grid item xs={12} md={4}>
        <Controller
          control={control}
          name="bathrooms"
          render={({ field: { onChange, value } }) => (
            <FormControl fullWidth>
              <InputLabel shrink>Bathrooms</InputLabel>
              <Select
                notched
                label="Bathrooms"
                // defaultValue=""
                onChange={onChange}
                value={value ?? ""}
                fullWidth
              >
                {generateMuiSelectOptions(bathrooms)}
              </Select>
            </FormControl>
          )}
        />
      </Grid>

      {/* Square Feet */}
      <Grid item xs={12} md={4}>
        <Controller
          control={control}
          name="square_feet"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Square Feet"
              variant="outlined"
              onChange={onChange}
              value={value ?? ""}
              fullWidth
              InputProps={{
                type: "number",
                pattern: "[0-9]*",
                endAdornment: (
                  <InputAdornment position="start">ft²</InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>

      {/* Year built */}
      <Grid item xs={12} md={4}>
        <Controller
          control={control}
          name="year_built"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Year Built"
              variant="outlined"
              onChange={onChange}
              value={value ?? ""}
              fullWidth
              InputProps={{
                type: "number",
                pattern: "[0-9]*",
              }}
            />
          )}
        />
      </Grid>

      {/* Description */}
      <Grid item xs={12} md={12}>
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Description"
              variant="outlined"
              multiline
              minRows={4}
              onChange={onChange}
              value={value ?? ""}
              fullWidth
            />
          )}
        />
      </Grid>
    </>
  );
}
