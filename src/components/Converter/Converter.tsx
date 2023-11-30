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

interface ConverterState {
  initialCurrency: Option;
  convertCurrency: Option;
  initialValue: number;
  convertedValue: number;
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

  const [converterState, setConverterState] = useState<ConverterState>({
    initialCurrency: options.current[0],
    convertCurrency: options.current[1],
    initialValue: 0,
    convertedValue: 0,
  });

  const [disabledOptions, setDisabledOptions] = useState<Option[]>([]);

  useEffect(() => {
    setDisabledOptions([converterState.initialCurrency, converterState.convertCurrency]);
  }, [converterState.initialCurrency.value, converterState.convertCurrency.value]);

  const onInitialValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(validate(event.target.value));

    setConverterState(prevState => ({
      ...prevState,
      initialValue: value,
      convertedValue: calculate(
        value, currentCurrency[converterState.convertCurrency.value][converterState.initialCurrency.value]
      ),
    }));
  };

  const onConvertedValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: number  = Number(validate(event.target.value));

    setConverterState(prevState => ({
      ...prevState,
      convertedValue: value,
      initialValue: calculate(
        value, currentCurrency[converterState.convertCurrency.value][converterState.initialCurrency.value]
      ),
    }));
  };

  const setCurrencyConvert = (option: Option) => {
    const value = calculate(
      converterState.convertedValue, currentCurrency[option.value][converterState.initialCurrency.value]
    )
    setConverterState(prevState => ({
      ...prevState,
      initialValue: value,
      convertCurrency: option,
    }));
  };

  const setCurrencyInitial = (option: Option) => {
    const value = calculate(
      converterState.initialValue, currentCurrency[option.value][converterState.convertCurrency.value]
    )
    setConverterState(prevState => ({
      ...prevState,
      convertedValue: value,
      initialCurrency: option,
    }));
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
            value={converterState.initialValue}
          />
          <Select
            isOptionDisabled={({ value }) => disabledOptions.some(option => option.value === value)}
            options={options.current}
            onChange={(option) => setCurrencyInitial(option as Option)}
            value={converterState.initialCurrency}
          />
        </div>

        <div className={"converter__pair"}>
          <ConverterInput
            onChange={onConvertedValueChange}
            value={converterState.convertedValue}
          />
          <Select
            isOptionDisabled={({ value }) => disabledOptions.some(option => option.value === value)}
            options={options.current}
            value={converterState.convertCurrency}
            onChange={(option) => setCurrencyConvert(option as Option)}
          />
        </div>
      </form>
    ))
  );
}
