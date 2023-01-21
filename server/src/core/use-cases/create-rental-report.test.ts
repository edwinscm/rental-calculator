// Entities
import RentalReport from "../entities/rental-report";
// Repositories interfaces
import RentalReportRepository from "../repositories-interfaces/rental-report-repository";
// Repositories
import InMemoryRentalReportRepository from "../../interface-adapters/repositories/in-memory-rental-report-repository";
// Use cases
import CreateRentalReport from "./create-rental-report";

describe("Create Book Use Case", () => {
  let rentalReportRepo: RentalReportRepository;
  let createRentalReport: CreateRentalReport;
  let rentalReport: RentalReport;

  beforeEach(() => {
    rentalReportRepo = new InMemoryRentalReportRepository();
    createRentalReport = new CreateRentalReport(rentalReportRepo);
    rentalReport = new RentalReport(
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
    );
  });

  test("Should create a rental report", async function () {
    const newRentalReport = await createRentalReport.execute(
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
    );
    expect(newRentalReport).toStrictEqual(rentalReport);
  });
});
