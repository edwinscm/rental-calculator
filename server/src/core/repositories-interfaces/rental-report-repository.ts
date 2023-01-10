import RentalReport from "../entities/rental-report";

interface RentalReportRepository {
  getAllRentalReports(): Promise<RentalReport>;
}

export default RentalReportRepository;
