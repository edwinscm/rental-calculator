// React Hooks
import { useContext } from "react";
// React Router
import { useNavigate } from "react-router-dom";
// UUID
import { v4 as uuidv4 } from "uuid";
// MUI Components
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Components
import PropertyInformation from "./components/PropertyInformation";
import Purchase from "./components/Purchase";
import Loan from "./components/Loan";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
// React Hook Form
import { useForm } from "react-hook-form";
// Services
import * as rentalReportService from "../../common/services/rentalReport.service";
// Context
import AuthContext from "../../setup/auth/auth.context";

export default function NewRentalReport() {
  let { ls } = useContext(AuthContext);
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

  function getGrossPotentialIncome(newRentalReportFormData) {
    return newRentalReportFormData.gross_monthly_income;
  }

  function getGrossOperatingIncome(newRentalReportFormData) {
    return (
      getGrossPotentialIncome(newRentalReportFormData) -
      newRentalReportFormData.vacancy
    );
  }

  function getUtilitiesExpenses(newRentalReportFormData) {
    return (
      Number(newRentalReportFormData.water_sewer) +
      Number(newRentalReportFormData.electricity) +
      Number(newRentalReportFormData.gas) +
      Number(newRentalReportFormData.garbage)
    );
  }

  function getOperatingExpenses(newRentalReportFormData) {
    return (
      Number(newRentalReportFormData.insurance) +
      getUtilitiesExpenses(newRentalReportFormData) +
      Number(newRentalReportFormData.hoa_fees) +
      Number(newRentalReportFormData.management_fees) +
      Number(newRentalReportFormData.repairs_maintenance) +
      Number(newRentalReportFormData.capital_expenditures)
    );
  }

  function getProjectCost(newRentalReportFormData) {
    return (
      Number(newRentalReportFormData.purchase_price) +
      Number(newRentalReportFormData.purchase_closing_costs)
    );
  }

  function getLoanAmount(newRentalReportFormData) {
    return (
      getProjectCost(newRentalReportFormData) -
      Number(newRentalReportFormData.down_payment)
    );
  }

  function getLoanFees(newRentalReportFormData) {
    return (
      getLoanAmount(newRentalReportFormData) *
      (Number(newRentalReportFormData.points_charged) / 100)
    );
  }

  function getMonthlyMortgagePayment(newRentalReportFormData) {
    const totalMortgage =
      getLoanAmount(newRentalReportFormData) +
      getLoanAmount(newRentalReportFormData) *
        (Number(newRentalReportFormData.interest_rate) / 100);
    return totalMortgage / Number(newRentalReportFormData.loan_term) / 12;
  }

  function getTotalExpenses(newRentalReportFormData) {
    return (
      Number(newRentalReportFormData.property_taxes) +
      getMonthlyMortgagePayment(newRentalReportFormData) +
      getOperatingExpenses(newRentalReportFormData) +
      Number(newRentalReportFormData.vacancy)
    );
  }

  function getCashFlow(newRentalReportFormData) {
    return (
      getGrossPotentialIncome(newRentalReportFormData) -
      getTotalExpenses(newRentalReportFormData)
    );
  }

  function getNetOperatingIncome(newRentalReportFormData) {
    return (
      (getGrossOperatingIncome(newRentalReportFormData) -
        getOperatingExpenses(newRentalReportFormData)) *
      12
    );
  }

  function getAnnualPreTaxCashFlow(newRentalReportFormData) {
    return (
      getGrossPotentialIncome(newRentalReportFormData) -
      (Number(newRentalReportFormData.vacancy) +
        getOperatingExpenses(newRentalReportFormData) +
        getMonthlyMortgagePayment(newRentalReportFormData))
    );
  }

  function getCashInvested(newRentalReportFormData) {
    return Number(newRentalReportFormData.down_payment);
  }

  function getCashOnCashReturn(newRentalReportFormData) {
    return (
      getAnnualPreTaxCashFlow(newRentalReportFormData) /
      getCashInvested(newRentalReportFormData)
    );
  }

  function getCapitalizationRate(newRentalReportFormData) {
    return (
      getNetOperatingIncome(newRentalReportFormData) /
      Number(newRentalReportFormData.purchase_price)
    );
  }

  async function onSubmit(newRentalReportFormData) {
    const userId = ls.get("userId");
    const uuid = uuidv4();
    const newRentalReportFullData = {
      ...newRentalReportFormData,
      rental_report_uuid: uuid,
      monthly_income: getGrossPotentialIncome(newRentalReportFormData),
      operating_expenses: getOperatingExpenses(newRentalReportFormData),
      monthly_expenses: getTotalExpenses(newRentalReportFormData),
      cashflow: getCashFlow(newRentalReportFormData),
      noi: getNetOperatingIncome(newRentalReportFormData),
      coc_roi: getCashOnCashReturn(newRentalReportFormData),
      purchase_cap_rate: getCapitalizationRate(newRentalReportFormData),
      total_cost_of_project: getProjectCost(newRentalReportFormData),
      loan_amount: getLoanAmount(newRentalReportFormData),
      loan_fees: getLoanFees(newRentalReportFormData),
      monthly_mortgage_payment: getMonthlyMortgagePayment(
        newRentalReportFormData
      ),
      user_id: userId,
    };
    await rentalReportService.createRentalReport(newRentalReportFullData);
    navigate(`/rental-report/${uuid}`);
  }

  return (
    <Container maxWidth="sm">
      <h1>New Rental Report</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* Property Information */}
          <PropertyInformation control={control} />
          {/* Purchase */}
          <Purchase control={control} />
          {/* Loan */}
          <Loan control={control} />
          {/* Income */}
          <Income control={control} />
          {/* Expenses */}
          <Expenses control={control} />
          {/* Submit Button */}
          <Grid item xs={12} md={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              onClick={handleSubmit(onSubmit)}
            >
              Finish analysis
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
