/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL, ACCESS_TOKEN } from "./apiConfig.ts";

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request<T>(
  query: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  const URL = `${BASE_URL + query}api_key=${ACCESS_TOKEN}`

  return fetch(URL, options)
    .then(response => response.json());
}

export const client = {
  get: <T>(query: string) => request<T>(query),
};
