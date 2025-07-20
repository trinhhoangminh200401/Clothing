import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import { UserProvider } from "./context/User.context.jsx";
import { CategoriessProvider } from "./context/Categories.context.jsx";
import { CartProvider } from "./context/Cart.context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriessProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriessProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
