// MUI Components
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// Hooks
import useRentalReportForm from "./hooks/useRentalReportForm";
// React Router
import { useLocation } from "react-router-dom";
// Components
import RentalReportFormPropertyInformation from "./components/RentalReportFormPropertyInformation";
import RentalReportFormPurchase from "./components/RentalReportFormPurchase";
import RentalReportFormLoan from "./components/RentalReportFormLoan";
import RentalReportFormIncome from "./components/RentalReportFormIncome";
import RentalReportFormExpenses from "./components/RentalReportFormExpenses";

export default function RentalReportForm() {
  const location = useLocation();
  const { handleSubmit, onSubmit, control } = useRentalReportForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        {/* Property Information */}
        <RentalReportFormPropertyInformation control={control} />
        {/* Purchase */}
        <RentalReportFormPurchase control={control} />
        {/* Loan */}
        <RentalReportFormLoan control={control} />
        {/* Income */}
        <RentalReportFormIncome control={control} />
        {/* Expenses */}
        <RentalReportFormExpenses control={control} />
        {/* Submit Button */}
        <Grid item xs={12} md={12}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            onClick={handleSubmit(onSubmit)}
          >
            {location.pathname === "/new-rental-report"
              ? "Finish analysis"
              : "Update analysis"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
