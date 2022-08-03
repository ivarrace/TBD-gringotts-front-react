import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../Common/ResponsiveAppBar";
import NavBarOverlap from "./NavBarOverlap";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AccountingListItem from "./AccountingListItem";
import { accountingListMock } from "./_TestData";
import AccountingForm from "./AccountingForm";
import AccountingList from "./AccountingList";

const mdTheme = createTheme();

export default function Dashboard2() {
  const [visibleForm, setVisibleForm] = React.useState(false);
  const [formData, setFormData] = React.useState(null);
  const [accountingList, setAccountingList] =
    React.useState(accountingListMock);

  function saveAccountingHandler(newAccountingData) {
    const existingIndex = accountingList.findIndex(
      (element) => element.id === newAccountingData.id
    );
    if (existingIndex >= 0) {
      accountingList[existingIndex] = newAccountingData;
      setAccountingList([...accountingList]);
    } else {
      setAccountingList((accountingList) => [
        newAccountingData,
        ...accountingList,
      ]);
    }
  }

  function deleteAccountingHandler(accountingId) {
    let newList = accountingList.filter((accounting) => {
      return accounting.id != accountingId;
    });
    setAccountingList(newList);
  }

  function toggleForm(formData) {
    setFormData(formData);
    setVisibleForm(!visibleForm);
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <ResponsiveAppBar />

      {visibleForm ? (
        <AccountingForm
          accounting={formData}
          toggleForm={toggleForm}
          saveAccountingHandler={saveAccountingHandler}
          deleteAccountingHandler={deleteAccountingHandler}
        />
      ) : (
        <AccountingList
          accountingList={accountingList}
          toggleForm={toggleForm}
        />
      )}
    </ThemeProvider>
  );
}
