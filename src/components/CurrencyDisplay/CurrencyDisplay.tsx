import { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext.tsx";

import { ErrorMessage } from "../ErrorMessage/ErrorMessage.tsx";
import './CurrencyDisplay.scss'
import { Loader } from "../Loader/Loader.tsx";
import { CurrencyEnum } from "../../utils/enums.ts";

export function CurrencyDisplay() {
  const { currentCurrency, isLoading, errorMessage } = useContext(CurrencyContext);
  const loadedWithError = !isLoading && errorMessage;
  const successfullyLoaded = !isLoading && !errorMessage

  return (
    <div className={'currency'}>
      {isLoading && (
        <Loader />
      )}

      {loadedWithError && (
        <ErrorMessage />
      )}

      {successfullyLoaded && (
        Object.entries(currentCurrency[CurrencyEnum.UAH]).map(([key, value]) => (
          <div className={'currency__pair'} key={key}>
            <p className={'currency__pair__name'}>{key}</p>
            <p className={'currency__pair__value'}>{value}</p>
          </div>
        ))
      )}
    </div>
  )
}
