import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CategoryTable from "./CategoryTable";

export default function GroupTile({
  updateAccounting,
  accounting,
  type,
  groupId,
}) {
  const group =
    type === "expenses"
      ? accounting.expenses.groups.find((g) => g.id === groupId)
      : accounting.income.groups.find((g) => g.id === groupId);
  function Title({ group }) {
    return (
      <Grid container sx={{ mb: 1 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography component="h2" variant="h6" color="primary">
            {group.name}
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title group={group} />
        <Grid container spacing={2} sx={{ pl: 2 }}>
          <CategoryTable
            updateAccounting={updateAccounting}
            accounting={accounting}
            type={type}
            groupId={groupId}
          />
        </Grid>
      </Paper>
    </Grid>
  );
}
