import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./components/SignIn/SignIn";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import Dashboard from "./components/Dashboard";
import DashboardExample from "./components/Dashboard";
import NotFound from "./components/static/NotFound";
import Accounting from "./components/Accounting";

const rootElement = document.getElementById("root");

function PrivateRoute({ children }) {
  let auth = AuthService.isLogged();
  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard section="dashboard" />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/accountings"
          element={
            <PrivateRoute>
              <Dashboard section="accountings" />
            </PrivateRoute>
          }
        >
          <Route
            path=":id"
            element={(id) => {
              return <Accounting id={id} />;
            }}
          />
        </Route>
        <Route
          path="example"
          element={<DashboardExample /> /*TODO eliminar*/}
        />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <NotFound />
            </PrivateRoute>
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
