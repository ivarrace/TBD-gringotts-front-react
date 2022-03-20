import * as React from "react";
import Container from "@mui/material/Container";
import GroupTile from "./GroupTile";
import Grid from "@mui/material/Grid";

export default function Report({ report }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {report.groups.map((group) => {
          return <GroupTile group={group} />;
        })}
      </Grid>
    </Container>
  );
}
