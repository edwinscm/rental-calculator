// MUI Components
import Container from "@mui/material/Container";
// Components
import EditRentalReportForm from "./components/EditRentalReportForm";

export default function EditRentalReport() {
  return (
    <Container maxWidth="sm">
      <h1>Edit Rental Report</h1>

      <EditRentalReportForm />
    </Container>
  );
}
