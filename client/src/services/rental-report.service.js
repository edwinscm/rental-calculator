import environment from "../environment";
import * as httpClient from "../libraries/http-client.library";

export async function getUserRentalReportsList(user_id) {
  return await httpClient.get(
    `${environment.apiUrl}/rental-reports/${user_id}`
  );
}

export async function createRentalReport(newRentalReportFormData) {
  return await httpClient.post(
    `${environment.apiUrl}/rental-report/create`,
    newRentalReportFormData
  );
}

export async function getRentalReport(rental_report_uuid) {
  return await httpClient.get(
    `${environment.apiUrl}/rental-report/${rental_report_uuid}`
  );
}

export async function deleteRentalReport(rental_report_uuid) {
  return await httpClient.del(
    `${environment.apiUrl}/rental-report/delete/${rental_report_uuid}`
  );
}

export async function patchRentalReport(newRentalReportFormData) {
  return await httpClient.patch(
    `${environment.apiUrl}/rental-report/patch/${newRentalReportFormData.rental_report_uuid}`,
    newRentalReportFormData
  );
}
