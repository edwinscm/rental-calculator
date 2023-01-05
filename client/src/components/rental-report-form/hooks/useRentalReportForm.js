import React from "react";
// React Hooks
import { useEffect, useContext } from "react";
// React Router
import { useLocation, useNavigate, useParams } from "react-router-dom";
// UUID
import { v4 as uuidv4 } from "uuid";
// React Hook Form
import { useForm } from "react-hook-form";
// Services
import * as rentalReportService from "../../../services/rental-report.service";
// Context
import AuthContext from "../../../contexts/AuthenticationContext";

export default function useRentalReportForm() {
  let { ls } = useContext(AuthContext);
  let { rental_report_uuid } = useParams();
  const { reset, handleSubmit, control } = useForm();
  const location = useLocation();
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

  function getGrossPotentialIncome(rentalReportFormData) {
    return rentalReportFormData.gross_monthly_income;
  }

  function getGrossOperatingIncome(rentalReportFormData) {
    return (
      getGrossPotentialIncome(rentalReportFormData) -
      rentalReportFormData.vacancy
    );
  }

  function getUtilitiesExpenses(rentalReportFormData) {
    return (
      Number(rentalReportFormData.water_sewer) +
      Number(rentalReportFormData.electricity) +
      Number(rentalReportFormData.gas) +
      Number(rentalReportFormData.garbage)
    );
  }

  function getOperatingExpenses(rentalReportFormData) {
    return (
      Number(rentalReportFormData.insurance) +
      getUtilitiesExpenses(rentalReportFormData) +
      Number(rentalReportFormData.hoa_fees) +
      Number(rentalReportFormData.management_fees) +
      Number(rentalReportFormData.repairs_maintenance) +
      Number(rentalReportFormData.capital_expenditures)
    );
  }

  function getProjectCost(rentalReportFormData) {
    return (
      Number(rentalReportFormData.purchase_price) +
      Number(rentalReportFormData.purchase_closing_costs)
    );
  }

  function getLoanAmount(rentalReportFormData) {
    return (
      getProjectCost(rentalReportFormData) -
      Number(rentalReportFormData.down_payment)
    );
  }

  function getLoanFees(rentalReportFormData) {
    return (
      getLoanAmount(rentalReportFormData) *
      (Number(rentalReportFormData.points_charged) / 100)
    );
  }

  function getMonthlyMortgagePayment(rentalReportFormData) {
    const totalMortgage =
      getLoanAmount(rentalReportFormData) +
      getLoanAmount(rentalReportFormData) *
        (Number(rentalReportFormData.interest_rate) / 100);
    return totalMortgage / Number(rentalReportFormData.loan_term) / 12;
  }

  function getTotalExpenses(rentalReportFormData) {
    return (
      Number(rentalReportFormData.property_taxes) +
      getMonthlyMortgagePayment(rentalReportFormData) +
      getOperatingExpenses(rentalReportFormData) +
      Number(rentalReportFormData.vacancy)
    );
  }

  function getCashFlow(rentalReportFormData) {
    return (
      getGrossPotentialIncome(rentalReportFormData) -
      getTotalExpenses(rentalReportFormData)
    );
  }

  function getNetOperatingIncome(rentalReportFormData) {
    return (
      (getGrossOperatingIncome(rentalReportFormData) -
        getOperatingExpenses(rentalReportFormData)) *
      12
    );
  }

  function getAnnualPreTaxCashFlow(rentalReportFormData) {
    return (
      getGrossPotentialIncome(rentalReportFormData) -
      (Number(rentalReportFormData.vacancy) +
        getOperatingExpenses(rentalReportFormData) +
        getMonthlyMortgagePayment(rentalReportFormData))
    );
  }

  function getCashInvested(rentalReportFormData) {
    return Number(rentalReportFormData.down_payment);
  }

  function getCashOnCashReturn(rentalReportFormData) {
    return (
      getAnnualPreTaxCashFlow(rentalReportFormData) /
      getCashInvested(rentalReportFormData)
    );
  }

  function getCapitalizationRate(rentalReportFormData) {
    return (
      getNetOperatingIncome(rentalReportFormData) /
      Number(rentalReportFormData.purchase_price)
    );
  }

  async function onSubmit(rentalReportFormData) {
    const rentalReportFullData = {
      ...rentalReportFormData,
      monthly_income: getGrossPotentialIncome(rentalReportFormData),
      operating_expenses: getOperatingExpenses(rentalReportFormData),
      monthly_expenses: getTotalExpenses(rentalReportFormData),
      cashflow: getCashFlow(rentalReportFormData),
      noi: getNetOperatingIncome(rentalReportFormData),
      coc_roi: getCashOnCashReturn(rentalReportFormData),
      purchase_cap_rate: getCapitalizationRate(rentalReportFormData),
      total_cost_of_project: getProjectCost(rentalReportFormData),
      loan_amount: getLoanAmount(rentalReportFormData),
      loan_fees: getLoanFees(rentalReportFormData),
      monthly_mortgage_payment: getMonthlyMortgagePayment(rentalReportFormData),
    };

    if (location.pathname === "/new-rental-report") {
      const uuid = uuidv4();
      const userId = ls.get("userId");
      const newRentalReportFullData = {
        ...rentalReportFullData,
        rental_report_uuid: uuid,
        user_id: userId,
      };
      await rentalReportService.createRentalReport(newRentalReportFullData);
      navigate(`/rental-report/${uuid}`);
    }

    await rentalReportService.patchRentalReport(rentalReportFullData);
    navigate(`/rental-report/${rental_report_uuid}`);
  }

  return {
    handleSubmit,
    onSubmit,
    control,
  };
}
