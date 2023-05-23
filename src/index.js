/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "App";

// React Query
import { QueryClient, QueryClientProvider } from "react-query";

// Material Dashboard 2 PRO React Context Provider
import { MaterialUIControllerProvider } from "context";


// Create Query client
const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
