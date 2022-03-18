import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./components/SignIn/SignIn";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthService from "./services/auth.service";
import App from "./components/Accounting/App";
import Dashboard from "./components/Dashboard";
import DashboardExample from "./components/Dashboard";
import NotFound from "./components/static/NotFound";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            AuthService.isLogged() ? (
              <Dashboard section="dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/accountings"
          element={
            AuthService.isLogged() ? (
              <Dashboard section="accountings" />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route path=":id" element={<App />} />
        </Route>
        <Route
          path="example"
          element={<DashboardExample /> /*TODO eliminar*/}
        />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="*"
          element={
            AuthService.isLogged() ? <NotFound /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
