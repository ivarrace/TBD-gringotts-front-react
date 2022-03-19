import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useNavigate, useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

export default function NavigationList({ accountingList }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [openAccountings, setOpenAccountings] = React.useState(true);

  const handleClickAccountings = () => {
    setOpenAccountings(!openAccountings);
  };

  return (
    <List component="nav">
      <ListItemButton
        onClick={() => navigate("/")}
        selected={location.pathname === "/"}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Summary" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      <ListItemButton onClick={handleClickAccountings}>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Accountings" />
        {openAccountings ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAccountings} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {accountingList.map((accounting) => {
            return (
              <ListItemButton
                sx={{ pl: 4 }}
                key={accounting.id}
                onClick={() => navigate("/accountings/" + accounting.id)}
                selected={location.pathname === "/accountings/" + accounting.id}
              >
                <ListItemText
                  primary={accounting.name}
                  secondary={accounting.lastModified}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>

      <Divider sx={{ my: 1 }} />

      <ListItemButton
        onClick={() => navigate("/dashboard")}
        selected={location.pathname === "/dashboard"}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Example" />
      </ListItemButton>
    </List>
  );
}
