import { client } from "../utils/fetchClient.ts";
import { LatestResponse } from "../types/LatestResponse.ts";
import { Options } from "../types/Options.ts";
import queryString from "query-string";


export const getLatest = (options: Options) => {
  const queryParams = queryString.stringify(options, {arrayFormat: 'comma'});

  return client.get<LatestResponse>(`/latest?${queryParams}`);
};
