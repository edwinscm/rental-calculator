import RentalReport from "../entities/rental-report";

class GetRentalReports {
  private rentalReportRepo;

  constructor(rentalReportRepository: any) {
    this.rentalReportRepo = rentalReportRepository;
  }

  async execute(): Promise<RentalReport> {
    const persisted = await this.rentalReportRepo.getAllRentalReports();
    return persisted;
  }
}

export default GetRentalReports;
