import RentalReportRepository from "../../core/repositories-interfaces/rental-report-repository.js";
import RentalReport from "../../core/entities/rental-report";

class InMemoryRentalReportRepository implements RentalReportRepository {
  private rentalReportData: RentalReport[] = [
    new RentalReport(
      "84672d07-943c-4d13-9d9c-60f2805ab67a",
      "903 Miriam Dr W",
      "Columbus",
      "Ohio",
      43204,
      180000,
      2772,
      7.23,
      30,
      1783,
      311,
      63,
      1783,
      958,
      1795,
      -12,
      8832,
      0.008300646944444446,
      0.04906666666666667,
      182772,
      146772,
      0,
      437,
      1,
      4,
      3,
      1404,
      1957,
      "Nice home https://www.zillow.com/homedetails/903-Miriam-Dr-W-Columbus-OH-43204/33896796_zpid/",
      36000,
      0,
      111,
      117,
      61,
      50,
      200,
      178,
      89,
      89,
      89
    ),
  ];

  async getAllRentalReports(): Promise<RentalReport[]> {
    const rentalReports = [...this.rentalReportData];
    return Promise.resolve(rentalReports);
  }

  async addRentalReport(rentalReport: RentalReport): Promise<RentalReport> {
    this.rentalReportData.push(rentalReport);
    return Promise.resolve(rentalReport);
  }
}
export default InMemoryRentalReportRepository;
