// React Router
import { Routes, Route } from "react-router-dom";
// Routes
import PrivateRoutes from "./PrivateRoutes";
// Layout
import Layout from "../layout/Layout";
// Pages
import Account from "../../pages/account/Account";
import EditRentalReport from "../../pages/edit-rental-report/EditRentalReport";
import NewRentalReport from "../../pages/new-rental-report/NewRentalReport";
import PageNotFound from "../../pages/page-not-found/PageNotFound";
import RentalReport from "../../pages/rental-report/RentalReport";
import RentalReportDetail from "../../pages/rental-report-detail/RentalReportDetail";
import SignUp from "../../pages/sign-up/SignUp";
import SignIn from "../../pages/sign-in/SignIn";

export default () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />

      <Route element={<Layout />}>
        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<RentalReport />} />
          <Route path="/rental-report" element={<RentalReport />} />
          <Route path="/new-rental-report" element={<NewRentalReport />} />
          <Route
            path="/rental-report/:rental_report_uuid"
            element={<RentalReportDetail />}
          />
          <Route
            path="/rental-report/edit/:rental_report_uuid"
            element={<EditRentalReport />}
          />
          <Route path="/account" element={<Account />} />
        </Route>
      </Route>

      {/* catch all */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
