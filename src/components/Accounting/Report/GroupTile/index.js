import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CategoryTable from "./CategoryTable";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@mui/material/TextField";

export default function GroupTile({ group, editable }) {
  function Title({ group }) {
    return (
      <Grid container sx={{ mb: 1 }}>
        <Grid item xs={11} md={11} lg={11}>
          {changeGrouName && editable ? (
            <TextField
              autoFocus
              fullWidth
              label={group.name}
              size="small"
              variant="standard"
            />
          ) : (
            <Typography component="h2" variant="h6" color="primary">
              {group.name}
            </Typography>
          )}
        </Grid>
        <Grid item xs={1} md={1} lg={1}>
          {changeGrouName && editable ? (
            <>
              <IconButton
                aria-label="Edit group name"
                color="primary"
                onClick={() => {
                  alert("Change:" + group.name);
                }}
                sx={{ mb: 2 }}
              >
                <SaveIcon />
              </IconButton>
              <IconButton
                aria-label="Edit group name"
                color="primary"
                onClick={toggleEditGroupName}
                sx={{ mb: 2 }}
              >
                <CancelIcon />
              </IconButton>
            </>
          ) : (
            <IconButton
              aria-label="Edit group name"
              color="primary"
              onClick={toggleEditGroupName}
              sx={{ mb: 2, display: editable ? "" : "none" }}
            >
              <EditIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
    );
  }

  const [changeGrouName, setChangeGroupName] = React.useState(editable);
  function toggleEditGroupName() {
    setChangeGroupName(!changeGrouName);
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
            categories={group.categories}
            summary={group.annualTotals}
            editable={editable}
          />
        </Grid>
      </Paper>
    </Grid>
  );
}
