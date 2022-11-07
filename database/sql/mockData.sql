INSERT INTO users (email, password)
VALUES (
  'john.doe@domain.com', '$2a$10$5ZhFa7eSBR.6D/jY3ssPu.acHxOSUAv0xjUKHqLFTIrwrqWXBDoDK'
), 
(
  'jane.doe@domain.com', '$2a$10$5ZhFa7eSBR.6D/jY3ssPu.acHxOSUAv0xjUKHqLFTIrwrqWXBDoDK'
);

INSERT INTO rental_reports (
  -- UUID
  rental_report_uuid,
  -- Property Information
  street_address,
  city,
  state,
  zip_code,
  bedrooms,
  bathrooms,
  square_feet,
  year_built,
  description,
  -- Purchase
  purchase_price,
  purchase_closing_costs,
  -- Loan
  down_payment,
  interest_rate,
  points_charged,
  loan_term,
  -- Income
  gross_monthly_income,
  -- Expenses
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
  -- Returns
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
  -- Foreign Keys
  user_id
)
VALUES (
  --
  -- UUID
  --
  '84672d07-943c-4d13-9d9c-60f2805ab67a',
  --
  -- Property Information
  --
  '903 Miriam Dr W', -- street_address
  'Columbus', -- city
  'Ohio', -- state
  43204, -- zip_code
  4, -- bedrooms
  3, -- bathrooms
  1404, -- square_feet
  1957, -- year_built
  'Nice home, https://www.zillow.com/homedetails/903-Miriam-Dr-W-Columbus-OH-43204/33896796_zpid/', -- description
  --
  -- Purchase
  --
  180000, -- purchase_price
  2772, -- purchase_closing_costs
  --
  -- Loan
  --
  36000, -- down_payment
  7.23, -- interest_rate
  0, -- points_charged
  30, -- loan_term
  --
  -- Income
  --
  1783, -- gross_monthly_income
  --
  -- Expenses
  --
  311, -- property_taxes
  63, -- insurance
  111, -- water_sewer
  117, -- electricity
  61, -- gas
  50, -- garbage
  200, -- hoa_fees
  178, -- management_fees
  89, -- repairs_maintenance
  89, -- capital_expenditures
  89, -- vacancy
  --
  -- Returns
  --
  1783, -- monthly_income
  958, -- operating_expenses
  1795, -- monthly_expenses
  -12, -- cashflow
  8832, -- noi
  0.008300646944444446, -- coc_roi
  0.04906666666666667, -- purchase_cap_rate
  182772, -- total_cost_of_project
  146772, -- loan_amount
  0, -- loan_fees
  437, -- monthly_mortgage_payment
  --
  -- Foreign Keys
  --
  1
),
(
  --
  -- UUID
  --
  '757668d1-fdcb-4fd1-899e-87fe3a464ecc',
  --
  -- Property Information
  --
  '3788 Devton Dr', -- street_address
  'Columbus', -- city
  'Ohio', -- state
  43228, -- zip_code
  3, -- bedrooms
  1, -- bathrooms
  936, -- square_feet
  1964, -- year_built
  'Nice home, https://www.zillow.com/homedetails/3788-Devton-Dr-Columbus-OH-43228/33920628_zpid/', -- description
  --
  -- Purchase
  --
  159000, -- purchase_price
  2772, -- purchase_closing_costs
  --
  -- Loan
  --
  31800, -- down_payment
  7.23, -- interest_rate
  1, -- points_charged
  30, -- loan_term
  --
  -- Income
  --
  1376, -- gross_monthly_income
  --
  -- Expenses
  --
  274, -- property_taxes
  56, -- insurance
  111, -- water_sewer
  117, -- electricity
  61, -- gas
  50, -- garbage
  200, -- hoa_fees
  178, -- management_fees
  89, -- repairs_maintenance
  89, -- capital_expenditures
  89, -- vacancy
  --
  -- Returns
  --
  1783, -- monthly_income
  951, -- operating_expenses
  1701, -- monthly_expenses
  -329, -- cashflow
  3984, -- noi
  -0.0016080516771488497, -- coc_roi
  0.025358490566037735, -- purchase_cap_rate
  161771, -- total_cost_of_project
  129974, -- loan_amount
  1300, -- loan_fees
  387, -- monthly_mortgage_payment
  --
  -- Foreign Keys
  --
  2
);