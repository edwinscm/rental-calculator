import React from "react";
// MUI Components
import Container from "@mui/material/Container";
// Components
import RentalReportForm from "../../components/rental-report-form/RentalReportForm";

export default function NewRentalReport() {
  return (
    <Container maxWidth="sm">
      <h1>New Rental Report</h1>

      <RentalReportForm />
    </Container>
  );
}
