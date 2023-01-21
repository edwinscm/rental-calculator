import RentalReport from "../entities/rental-report";

interface RentalReportRepository {
  getAllRentalReports(): Promise<RentalReport[]>;
  addRentalReport(rentalReport: RentalReport): Promise<RentalReport>;
}

export default RentalReportRepository;
