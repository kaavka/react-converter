import { DEFAULT_DECIMAL_PLACES } from "./constants.ts";

export const createOptions = (
  base: string,
  currencies: string[],
  places: number = DEFAULT_DECIMAL_PLACES,
) => ({
  base,
  currencies,
  places,
});
