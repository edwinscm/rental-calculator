import RentalReportRepository from "../../core/repositories-interfaces/rental-report-repository.js";
import RentalReport from "../../core/entities/rental-report.js";
import * as database from "../../frameworks-drivers/postgresql/index";

class SqlRentalReportRepository implements RentalReportRepository {
  async getAllRentalReports(): Promise<RentalReport[]> {
    const sqlQuery = `SELECT * FROM rental_reports`;
    const { rows } = await database.query(sqlQuery);
    return Promise.resolve(rows);
  }

  async addRentalReport(rentalReport: RentalReport): Promise<RentalReport> {
    const sqlQuery = `INSERT INTO rental_reports (
      rental_report_uuid,
      street_address,
      city,
      state,
      zip_code,
      bedrooms,
      bathrooms,
      square_feet,
      year_built,
      description,
      purchase_price,
      purchase_closing_costs,
      down_payment,
      interest_rate,
      points_charged,
      loan_term,
      gross_monthly_income,
      property_taxes,
      insurance,
      water_sewer,
      electricity,
      gas,
      garbage,
      hoa_fees,
      management_fees,
      repairs_maintenance,
      capital_expenditures,
      vacancy,
      monthly_income,
      operating_expenses,
      monthly_expenses,
      cashflow,
      noi,
      coc_roi,
      purchase_cap_rate,
      total_cost_of_project,
      loan_amount,
      loan_fees,
      monthly_mortgage_payment,
      user_id
    ) VALUES (
      '${rentalReport.rental_report_uuid}',
      '${rentalReport.street_address}',
      '${rentalReport.city}',
      '${rentalReport.state}',
      ${rentalReport.zip_code},
      ${rentalReport.bedrooms},
      ${rentalReport.bathrooms},
      ${rentalReport.square_feet},
      ${rentalReport.year_built},
      '${rentalReport.description}',
      ${rentalReport.purchase_price},
      ${rentalReport.purchase_closing_costs},
      ${rentalReport.down_payment},
      ${rentalReport.interest_rate},
      ${rentalReport.points_charged},
      ${rentalReport.loan_term},
      ${rentalReport.gross_monthly_income},
      ${rentalReport.property_taxes},
      ${rentalReport.insurance},
      ${rentalReport.water_sewer},
      ${rentalReport.electricity},
      ${rentalReport.gas},
      ${rentalReport.garbage},
      ${rentalReport.hoa_fees},
      ${rentalReport.management_fees},
      ${rentalReport.repairs_maintenance},
      ${rentalReport.capital_expenditures},
      ${rentalReport.vacancy},
      ${rentalReport.monthly_income},
      ${rentalReport.operating_expenses},
      ${rentalReport.monthly_expenses},
      ${rentalReport.cashflow},
      ${rentalReport.noi},
      ${rentalReport.coc_roi},
      ${rentalReport.purchase_cap_rate},
      ${rentalReport.total_cost_of_project},
      ${rentalReport.loan_amount},
      ${rentalReport.loan_fees},
      ${rentalReport.monthly_mortgage_payment},
      ${rentalReport.user_id}
    )`;
    const { rows } = await database.query(sqlQuery);
    return Promise.resolve(rows);
  }
}
export default SqlRentalReportRepository;
