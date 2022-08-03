import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBarOverlap = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const currentYear = new Date().getFullYear();

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <Box position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {
            //Right box
          }
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Typography color="text.primary">{currentYear} - YTD</Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography color="text.primary">{currentYear} - YTD</Typography>
          </Box>

          {
            //Left box
          }
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Box>
        </Toolbar>

        {
          //Bottom
          /*
        }
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Nombre accounting
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Income /Expense
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      {*/
        }
      </Container>
    </Box>
  );
};
export default NavBarOverlap;
