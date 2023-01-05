import environment from "../environment";
import * as httpClient from "../libraries/http-client.library";

export async function getUserRentalReportsList(user_id) {
  return await httpClient.get(
    `${environment.reactAppApiUrl}/rental-reports/${user_id}`
  );
}

export async function createRentalReport(newRentalReportFormData) {
  return await httpClient.post(
    `${environment.reactAppApiUrl}/rental-report/create`,
    newRentalReportFormData
  );
}

export async function getRentalReport(rental_report_uuid) {
  return await httpClient.get(
    `${environment.reactAppApiUrl}/rental-report/${rental_report_uuid}`
  );
}

export async function deleteRentalReport(rental_report_uuid) {
  return await httpClient.del(
    `${environment.reactAppApiUrl}/rental-report/delete/${rental_report_uuid}`
  );
}

export async function patchRentalReport(newRentalReportFormData) {
  return await httpClient.patch(
    `${environment.reactAppApiUrl}/rental-report/patch/${newRentalReportFormData.rental_report_uuid}`,
    newRentalReportFormData
  );
}
