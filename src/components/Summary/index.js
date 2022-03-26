import * as React from "react";
import Container from "@mui/material/Container";
import AccountingSummary from "./AccountingSummary";
import Grid from "@mui/material/Grid";

export default function Summary({ data }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Accountings */}
        {data.map((accountungSummary) => {
          return <AccountingSummary key="summary" data={accountungSummary} />;
        })}
      </Grid>
    </Container>
  );
}
