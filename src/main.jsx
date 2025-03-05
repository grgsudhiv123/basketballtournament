import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BasketBallContextProvider from "../src/context/basketballContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BasketBallContextProvider>
      <App />
    </BasketBallContextProvider>
  </StrictMode>,
)
