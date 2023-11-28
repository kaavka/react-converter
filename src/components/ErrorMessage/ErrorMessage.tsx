import { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext.tsx";

export function ErrorMessage() {
  const { errorMessage } = useContext(CurrencyContext)
  return (
    <p>{errorMessage}</p>
  )
}
