// React Router
import { Routes, Route } from "react-router-dom";
// Routes
import PrivateRoutes from "./PrivateRoutes";
// Layout
import Layout from "../../common/components/Layout";
// Pages
import Account from "../../pages/Account";
import EditRentalReport from "../../pages/EditRentalReport/";
import NewRentalReport from "../../pages/NewRentalReport";
import PageNotFound from "../../pages/PageNotFound/";
import RentalReport from "../../pages/RentalReport/";
import RentalReportDetail from "../../pages/RentalReportDetail";
import SignUp from "../../pages/SignUp";
import SignIn from "../../pages/SignIn";

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
