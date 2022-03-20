import * as React from "react";
import Container from "@mui/material/Container";
import GroupTile from "./GroupTile";
import Grid from "@mui/material/Grid";

import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";

export default function Report({ report }) {
  const [editable, setEditable] = React.useState(false);
  function toggleEditable() {
    setEditable(!editable);
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container sx={{ mb: 3 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            sx={{ pt: 1 }}
            onClick={toggleEditable}
            color={editable ? "secondary" : "primary"}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            sx={{
              pt: 1,
              ml: 3,
              display: editable ? "" : "none",
            }}
            onClick={() => {
              alert("add new group");
            }}
          >
            Add grupo
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {report.groups.map((group) => {
          return <GroupTile group={group} editable={editable} />;
        })}
      </Grid>
    </Container>
  );
}
