// Entities
import RentalReport from "./rental-report";

describe("Rental report entity", () => {
  test("Should create rental report from constructor args", () => {
    const rentalReport = new RentalReport(
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
    expect(rentalReport.rental_report_uuid).toBe(
      "84672d07-943c-4d13-9d9c-60f2805ab67a"
    );
    expect(rentalReport.street_address).toBe("903 Miriam Dr W");
    expect(rentalReport.city).toBe("Columbus");
    expect(rentalReport.state).toBe("Ohio");
    expect(rentalReport.zip_code).toBe(43204);
    expect(rentalReport.purchase_price).toBe(180000);
    expect(rentalReport.purchase_closing_costs).toBe(2772);
    expect(rentalReport.interest_rate).toBe(7.23);
    expect(rentalReport.loan_term).toBe(30);
    expect(rentalReport.gross_monthly_income).toBe(1783);
    expect(rentalReport.property_taxes).toBe(311);
    expect(rentalReport.insurance).toBe(63);
    expect(rentalReport.monthly_income).toBe(1783);
    expect(rentalReport.operating_expenses).toBe(958);
    expect(rentalReport.monthly_expenses).toBe(1795);
    expect(rentalReport.cashflow).toBe(-12);
    expect(rentalReport.noi).toBe(8832);
    expect(rentalReport.coc_roi).toBe(0.008300646944444446);
    expect(rentalReport.purchase_cap_rate).toBe(0.04906666666666667);
    expect(rentalReport.total_cost_of_project).toBe(182772);
    expect(rentalReport.loan_amount).toBe(146772);
    expect(rentalReport.loan_fees).toBe(0);
    expect(rentalReport.monthly_mortgage_payment).toBe(437);
    expect(rentalReport.user_id).toBe(1);
    expect(rentalReport.bedrooms).toBe(4);
    expect(rentalReport.bathrooms).toBe(3);
    expect(rentalReport.square_feet).toBe(1404);
    expect(rentalReport.year_built).toBe(1957);
    expect(rentalReport.description).toBe(
      "Nice home https://www.zillow.com/homedetails/903-Miriam-Dr-W-Columbus-OH-43204/33896796_zpid/"
    );
    expect(rentalReport.down_payment).toBe(36000);
    expect(rentalReport.points_charged).toBe(0);
    expect(rentalReport.water_sewer).toBe(111);
    expect(rentalReport.electricity).toBe(117);
    expect(rentalReport.gas).toBe(61);
    expect(rentalReport.garbage).toBe(50);
    expect(rentalReport.hoa_fees).toBe(200);
    expect(rentalReport.management_fees).toBe(178);
    expect(rentalReport.repairs_maintenance).toBe(89);
    expect(rentalReport.capital_expenditures).toBe(89);
    expect(rentalReport.vacancy).toBe(89);
  });
});
