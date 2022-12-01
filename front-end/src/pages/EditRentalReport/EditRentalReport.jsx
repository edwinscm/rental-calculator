// MUI Components
import Container from "@mui/material/Container";
// Components
import RentalReportForm from "../../common/components/RentalReportForm/RentalReportForm";

export default function EditRentalReport() {
  return (
    <Container maxWidth="sm">
      <h1>Edit Rental Report</h1>

      <RentalReportForm />
    </Container>
  );
}
