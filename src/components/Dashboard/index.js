import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ExampleContent from "./ExampleContent";
import App from "../Accounting/App";
import { useParams } from "react-router-dom";
import CustomAppBar from "./CustomAppBar";
import CustomDrawer from "./CustomDrawer";
import NotFound from "../static/NotFound";

const drawerWidth = 240;

const mdTheme = createTheme();

function DashboardContent({ section, sectionId }) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  function renderSwitch(section) {
    switch (section) {
      case "accountings":
        return <App />;
      case "dashboard":
        return <ExampleContent />;
      default:
        return <NotFound type={section} id={sectionId} />;
    }
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <CustomAppBar
          drawerWidth={drawerWidth}
          drawerOpen={open}
          toggleDrawer={toggleDrawer}
        />
        <CustomDrawer
          drawerWidth={drawerWidth}
          drawerOpen={open}
          toggleDrawer={toggleDrawer}
        />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {renderSwitch(section)}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard({ section }) {
  const params = useParams();
  console.log("go to: " + section + "/" + params.id);
  return <DashboardContent section={section} sectionId={params.id} />;
}
