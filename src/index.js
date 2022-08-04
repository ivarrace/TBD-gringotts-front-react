import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./components/SignIn";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import Dashboard from "./components/Dashboard";
import AccountingList from "./components/Dashboard2/AccountingList";
import AccountingDetails from "./components/Dashboard2/AccountingDetails";

import DashboardExample from "./components/Dashboard";
import NotFound from "./components/static/NotFound";
import Accounting from "./components/Accounting";
import SignUp from "./components/SignUp";
import RecordList from "./components/Dashboard2/RecordList";
import GroupList from "./components/Dashboard2/GroupList";
import { GroupTypes } from "./components/static/utils";

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
        <Route path="/register" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard section="dashboard" />{" "}
            </PrivateRoute>
          }
        />
        <Route path="accountings" element={<AccountingList />}></Route>
        <Route
          path="/accountings/:accountingId/"
          element={<AccountingDetails />}
        />
        <Route
          path={"/accountings/:accountingId/" + GroupTypes.Income.path}
          element={<GroupList groupType={GroupTypes.Income} />}
        />
        <Route
          path={"/accountings/:accountingId/" + GroupTypes.Expense.path}
          element={<GroupList groupType={GroupTypes.Expense} />}
        />
        <Route
          path="/accountings/:accountingId/records"
          element={<RecordList />}
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard section="summary" />{" "}
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
