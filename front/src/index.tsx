import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import SGRental from "./SGRental";
import { QueryClient, QueryClientProvider } from "react-query";
import Auth from "./utils/use-auth";
import ModalProvider from "./components/ModalProvider";
const queryClient = new QueryClient();
const container = document.querySelector("#sgrental");
const root = ReactDOM.createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <Auth>
      <ModalProvider>
        <SGRental />
      </ModalProvider>
    </Auth>
  </QueryClientProvider>
);