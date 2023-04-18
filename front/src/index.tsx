import React from "react";
import ReactDOM from "react-dom/client";
import SGRental from "./SGRental";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const container = document.querySelector("#sgrental");
const root = ReactDOM.createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <SGRental />
  </QueryClientProvider>
);