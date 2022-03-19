import * as React from "react";
import Title from "../../Dashboard/ExampleContent/Title";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import GroupBox from "./GroupBox";
import AccountingSummaryChartBox from "./AccountingSummaryChartBox";

export default function AccountingSummary({ data }) {
  return (
    <Grid item xs={12} md={8} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          //height: 240,
        }}
      >
        <Title>{data.name}</Title>
        <Grid container spacing={2}>
          <AccountingSummaryChartBox data={data.savings} />
          <GroupBox groupsName={"Expenses"} groupList={data.expenses.groups} />
          <GroupBox groupsName={"Income"} groupList={data.income.groups} />
        </Grid>
      </Paper>
    </Grid>
  );
}
