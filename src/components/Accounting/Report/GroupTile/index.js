import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import CategoryTable from "./CategoryTable";

function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default function GroupTile({ group }) {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title>{group.name}</Title>
        <Grid container spacing={2} sx={{ pl: 2 }}>
          <CategoryTable
            categories={group.categories}
            summary={group.annualTotals}
          />
        </Grid>
      </Paper>
    </Grid>
  );
}
