import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CurrencyContextProvider } from "./context/CurrencyContext.tsx";
import { Root } from "./Root.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CurrencyContextProvider>
      <Root />
    </CurrencyContextProvider>
  </React.StrictMode>,
)
