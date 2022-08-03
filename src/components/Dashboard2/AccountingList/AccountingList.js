import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import NavBarOverlap from "./NavBarOverlap";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AccountingListItem from "./AccountingListItem";

export default function AccountingList({ accountingList, toggleForm }) {
  return (
    <Container maxWidth="xl">
      <NavBarOverlap toggleForm={toggleForm} />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              {accountingList.map((accounting) => {
                return (
                  <AccountingListItem
                    key={accounting.id}
                    accounting={accounting}
                    toggleForm={toggleForm}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
