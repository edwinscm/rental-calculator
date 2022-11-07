// React Hooks
import { useEffect } from "react";
// React Router
import { useNavigate, useParams } from "react-router-dom";
// React Hook Form
import { useForm } from "react-hook-form";
// Services
import * as rentalReportService from "../../../common/services/rentalReport.service";

export default function useEditRentalReport() {
  let { rental_report_uuid } = useParams();
  const { reset, handleSubmit, control } = useForm();
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await rentalReportService.getRentalReport(
        rental_report_uuid
      );
      reset(response);
    }
    fetchData();
  }, [rental_report_uuid, reset]);

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
    const newRentalReportFullData = {
      ...newRentalReportFormData,
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
    };
    await rentalReportService.patchRentalReport(newRentalReportFullData);
    navigate(`/rental-report/${rental_report_uuid}`);
  }

  return {
    handleSubmit,
    onSubmit,
    control,
  };
}
