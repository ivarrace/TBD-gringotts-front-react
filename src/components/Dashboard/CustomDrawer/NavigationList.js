import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

export default function NavigationList({ accountingList }) {
  const navigate = useNavigate();
  return (
    <List component="nav">
      <ListItemButton onClick={() => navigate("/dashboard")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Example" />
      </ListItemButton>
      <Divider sx={{ my: 1 }} />
      <React.Fragment>
        <ListSubheader component="div" inset>
          Accounting
        </ListSubheader>
        {accountingList.map((accounting) => {
          return (
            <ListItemButton
              key={accounting.id}
              onClick={() => navigate("/accountings/" + accounting.id)}
            >
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary={accounting.name} secondary={"..."} />
            </ListItemButton>
          );
        })}
      </React.Fragment>
    </List>
  );
}
