import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ModalRegistro from "./ModalRegistro";

export default function TableSectionCategoria({ categoria }) {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => setOpen(!open);
  const [selected, setSelected] = React.useState();

  function handleClick(categoria, movimientoOverview) {
    const newSelected = {
      idCategoria: categoria.id,
      movimientoOverview: movimientoOverview,
    };
    setSelected(newSelected);
    toggleModal();
  }

  return (
    <>
      <ModalRegistro
        open={open}
        toggleModal={toggleModal}
        selected={selected}
      />
      <TableRow>
        <TableCell></TableCell>
        <TableCell>{categoria.name}</TableCell>
        {categoria.totales.mensual.map((movimiento) => {
          return (
            <TableCell
              key={movimiento.mes}
              align="right"
              onClick={(e) => handleClick(categoria, movimiento)}
              sx={{
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              {movimiento.cantidad}
            </TableCell>
          );
        })}
        <TableCell align="right">{categoria.totales.total}</TableCell>
        <TableCell align="right">{categoria.totales.promedio}</TableCell>
      </TableRow>
    </>
  );
}
