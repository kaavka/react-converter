import React, { useEffect, useState } from "react";
import { Currency } from "../Types/Currency.ts";
import { getLatest } from "../api/currency.ts";
import { createOptions } from "../utils/createOptions.ts";

interface CurrencyContext {
  currentCurrency: Currency
  errorMessage: string,
  isLoading: boolean,
}

export const CurrencyContext = React.createContext({} as CurrencyContext);

type Props = {
  children: React.ReactNode,
};

export const CurrencyContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentCurrency, setCurrentCurrency] = useState<Currency>({
    USD: {
      UAH: 0,
      EUR: 0,
    },
    EUR: {
      USD: 0,
      UAH: 0,
    },
    UAH: {
      USD: 0,
      EUR: 0,
    },
  })
  const [errorMessage, setErrorMessage] = useState<string>('');


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const currenciesToFetch = [
        createOptions("EUR", ["UAH", "USD"]),
        createOptions("USD", ["EUR", "UAH"]),
        createOptions("UAH", ["EUR", "USD"]),
      ];

      try {
        await Promise.all(
          currenciesToFetch.map(async (currency) => {
            const response = await getLatest(currency);
            const { base, rates} = response;

            setCurrentCurrency((prevState) => (
              {
                ...prevState,
                [base]: rates,
              }
            ));
          })
        )
      } catch (error) {
        console.error('Error appeared in data fetching', error);
        setErrorMessage('Unable to create connection with server, try again later')
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const value = {
    errorMessage,
    currentCurrency,
    isLoading,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
