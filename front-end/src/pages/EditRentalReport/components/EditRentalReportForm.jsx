// MUI Components
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// Hooks
import useEditRentalReport from "../hooks/useEditRentalReport";
// Components
import EditRentalReportFormPropertyInformation from "./EditRentalReportFormPropertyInformation";
import EditRentalReportFormPurchase from "./EditRentalReportFormPurchase";
import EditRentalReportFormLoan from "./EditRentalReportFormLoan";
import EditRentalReportFormIncome from "./EditRentalReportFormIncome";
import EditRentalReportFormExpenses from "./EditRentalReportFormExpenses";

export default function EditRentalReportForm() {
  const { handleSubmit, onSubmit, control } = useEditRentalReport();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        {/* Property Information */}
        <EditRentalReportFormPropertyInformation control={control} />
        {/* Purchase */}
        <EditRentalReportFormPurchase control={control} />
        {/* Loan */}
        <EditRentalReportFormLoan control={control} />
        {/* Income */}
        <EditRentalReportFormIncome control={control} />
        {/* Expenses */}
        <EditRentalReportFormExpenses control={control} />
        {/* Submit Button */}
        <Grid item xs={12} md={12}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            onClick={handleSubmit(onSubmit)}
          >
            Update analysis
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
