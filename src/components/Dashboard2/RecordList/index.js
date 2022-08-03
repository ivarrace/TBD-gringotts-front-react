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
import Typography from "@mui/material/Typography";
import { RecordsMock } from "./_TestData";
import { AccountingRecords } from "./_TestData";
import { monthsShort } from "../../static/calendarUtils";
import RecordTable from "./RecordTable";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const drawerWidth = 240;
const mdTheme = createTheme();

const AvailableScopes = {
  Accounting: "accounting",
  GroupType: "type",
  Group: "group",
  Category: "category",
};

export default function RecordList() {
  const [records, setRecords] = React.useState(AccountingRecords);
  const scope = AvailableScopes.Accounting;

  return (
    <ThemeProvider theme={mdTheme}>
      <ResponsiveAppBar />
      <NavBarOverlap />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              to={"/new/" + records.accounting.id + "/"}
            >
              {records.accounting.name}
            </Link>
            <Typography color="text.primary">
              {records.groupType ? records.groupType : "All types"}
            </Typography>
            <Typography color="text.primary">
              {records.group ? records.group.name : "All groups"}
            </Typography>
            <Typography color="text.primary">
              {records.category ? records.category.name : "All categories"}
            </Typography>
            <Typography color="text.primary">
              {"Records (" + records.from + "-" + records.to + ")"}
            </Typography>
          </Breadcrumbs>
          <Box pt={3}>
            <RecordTable records={records.data} />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
