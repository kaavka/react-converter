# [Currency converter](https://kaavka.github.io/react-converter/)

This sophisticated React application, meticulously crafted with TypeScript and Vite, seamlessly fetches real-time exchange rate data from the [Exchange Rates API](https://exchangeratesapi.io/). The app boasts a user-friendly interface, efficient data handling, and various features for a smooth user experience.

## Features

### 1. Loading State
- The application gracefully handles data loading with an `isLoading` state.
- The Loader component is conditionally rendered during data fetching, providing a seamless user experience.

### 2. Error Handling
- In case of loading failures, users are presented with clear error messages, and detailed error information is logged in the console for debugging purposes.

### 3. Sticky Header
- The header is intelligently designed as a sticky element, ensuring it remains accessible to users as they navigate the application.
- The header dynamically displays the current exchange rates for UAH in USD and EUR, providing real-time information.

### 4. Navigation
- The header includes a logo leading to the home page.
- Additional pages are accessible through React Router, enhancing the overall navigation experience.

### 5. Currency Converter

The `Converter` component facilitates seamless currency conversion within the application. Key features include:

#### Dynamic Currency Options
- The component dynamically generates currency options based on the `CurrencyEnum` enum.
- It leverages the `react-select` library, offering a user-friendly dropdown menu to select initial and target currencies.

#### Real-time Currency Conversion
- Users can input values in either the initial or converted input fields, with the component instantly calculating and displaying the converted value.
- Conversion rates are obtained from the `CurrencyContext`, a robust context provider fetching and managing the latest currency exchange rates.

#### Error Handling and Validation
- The component gracefully handles loading states and errors during data fetching, displaying appropriate loaders or error messages.
- Input values undergo validation using the `validate` function to ensure only valid numerical inputs are processed.

#### Context-based Currency Data
- The component relies on the `CurrencyContext` context provider to manage and provide the latest currency exchange rates.

## Used Libraries

- [React-router](https://github.com/remix-run/react-router)
- [React-select](https://github.com/JedWatson/react-select)
- [React-loader](https://github.com/website-local/react-loader)
- [QueryString](https://github.com/sindresorhus/query-string)

## Functions

1. **calculation:**
    - Returns a value multiplied by the exchange rate.
    - If the initial value is 0, it returns 0.

2. **createOptions:**
    - Constructs an object from given arguments.

3. **fetch client:**
    - A scalable client for receiving data.

4. **validate:**
    - Validates input values, removing leading zeros and enforcing a maximum value length.

## Usage

1. **Clone the repository.**
2. Run `npm install` to install dependencies.
3. Execute `npm run dev` to start the development server.
