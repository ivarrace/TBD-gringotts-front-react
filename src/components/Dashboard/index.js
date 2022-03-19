import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ExampleContent from "./ExampleContent";
import Accounting from "../Accounting";
import { useParams } from "react-router-dom";
import CustomAppBar from "./CustomAppBar";
import CustomDrawer from "./CustomDrawer";
import NotFound from "../static/NotFound";
import AccountingsService from "../../services/accountings.service";
import Summary from "../Summary";

const drawerWidth = 240;
const mdTheme = createTheme();

function DashboardContent({ section, sectionId }) {
  const [accountingList, setAccountingList] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    const apiCall = async () => {
      const promise = await AccountingsService.getAccountings();
      setAccountingList(promise.data);
    };
    apiCall();
  }, []);

  function renderSwitch(section) {
    switch (section) {
      case "summary":
        return <Summary data={accountingList} />;
      case "accountings":
        return <Accounting id={sectionId} />;
      case "dashboard":
        return <ExampleContent />;
      default:
        return <NotFound type={section} />;
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
          accountingList={accountingList}
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
  return <DashboardContent section={section} sectionId={params.id} />;
}
