import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function GroupBox({ groupsName, groupList }) {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6}>
      <Item theme={theme}>
        <List
          sx={{
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 300,
            "& ul": { padding: 0 },
          }}
        >
          <ListSubheader>{groupsName}</ListSubheader>
          {groupList.map((group) => (
            <ListItem key={group.id}>
              <ListItemText primary={group.name} />
            </ListItem>
          ))}
        </List>
      </Item>
    </Grid>
  );
}
