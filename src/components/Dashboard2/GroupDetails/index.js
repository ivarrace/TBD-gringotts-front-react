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
import { accountingGroupsMock } from "./_TestData";
import { monthsShort } from "../../static/calendarUtils";
import CategoryTable from "./CategoryTable";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const drawerWidth = 240;
const mdTheme = createTheme();

export default function AccountingDetails() {
  let { accountingId } = useParams();
  const [accountingGroups, setAccountingGroups] =
    React.useState(accountingGroupsMock);
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
              to={"/new/" + accountingGroups.id + "/"}
            >
              {accountingGroups.name}
            </Link>
            <Typography color="text.primary">
              {accountingGroups.groupType === "income" ? "Ingresos" : "Gastos"}
            </Typography>
          </Breadcrumbs>
          {accountingGroups.groups.map((group) => {
            return (
              <Box key={group.id} pt={3}>
                <CategoryTable
                  accountingId={accountingGroups.id}
                  groupType={accountingGroups.groupType}
                  group={group}
                />
              </Box>
            );
          })}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
