import React from "react";
// React Hooks
import { useEffect, useState } from "react";
// React Router
import { useParams } from "react-router-dom";
// MUI Components
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import Box from "@mui/material/Box";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// ChartJS
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
// Components
import GoogleGeocodingAndMap from "./components/GoogleGeocodingAndMap";
// Services
import * as rentalReportService from "../../services/rental-report.service";

export default function RentalReportDetail() {
  let { rental_report_uuid } = useParams();

  const [rentalReportData, setRentalReportData] = useState({
    bedrooms: "",
    bathrooms: "",
    square_feet: 0,
    year_built: 0,
    description: "",
    monthly_income: 0,
    operating_expenses: 0,
    monthly_expenses: 0,
    cashflow: 0,
    noi: 0,
    coc_roi: 0,
    purchase_cap_rate: 0,
    total_cost_of_project: 0,
    loan_amount: 0,
    loan_fees: 0,
    monthly_mortgage_payment: 0,
    purchase_price: 0,
    purchase_closing_costs: 0,
    vacancy: 0,
    down_payment: 0,
    points_charged: 0,
    property_taxes: 0,
    loan_term: 0,
    interest_rate: 0,
    street_address: "",
    city: "",
    zip_code: 0,
    state: "",
  });
  useEffect(() => {
    async function fetchData() {
      const response = await rentalReportService.getRentalReport(
        rental_report_uuid
      );
      setRentalReportData(response);
    }
    fetchData();
  }, [rental_report_uuid]);

  ChartJS.register(ArcElement, Tooltip, Legend, LinearScale);

  const incomeData = {
    labels: ["Rent"],
    datasets: [
      {
        label: "# of Votes",
        data: [`${rentalReportData.monthly_income}`],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const expensesData = {
    labels: ["Mortgage P&I", "Taxes", "Operating Expense", "Vacancy"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          `${rentalReportData.monthly_mortgage_payment}`,
          `${rentalReportData.property_taxes}`,
          `${rentalReportData.operating_expenses}`,
          `${rentalReportData.vacancy}`,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const incomeOptions = {
    cutout: "82.5%",
    maintainAspectRatio: false,
    plugins: {
      htmlLegend: {
        // ID of the container to put the legend in
        containerID: "income-legend-container",
      },
      legend: {
        display: false,
      },
    },
  };
  const expensesOptions = {
    cutout: "82.5%",
    maintainAspectRatio: false,
    plugins: {
      htmlLegend: {
        // ID of the container to put the legend in
        containerID: "expenses-legend-container",
      },
      legend: {
        display: false,
      },
    },
  };
  const getOrCreateLegendList = (chart: any, id: any) => {
    const legendContainer = document.getElementById(id);
    let listContainer = legendContainer?.querySelector("ul");

    if (!listContainer) {
      listContainer = document.createElement("ul");
      listContainer.style.display = "flex";
      listContainer.style.flexDirection = "column";
      listContainer.style.margin = "";
      listContainer.style.padding = "";

      legendContainer?.appendChild(listContainer);
    }

    return listContainer;
  };
  const htmlLegendPlugin = {
    id: "htmlLegend",
    // afterUpdate(chart) {
    //   const items = chart.options.plugins.legend.labels.generateLabels(chart);
    //   const ul = document.createElement("ul");
    //   items.forEach(item => {
    //     const li = document.createElement("li");
    //     const boxSpan = document.createElement("span");
    //     boxSpan.style.background = item.fillStyle;
    //     li.appendChild(boxSpan);
    //     li.appendChild(document.createTextNode(item.text));
    //     ul.appendChild(li);
    //   });
    //   const jsLegend = document.getElementById("legend-container");
    //   jsLegend.appendChild(ul);
    // }
    afterUpdate(chart: any, args: any, options: any) {
      const ul = getOrCreateLegendList(chart, options.containerID);

      // Remove old legend items
      while (ul.firstChild) {
        ul.firstChild.remove();
      }

      // Reuse the built-in legendItems generator
      const items = chart.options.plugins.legend.labels.generateLabels(chart);

      items.forEach((item: any) => {
        const li = document.createElement("li");
        li.style.alignItems = "center";
        li.style.cursor = "pointer";
        li.style.display = "flex";
        li.style.flexDirection = "row";
        li.style.marginLeft = "10px";

        li.onclick = () => {
          const { type } = chart.config;
          if (type === "pie" || type === "doughnut") {
            // Pie and doughnut charts only have a single dataset and visibility is per item
            chart.toggleDataVisibility(item.index);
          } else {
            chart.setDatasetVisibility(
              item.datasetIndex,
              !chart.isDatasetVisible(item.datasetIndex)
            );
          }
          chart.update();
        };

        // Color box
        const boxSpan = document.createElement("span");
        boxSpan.style.background = item.fillStyle;
        boxSpan.style.borderColor = item.strokeStyle;
        boxSpan.style.borderWidth = item.lineWidth + "px";
        boxSpan.style.display = "inline-block";
        boxSpan.style.height = "20px";
        boxSpan.style.marginRight = "10px";
        boxSpan.style.width = "20px";

        // Text
        const textContainer = document.createElement("p");
        textContainer.style.color = item.fontColor;
        textContainer.style.margin = "";
        textContainer.style.padding = "";
        textContainer.style.textDecoration = item.hidden ? "line-through" : "";

        const text = document.createTextNode(item.text);
        textContainer.appendChild(text);

        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
      });
    },
  };

  return (
    <Container maxWidth="sm">
      <h1>Rental Report</h1>

      {/* Overview */}
      <Box sx={{ margin: "48px 0" }}>
        <Typography component="h2" variant="h5" sx={{ margin: "24px 0" }}>
          Overview
        </Typography>
        <Grid container spacing={2}>
          {/* Bedrooms */}
          <Grid item xs={12} sm={3}>
            <Stack direction="row" spacing={1}>
              <BedOutlinedIcon />
              <Typography variant="body1">
                {rentalReportData.bedrooms}
              </Typography>
            </Stack>
            <Typography variant="body1">Bedrooms</Typography>
          </Grid>

          {/* Bathrooms */}
          <Grid item xs={12} sm={3}>
            <Stack direction="row" spacing={1}>
              <ShowerOutlinedIcon />
              <Typography variant="body1">
                {rentalReportData.bathrooms}
              </Typography>
            </Stack>
            <Typography variant="body1">Bathrooms</Typography>
          </Grid>

          {/* Square Feet */}
          <Grid item xs={12} sm={3}>
            <Stack direction="row" spacing={1}>
              <SquareFootOutlinedIcon />
              <Typography variant="body1">
                {new Intl.NumberFormat("en-US").format(
                  rentalReportData.square_feet
                )}
              </Typography>
            </Stack>
            <Typography variant="body1">Sq. Ft.</Typography>
          </Grid>

          {/* Year Built */}
          <Grid item xs={12} sm={3}>
            <Stack direction="row" spacing={1}>
              <CalendarMonthOutlinedIcon />
              <Typography variant="body1">
                {rentalReportData.year_built}
              </Typography>
            </Stack>
            <Typography variant="body1">Year Built</Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {/* Description */}
      <Box sx={{ margin: "48px 0" }}>
        <Typography component="h2" variant="h5" sx={{ margin: "24px 0" }}>
          Description
        </Typography>
        <Typography component="p" gutterBottom>
          {rentalReportData.description}
        </Typography>
      </Box>

      <Divider />

      {/* Returns */}
      <Box sx={{ margin: "48px 0" }}>
        <Typography component="h2" variant="h5" sx={{ margin: "24px 0" }}>
          Returns
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" gutterBottom>
              Monthly Income
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(rentalReportData.monthly_income)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" gutterBottom>
              Monthly Expenses
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(rentalReportData.monthly_expenses)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" gutterBottom>
              Cashflow
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(rentalReportData.cashflow)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" gutterBottom>
              NOI
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(rentalReportData.noi)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" gutterBottom>
              CoC ROI
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              {new Intl.NumberFormat("en-US", {
                style: "percent",
                minimumIntegerDigits: 1,
                minimumFractionDigits: 2,
              }).format(rentalReportData.coc_roi)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" gutterBottom>
              Purchase Cap Rate
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              {new Intl.NumberFormat("en-US", {
                style: "percent",
                minimumIntegerDigits: 1,
                minimumFractionDigits: 2,
              }).format(rentalReportData.purchase_cap_rate)}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {/* Property Information */}
      <Box sx={{ margin: "48px 0" }}>
        <Typography component="h2" variant="h5" sx={{ margin: "24px 0" }}>
          Property Information
        </Typography>
        <Grid container>
          <Grid item xs={7} sm={4}>
            <Typography variant="body1" gutterBottom>
              Purchase Price:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={8}>
            <Typography variant="body1" gutterBottom>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(rentalReportData.purchase_price)}
            </Typography>
          </Grid>
          <Grid item xs={7} sm={4}>
            <Typography variant="body1" gutterBottom>
              Closing Costs:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={6}>
            <Typography variant="body1" gutterBottom>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(rentalReportData.purchase_closing_costs)}
            </Typography>
          </Grid>
          <Grid item xs={7} sm={4}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Total Cost of Project:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={8}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(rentalReportData.total_cost_of_project)}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {/* Loan */}
      <Box sx={{ margin: "48px 0" }}>
        <Typography component="h2" variant="h5" sx={{ margin: "24px 0" }}>
          Loan
        </Typography>
        <Grid container>
          <Grid item xs={7} sm={4}>
            <Typography variant="body1" gutterBottom>
              Down Payment:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={8}>
            <Typography variant="body1" gutterBottom>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(rentalReportData.down_payment)}
            </Typography>
          </Grid>
          <Grid item xs={7} sm={4}>
            <Typography variant="body1" gutterBottom>
              Loan Amount:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={8}>
            <Typography variant="body1" gutterBottom>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(rentalReportData.loan_amount)}
            </Typography>
          </Grid>
          <Grid item xs={7} sm={4}>
            <Typography variant="body1" gutterBottom>
              Loan Points:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={8}>
            <Typography variant="body1" gutterBottom>
              {rentalReportData.points_charged}
            </Typography>
          </Grid>
          <Grid item xs={7} sm={4}>
            <Typography variant="body1" gutterBottom>
              Loan Fees:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={8}>
            <Typography variant="body1" gutterBottom>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(rentalReportData.loan_fees)}
            </Typography>
          </Grid>
          <Grid item xs={7} sm={4}>
            <Typography variant="body1" gutterBottom>
              Loan Term:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={8}>
            <Typography variant="body1" gutterBottom>
              {rentalReportData.loan_term} years
            </Typography>
          </Grid>
          <Grid item xs={7} sm={4}>
            <Typography variant="body1" gutterBottom>
              Interest Rate:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={8}>
            <Typography variant="body1" gutterBottom>
              {rentalReportData.interest_rate}%
            </Typography>
          </Grid>
          <Grid item xs={7} sm={4}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Monthly P&I:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={8}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(rentalReportData.monthly_mortgage_payment)}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {/* Income */}
      <Box sx={{ margin: "48px 0" }}>
        <Typography component="h2" variant="h5" sx={{ margin: "24px 0" }}>
          Income
        </Typography>
        <Grid
          container
          rowSpacing={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={6}>
            <Doughnut
              options={incomeOptions}
              data={incomeData}
              plugins={[htmlLegendPlugin]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box id="income-legend-container"></Box>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {/* Expenses */}
      <Box sx={{ margin: "48px 0" }}>
        <Typography component="h2" variant="h5" sx={{ margin: "24px 0" }}>
          Expenses
        </Typography>
        <Grid
          container
          rowSpacing={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={6}>
            <Doughnut
              options={expensesOptions}
              data={expensesData}
              plugins={[htmlLegendPlugin]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box id="expenses-legend-container"></Box>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {/* Address */}
      <Box sx={{ margin: "48px 0" }}>
        <Typography component="h2" variant="h5" sx={{ margin: "24px 0" }}>
          Address
        </Typography>

        <Grid container spacing={2} sx={{ marginBottom: "24px" }}>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold" }}
                gutterBottom
              >
                Street Address:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {rentalReportData.street_address}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold" }}
                gutterBottom
              >
                Zip Code:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {rentalReportData.zip_code}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold" }}
                gutterBottom
              >
                City:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {rentalReportData.city}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold" }}
                gutterBottom
              >
                State:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {rentalReportData.state}
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Map */}
        <GoogleGeocodingAndMap
          fullAddress={`${rentalReportData.street_address}, ${rentalReportData.city}`}
        />
      </Box>
    </Container>
  );
}
