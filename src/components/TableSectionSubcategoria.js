import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ModalRegistro from "./ModalRegistro";

export default function GategoriaTable({ subcategoria }) {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => setOpen(!open);

  function handleCellClick(subcategoria, gasto) {
    console.log(
      "Actualizar gastos del mes [" +
        gasto.mes +
        "] en la subcategoria [" +
        subcategoria.name +
        "]. Total actual: " +
        gasto.total
    );
    toggleModal(open, toggleModal);
  }

  return (
    <>
      <ModalRegistro
        open={open}
        toggleModal={toggleModal}
        subcategoria={subcategoria}
      />
      <TableRow>
        <TableCell></TableCell>
        <TableCell>{subcategoria.name}</TableCell>
        {subcategoria.gastos.map((gasto) => {
          return (
            <TableCell
              key={subcategoria.id + "_" + gasto.mes}
              align="right"
              onClick={(e) => handleCellClick(subcategoria, gasto)}
              sx={{
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              {gasto.total}
            </TableCell>
          );
        })}
        <TableCell align="right">{subcategoria.gastoTotal}</TableCell>
        <TableCell align="right">{subcategoria.gastoPromedio}</TableCell>
      </TableRow>
    </>
  );
}
