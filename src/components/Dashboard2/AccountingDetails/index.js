import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../Common/ResponsiveAppBar";
import NavBarOverlap from "./NavBarOverlap";
import Chart from "../../Dashboard/ExampleContent/Chart";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Summary from "./Summary";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { accountingMock } from "./_TestData";
import { monthsShort } from "../../static/calendarUtils";

const drawerWidth = 240;
const mdTheme = createTheme();

export default function AccountingDetails() {
  let { accountingId } = useParams();
  const [accounting, setAccounting] = React.useState(accountingMock);
  return (
    <ThemeProvider theme={mdTheme}>
      <ResponsiveAppBar />
      <NavBarOverlap />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.primary">{accounting.name}</Typography>
          </Breadcrumbs>
          {/*}
          <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
            {accounting.name}
          </Typography>
  {*/}
          <Summary accounting={accounting} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
