export enum CurrencyEnum {
  USD = "USD",
  EUR = "EUR",
  UAH = "UAH",
}

export enum OptionsEnum {
  Base = "base", // The base parameter sets the currency in which exchange rates are quoted
  Currencies = "currencies", // The currencies parameter specifies the currencies you want to get the exchange rates for.
  Places = "places", // The places parameter allows you to specify the amount of decimal places you want to get.
}
