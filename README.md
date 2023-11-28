# React + TypeScript + Vite Exchange Rate App

This React application, built with TypeScript and Vite, fetches data from [Exchange Rates API](https://exchangeratesapi.io/) and utilizes a currency context. Below are the key features:

## Features

1. **Loading State**: When data is being loaded from the API, the `isLoading` state is set to true. Once the data is successfully loaded, the state is set to false. This mechanism is implemented for conditional rendering of the Loader component.

2. **Error Handling**: In case of a loading failure, users will see an error message, and more detailed error information will be logged in the console.

3. **Sticky Header**: The header is a sticky element, ensuring it is always accessible to the user. The header displays the current exchange rates for UAH in USD and EUR.

4. **Navigation**: The logo in the header leads to the home page, and additional pages using React router to switch pages accessible through the navbar.

5. **Converter Component**: The Converter component includes two inputs for the initial value and the converter, along with select menus for currency changes. Input values are validated to remove leading zeros and enforce a maximum value length.

## Used Libraries

- [React-router](https://github.com/remix-run/react-router)
- [React-select](https://github.com/JedWatson/react-select)
- [React-loader](https://github.com/website-local/react-loader)
- [QueryString](https://github.com/sindresorhus/query-string)

## Functions

1. **calculation**: Returns a value multiplied by the exchange rate. If the initial value is 0, it returns 0.

2. **createOptions**: Constructs an object from given arguments.

3. **fetch client**: A scalable client for receiving data.

4. **validate**: Validates input values, removing leading zeros and enforcing a maximum value length.

## Usage

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Execute `npm run dev` to start the development server.

## [DEMO](https://kaavka.github.io/react-converter/)
