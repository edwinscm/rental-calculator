import RentalReportRepository from "../../core/repositories-interfaces/rental-report-repository.js";
import RentalReport from "../../core/entities/rental-report.js";
import * as database from "../../frameworks-drivers/postgresql/index.js";

class SqlRentalReportRepository implements RentalReportRepository {
  async getAllRentalReports(): Promise<RentalReport> {
    const sqlQuery = `SELECT * FROM rental_reports`;
    const { rows } = await database.query(sqlQuery);
    return Promise.resolve(rows);
  }
}
export default SqlRentalReportRepository;
