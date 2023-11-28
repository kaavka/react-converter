import Select from "react-select";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CurrencyContext } from "../../context/CurrencyContext.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage.tsx";
import { ConverterInput } from "../ConverterInput/ConverterInput.tsx";
import { CurrencyEnum } from "../../utils/enums.ts";
import { calculate } from "../../utils/calculation.ts";
import './Converter.scss';
import { validate } from "../../utils/validate.ts";

interface Option {
  value: string;
  label: string;
}

export function Converter() {
  const {
    errorMessage,
    currentCurrency,
    isLoading,
  } = useContext(CurrencyContext);

  const options = useRef<Option[]>(Object.keys(CurrencyEnum).map((option) => ({
    value: option,
    label: option,
  })))

  const [initialCurrency, setInitialCurrency] = useState<Option>(
    options.current[0],
  );
  const [convertCurrency, setConvertCurrency] = useState<Option>(
    options.current[1],
  );
  const [initialValue, setInitialValue] = useState<number>(1);
  const [convertedValue, setConvertedValue] = useState<number>(
    currentCurrency[initialCurrency.value][convertCurrency.value]
  );

  const [disabledOptions, setDisabledOptions] = useState<Option[]>([]);

  useEffect(() => {
    setDisabledOptions([initialCurrency, convertCurrency]);
  }, [initialCurrency.value, convertCurrency.value]);

  const onInitialValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(validate(event.target.value));

    setInitialValue(value);
    const converted = calculate(value, currentCurrency[convertCurrency.value][initialCurrency.value]);
    setConvertedValue(converted);
  };

  const onConvertedValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value: number  = Number(validate(event.target.value));

    setConvertedValue(value);
    const converted = calculate(value, currentCurrency[convertCurrency.value][initialCurrency.value]);
    setInitialValue(converted);
  };

  const setCurrencyConvert = (option: Option) => {
    const value = calculate(convertedValue, currentCurrency[option.value][initialCurrency.value])
    setInitialValue(value);
    setConvertCurrency(option);
  };

  const setCurrencyInitial = (option: Option) => {
    const value = calculate(initialValue, currentCurrency[option.value][convertCurrency.value])
    setConvertedValue(value);
    setInitialCurrency(option);
  };

  const loadedWithError = !isLoading && errorMessage;
  const successfullyLoaded = !isLoading && !errorMessage;

  return (
    (isLoading && <Loader />) ||
    (loadedWithError && <ErrorMessage />) ||
    (successfullyLoaded && (
      <form className={"converter"}>
        <div className={"converter__pair"}>
          <ConverterInput
            onChange={onInitialValueChange}
            value={initialValue}
          />
          <Select
            isOptionDisabled={({ value }) => disabledOptions.some(option => option.value === value)}
            options={options.current}
            onChange={(option) => setCurrencyInitial(option as Option)}
            value={initialCurrency}
          />
        </div>

        <div className={"converter__pair"}>
          <ConverterInput
            onChange={onConvertedValueChange}
            value={convertedValue}
          />
          <Select
            isOptionDisabled={({ value }) => disabledOptions.some(option => option.value === value)}
            options={options.current}
            value={convertCurrency}
            onChange={(option) => setCurrencyConvert(option as Option)}
          />
        </div>
      </form>
    ))
  );
}
