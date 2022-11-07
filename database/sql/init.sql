CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  email VARCHAR(128) NOT NULL,
  password VARCHAR(64) NOT NULL
);

CREATE TABLE rental_reports (
  -- Primary Key
  rental_report_id serial PRIMARY KEY,
  -- UUID
  rental_report_uuid uuid,
  -- Property Information
  street_address VARCHAR(128),
  city VARCHAR(128),
  state VARCHAR(128),
  zip_code VARCHAR(128),
  bedrooms VARCHAR(128),
  bathrooms VARCHAR(128),
  square_feet VARCHAR(128),
  year_built VARCHAR(128),
  description TEXT,
  -- Purchase
  purchase_price VARCHAR(128),
  purchase_closing_costs VARCHAR(128),
  -- Loan
  down_payment VARCHAR(128),
  interest_rate VARCHAR(128),
  points_charged VARCHAR(128),
  loan_term VARCHAR(128),
  -- Income
  gross_monthly_income VARCHAR(128),
  -- Expenses
  property_taxes VARCHAR(128),
  insurance VARCHAR(128),
  water_sewer VARCHAR(128),
  electricity VARCHAR(128),
  gas VARCHAR(128),
  garbage VARCHAR(128),
  hoa_fees VARCHAR(128),
  management_fees VARCHAR(128),
  repairs_maintenance VARCHAR(128),
  capital_expenditures VARCHAR(128),
  vacancy VARCHAR(128),
  -- Returns
  monthly_income VARCHAR(128),
  operating_expenses VARCHAR(128),
  monthly_expenses VARCHAR(128),
  cashflow VARCHAR(128),
  noi VARCHAR(128),
  coc_roi VARCHAR(128),
  purchase_cap_rate VARCHAR(128),
  total_cost_of_project VARCHAR(128),
  loan_amount VARCHAR(128),
  loan_fees VARCHAR(128),
  monthly_mortgage_payment VARCHAR(128),
  -- Foreign Keys
  user_id integer REFERENCES users (user_id)
);