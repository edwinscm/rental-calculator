import SqlRentalReportRepository from "../repositories/sql-rental-report-repository.js";
import GetRentalReports from "../../core/use-cases/get-rental-reports.js";
import CreateRentalReports from "../../core/use-cases/create-rental-report.js";

const rentalReportRepo = new SqlRentalReportRepository();
const getRentalReportsService = new GetRentalReports(rentalReportRepo);
const createRentalReportsService = new CreateRentalReports(rentalReportRepo);

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

export async function createRentalReport(req: any, res: any) {
  if (
    !req.body ||
    !req.body.street_address ||
    !req.body.city ||
    !req.body.state ||
    !req.body.zip_code ||
    !req.body.purchase_price ||
    !req.body.purchase_closing_costs ||
    !req.body.interest_rate ||
    !req.body.loan_term ||
    !req.body.gross_monthly_income ||
    !req.body.property_taxes ||
    !req.body.insurance
  ) {
    res.status(400).json({ success: false, message: "Invalid request" });
    return;
  }

  try {
    const newRentalReport = await createRentalReportsService.execute(
      req.body.rental_report_uuid,
      req.body.street_address,
      req.body.city,
      req.body.state,
      req.body.zip_code,
      req.body.purchase_price,
      req.body.purchase_closing_costs,
      req.body.interest_rate,
      req.body.loan_term,
      req.body.gross_monthly_income,
      req.body.property_taxes,
      req.body.insurance,
      req.body.monthly_income,
      req.body.operating_expenses,
      req.body.monthly_expenses,
      req.body.cashflow,
      req.body.noi,
      req.body.coc_roi,
      req.body.purchase_cap_rate,
      req.body.total_cost_of_project,
      req.body.loan_amount,
      req.body.loan_fees,
      req.body.monthly_mortgage_payment,
      req.body.user_id,
      req.body.bedrooms,
      req.body.bathrooms,
      req.body.square_feet,
      req.body.year_built,
      req.body.description,
      req.body.down_payment,
      req.body.points_charged,
      req.body.water_sewer,
      req.body.electricity,
      req.body.gas,
      req.body.garbage,
      req.body.hoa_fees,
      req.body.management_fees,
      req.body.repairs_maintenance,
      req.body.capital_expenditures,
      req.body.vacancy
    );
    res.status(201).json({ newRentalReport });
  } catch (err) {
    if (err instanceof Error) {
      res.json({ success: false, error: err.message });
    }
  }
}
