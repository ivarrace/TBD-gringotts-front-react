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

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  /*
  Este componente se mostrara debajo de la barra de navegacion, y el contenido cambiara en funcioin de la sección

    - Lista de presupuestos
        - Izquierda: fn(Selector de mes)
        - Derecha: btn("Nuevo presupuesto")
    - Detalle presupuesto
        - Izquierda: 
            - fn(Selector de mes)
            - txt("Nombre del presupuesto")
        - Derecha: btn("Configurar/Editar presupuesto")
    
  */

  return (
    <Box position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {
            //Right box
          }
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Typography color="text.primary">*-Junio 2022-* $Nombre</Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography color="text.primary">*-Junio 2022-* $Nombre</Typography>
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
      </Container>
    </Box>
  );
};
export default NavBarOverlap;
