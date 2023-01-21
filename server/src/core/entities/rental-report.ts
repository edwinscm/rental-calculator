class RentalReport {
  rental_report_uuid: string;
  street_address: string;
  city: string;
  state: string;
  zip_code: number;
  purchase_price: number;
  purchase_closing_costs: number;
  interest_rate: number;
  loan_term: number;
  gross_monthly_income: number;
  property_taxes: number;
  insurance: number;
  monthly_income: number;
  operating_expenses: number;
  monthly_expenses: number;
  cashflow: number;
  noi: number;
  coc_roi: number;
  purchase_cap_rate: number;
  total_cost_of_project: number;
  loan_amount: number;
  loan_fees: number;
  monthly_mortgage_payment: number;
  user_id: number;
  bedrooms: number;
  bathrooms: number;
  square_feet: number;
  year_built: number;
  description: string;
  down_payment: number;
  points_charged: number;
  water_sewer: number;
  electricity: number;
  gas: number;
  garbage: number;
  hoa_fees: number;
  management_fees: number;
  repairs_maintenance: number;
  capital_expenditures: number;
  vacancy: number;

  constructor(
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
  ) {
    this.rental_report_uuid = rental_report_uuid;
    this.street_address = street_address;
    this.city = city;
    this.state = state;
    this.zip_code = zip_code;
    this.purchase_price = purchase_price;
    this.purchase_closing_costs = purchase_closing_costs;
    this.interest_rate = interest_rate;
    this.loan_term = loan_term;
    this.gross_monthly_income = gross_monthly_income;
    this.property_taxes = property_taxes;
    this.insurance = insurance;
    this.monthly_income = monthly_income;
    this.operating_expenses = operating_expenses;
    this.monthly_expenses = monthly_expenses;
    this.cashflow = cashflow;
    this.noi = noi;
    this.coc_roi = coc_roi;
    this.purchase_cap_rate = purchase_cap_rate;
    this.total_cost_of_project = total_cost_of_project;
    this.loan_amount = loan_amount;
    this.loan_fees = loan_fees;
    this.monthly_mortgage_payment = monthly_mortgage_payment;
    this.user_id = user_id;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.square_feet = square_feet;
    this.year_built = year_built;
    this.description = description;
    this.down_payment = down_payment;
    this.points_charged = points_charged;
    this.water_sewer = water_sewer;
    this.electricity = electricity;
    this.gas = gas;
    this.garbage = garbage;
    this.hoa_fees = hoa_fees;
    this.management_fees = management_fees;
    this.repairs_maintenance = repairs_maintenance;
    this.capital_expenditures = capital_expenditures;
    this.vacancy = vacancy;
  }
}

export default RentalReport;
