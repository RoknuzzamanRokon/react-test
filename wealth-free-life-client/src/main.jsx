import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./providers/AuthProvider";
import TransactionsProvider from "./providers/TransactionProvider";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TransactionsProvider>
        <RouterProvider router={router} />
      </TransactionsProvider>
    </AuthProvider>
  </React.StrictMode>
);
