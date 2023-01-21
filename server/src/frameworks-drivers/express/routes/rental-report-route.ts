import express from "express";
import * as database from "../../postgresql/index.js";
import {
  getRentalReportList,
  createRentalReport,
} from "../../../interface-adapters/controllers/rental-report-controller.js";

const router = express.Router();

///////////////////////
// With Clean Archi. //
///////////////////////
router.get("/rental-reports", getRentalReportList);
router.post("/rental-report/create", createRentalReport);

//////////////////////////
// Without Clean Archi. //
//////////////////////////
router.get("/rental-reports/:user_id", async (req, res) => {
  try {
    const sqlQuery = `SELECT * FROM rental_reports WHERE user_id = '${req.params.user_id}'`;
    const { rows } = await database.query(sqlQuery);
    res.status(201).json(rows);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.get("/rental-report/:rental_report_uuid", async (req, res) => {
  try {
    const sqlQuery = `SELECT * FROM rental_reports WHERE rental_report_uuid = '${req.params.rental_report_uuid}'`;
    const { rows } = await database.query(sqlQuery);
    const rental_report = rows[0];
    res.status(201).json(rental_report);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/rental-report/delete/:rental_report_uuid", async (req, res) => {
  try {
    const sqlQuery = `DELETE FROM rental_reports WHERE rental_report_uuid = '${req.params.rental_report_uuid}'`;
    const { rows } = await database.query(sqlQuery);
    const rental_report = rows[0];
    res.status(201).json(rental_report);
  } catch (error) {
    console.error(error);
  }
});

router.patch("/rental-report/patch/:rental_report_uuid", async (req, res) => {
  try {
    const sqlQuery = `
    UPDATE rental_reports 
    SET 
      street_address = '${req.body.street_address}',
      city = '${req.body.city}',
      state = '${req.body.state}',
      zip_code = ${req.body.zip_code},
      bedrooms = ${req.body.bedrooms},
      bathrooms = ${req.body.bathrooms},
      square_feet = ${req.body.square_feet},
      year_built = ${req.body.year_built},
      description = '${req.body.description}',
      purchase_price = ${req.body.purchase_price},
      purchase_closing_costs = ${req.body.purchase_closing_costs},
      down_payment = ${req.body.down_payment},
      interest_rate = ${req.body.interest_rate},
      points_charged = ${req.body.points_charged},
      loan_term = ${req.body.loan_term},
      gross_monthly_income = ${req.body.gross_monthly_income},
      property_taxes = ${req.body.property_taxes},
      insurance = ${req.body.insurance},
      water_sewer = ${req.body.water_sewer},
      electricity = ${req.body.electricity},
      gas = ${req.body.gas},
      garbage = ${req.body.garbage},
      hoa_fees = ${req.body.hoa_fees},
      management_fees = ${req.body.management_fees},
      repairs_maintenance = ${req.body.repairs_maintenance},
      capital_expenditures = ${req.body.capital_expenditures},
      vacancy = ${req.body.vacancy},
      monthly_income = ${req.body.monthly_income},
      operating_expenses = ${req.body.operating_expenses},
      monthly_expenses = ${req.body.monthly_expenses},
      cashflow = ${req.body.cashflow},
      noi = ${req.body.noi},
      coc_roi = ${req.body.coc_roi},
      purchase_cap_rate = ${req.body.purchase_cap_rate},
      total_cost_of_project = ${req.body.total_cost_of_project},
      loan_amount = ${req.body.loan_amount},
      loan_fees = ${req.body.loan_fees},
      monthly_mortgage_payment = ${req.body.monthly_mortgage_payment}
    WHERE rental_report_uuid = '${req.params.rental_report_uuid}'`;
    await database.query(sqlQuery);
    res.status(201).json("Update rental report success");
  } catch (error) {
    console.error(error);
  }
});

export default router;
