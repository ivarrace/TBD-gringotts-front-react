import * as React from "react";
import Container from "@mui/material/Container";
import GroupTile from "./GroupTile";
import EditableGroupTile from "./EditableGroupTile";
import Grid from "@mui/material/Grid";
import AccountingsService from "../../../services/accountings.service";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";

export default function Report({ type, accounting, updateAccounting }) {
  const groupList =
    type === "expenses" ? accounting.expenses.groups : accounting.income.groups;
  const [editable, setEditable] = React.useState(false);
  function toggleEditable() {
    setEditable(!editable);
  }

  function addGroup() {
    const apiCall = async () => {
      const promise = await AccountingsService.addGroup(accounting.id, type);
      if (promise.status === 200) {
        updateAccounting(promise.data);
      } else {
        console.error(promise);
      }
    };
    apiCall();
  }

  function deleteGroup(groupId) {
    const apiCall = async () => {
      const promise = await AccountingsService.deleteGroup(
        accounting.id,
        type,
        groupId
      );
      if (promise.status === 200) {
        updateAccounting(promise.data);
      } else {
        console.error(promise);
      }
    };
    apiCall();
  }

  function updateGroup(groupId, name) {
    const apiCall = async () => {
      const promise = await AccountingsService.updateGroup(
        accounting.id,
        groupId,
        type,
        name
      );
      if (promise.status === 200) {
        updateAccounting(promise.data);
      } else {
        console.error(promise);
      }
    };
    apiCall();
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container sx={{ mb: 3 }}>
        <Grid item xs={12} md={12} lg={12}>
          {editable ? (
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={addGroup}
            >
              Add grupo
            </Button>
          ) : (
            <></>
          )}

          <IconButton
            aria-label="Edit group"
            color="primary"
            onClick={toggleEditable}
            sx={{ mb: 2 }}
          >
            {editable ? <LockOpenIcon /> : <LockIcon />}
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {groupList.map((group) => {
          return editable ? (
            <EditableGroupTile
              key={group.id}
              accountingId={accounting.id}
              handleDeleteGroup={deleteGroup}
              handleUpdateGroup={updateGroup}
              accounting={accounting}
              updateAccounting={updateAccounting}
              groupId={group.id}
              type={type}
            />
          ) : (
            <GroupTile
              key={group.id}
              group={group}
              accountingId={accounting.id}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
