// Lib
import * as httpClient from "../lib/httpClient";
// Environment
import environment from "../environment";

export async function signIn(credentials) {
  return await httpClient.post(
    `${environment.reactAppApiUrl}/user/sign-in`,
    credentials
  );
}

export async function signUp(credentials) {
  return await httpClient.post(
    `${environment.reactAppApiUrl}/user/sign-up`,
    credentials
  );
}
