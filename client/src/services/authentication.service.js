import environment from "../environment";
import * as httpClient from "../libraries/http-client.library";

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
