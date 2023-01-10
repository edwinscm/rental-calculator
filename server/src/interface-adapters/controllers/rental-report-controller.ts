import GetRentalReports from "../../core/use-cases/get-rental-reports.js";
import SqlRentalReportRepository from "../repositories/sql-rental-report-repository.js";

const rentalReportRepo = new SqlRentalReportRepository();
const getRentalReportsService = new GetRentalReports(rentalReportRepo);

export async function getRentalReportList(req: any, res: any) {
  try {
    const rentalReportList = await getRentalReportsService.execute();
    res.status(201).json({ rentalReportList });
  } catch (err) {
    if (err instanceof Error) {
      res.status(401).json({ success: false, error: err.message });
    }
  }
}

export async function createRentalReport() {}
