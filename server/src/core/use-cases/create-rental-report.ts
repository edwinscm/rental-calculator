import RentalReport from "../entities/rental-report";

class CreateRentalReport {
  private rentalReportRepo;

  constructor(rentalReportRepository: any) {
    this.rentalReportRepo = rentalReportRepository;
  }

  async execute(
    rental_report_uuid: string,
    street_address: string,
    city: string,
    state: string,
    zip_code: number,
    purchase_price: number,
    purchase_closing_costs: number,
    interest_rate: number,
    loan_term: number,
    gross_monthly_income: number,
    property_taxes: number,
    insurance: number,
    monthly_income: number,
    operating_expenses: number,
    monthly_expenses: number,
    cashflow: number,
    noi: number,
    coc_roi: number,
    purchase_cap_rate: number,
    total_cost_of_project: number,
    loan_amount: number,
    loan_fees: number,
    monthly_mortgage_payment: number,
    user_id: number,
    bedrooms?: number,
    bathrooms?: number,
    square_feet?: number,
    year_built?: number,
    description?: string,
    down_payment?: number,
    points_charged?: number,
    water_sewer?: number,
    electricity?: number,
    gas?: number,
    garbage?: number,
    hoa_fees?: number,
    management_fees?: number,
    repairs_maintenance?: number,
    capital_expenditures?: number,
    vacancy?: number
  ): Promise<RentalReport> {
    const rentalReport = new RentalReport(
      rental_report_uuid,
      street_address,
      city,
      state,
      zip_code,
      purchase_price,
      purchase_closing_costs,
      interest_rate,
      loan_term,
      gross_monthly_income,
      property_taxes,
      insurance,
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
      user_id,
      bedrooms,
      bathrooms,
      square_feet,
      year_built,
      description,
      down_payment,
      points_charged,
      water_sewer,
      electricity,
      gas,
      garbage,
      hoa_fees,
      management_fees,
      repairs_maintenance,
      capital_expenditures,
      vacancy
    );
    const persisted = await this.rentalReportRepo.addRentalReport(rentalReport);
    return persisted;
  }
}

export default CreateRentalReport;
