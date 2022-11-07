// React Hooks
import { useState, useEffect, useContext } from "react";
// React Router
import { useNavigate } from "react-router-dom";
// MUI Components
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
// MUI Icons
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// Components
import AlertDialog from "../../common/components/AlertDialog";
// Services
import * as rentalReportService from "../../common/services/rentalReport.service";
// Context
import AuthContext from "../../setup/auth/auth.context";

export default function RentalReport() {
  const dialogText = {
    dialogTitle: `Delete Rental Report`,
    dialogContent: `Are you sure you want to delete this rental report?`,
    dialogButton: `Delete`,
  };
  const columns = [
    { field: "street_address", headerName: "Street Address", width: 210 },
    { field: "city", headerName: "City", width: 140 },
    { field: "state", headerName: "State", width: 140 },
    { field: "zip_code", headerName: "Zip Code", width: 140 },
    {
      field: "cashflow",
      headerName: "Cashflow",
      width: 140,
      renderCell: (params) => {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(params.value);
      },
    },
    {
      field: "coc_roi",
      headerName: "CoC ROI",
      width: 140,
      renderCell: (params) => {
        return new Intl.NumberFormat("en-US", {
          style: "percent",
          minimumIntegerDigits: 1,
          minimumFractionDigits: 2,
        }).format(params.value);
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 105,
      renderCell: renderEditButton,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 105,
      renderCell: renderDeleteButton,
    },
  ];
  const navigate = useNavigate();
  let { ls } = useContext(AuthContext);
  const userId = ls.get("userId");

  const [rentalReports, setRentalReports] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [open, setOpen] = useState(false);
  const [params, setParams] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await rentalReportService.getUserRentalReportsList(
        userId
      );
      setRentalReports(response);
    };
    fetchData();
  }, [refreshKey]);

  function renderEditButton(params) {
    return (
      <>
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderColor: "rgba(0, 128, 0, 0.5)",
            color: "green",
            "&:hover": {
              borderColor: "green",
              backgroundColor: "rgba(0, 128, 0, 0.1)",
            },
            marginRight: "1rem",
          }}
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
      </>
    );
  }

  function renderDeleteButton(params) {
    return (
      <>
        <Button
          variant="outlined"
          size="small"
          startIcon={<DeleteIcon />}
          sx={{
            borderColor: "rgba(128, 0, 0, 0.5)",
            color: "red",
            "&:hover": {
              borderColor: "red",
              backgroundColor: "rgba(128, 0, 0, 0.1)",
            },
          }}
        >
          Delete
        </Button>
      </>
    );
  }

  async function handleOnCellClick(params) {
    setParams(params);
    if (params.field === "edit") {
      navigate(`/rental-report/edit/${params.row.rental_report_uuid}`);
      return;
    }
    if (params.field === "delete") {
      setOpen(true);
      return;
    }
    navigate(`/rental-report/${params.row.rental_report_uuid}`);
  }

  async function deleteRentalReport() {
    await rentalReportService.deleteRentalReport(params.row.rental_report_uuid);
    // Refresh the effect by incrementing 1
    setRefreshKey((oldKey) => oldKey + 1);
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h1>Rental Reports List</h1>
      {/* New Rental Report Button */}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        href="/new-rental-report"
        sx={{ marginBottom: "1rem" }}
      >
        New Rental Report
      </Button>

      {/* Rental Reports Table */}
      <DataGrid
        getRowId={(row) => row.rental_report_id}
        rows={rentalReports}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onCellClick={handleOnCellClick}
        disableSelectionOnClick
        sx={{
          ".MuiDataGrid-cell": {
            outline: "none !important",
          },
          ".MuiDataGrid-row": {
            cursor: "pointer",
          },
        }}
      />

      {/* Alert Dialog Delete Rental Report */}
      <AlertDialog
        open={open}
        setOpen={setOpen}
        dialogTitle={dialogText.dialogTitle}
        dialogContent={dialogText.dialogContent}
        dialogButton={dialogText.dialogButton}
        triggerParentFunction={deleteRentalReport}
      />
    </div>
  );
}
