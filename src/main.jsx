import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { CartContextProvider } from './context/CartContext.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
