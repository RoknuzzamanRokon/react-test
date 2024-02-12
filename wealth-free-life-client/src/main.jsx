import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TransactionsProvider from "./providers/TransactionProvider";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TransactionsProvider>
          <RouterProvider router={router} />
        </TransactionsProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
