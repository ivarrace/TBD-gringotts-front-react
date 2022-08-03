import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";

const NavBarOverlap = ({ toggleForm }) => {
  /*
  Este componente se mostrara debajo de la barra de navegacion, y el contenido cambiara en funcioin de la sección

    - Lista de presupuestos
        - Izquierda: fn(Selector de mes)
        - Derecha: btn("Nuevo presupuesto")
    
  */
  const currentYear = new Date().getFullYear();

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
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => toggleForm(null)}
              >
                New
              </Button>
            </ButtonGroup>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              onClick={() => toggleForm(null)}
            />
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};
export default NavBarOverlap;
