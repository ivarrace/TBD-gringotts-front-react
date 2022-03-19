import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ModalRegistro from "../ModalRegistro";

function jsonToArray(json_parsed) {
  const result = [];
  for (var name in json_parsed) {
    result.push({ id: name, ammount: json_parsed[name] });
  }
  return result;
}

export default function CategoryTable({ data }) {
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
        <TableCell>{data.name}</TableCell>
        {jsonToArray(data.annualTotals.monthly).map((month) => {
          return (
            <TableCell
              key={month.id}
              align="right"
              //onClick={(e) => handleClick(data, movimiento)}
              sx={{
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              {month.ammount}
            </TableCell>
          );
        })}
        <TableCell align="right">{data.annualTotals.total}</TableCell>
        <TableCell align="right">{data.annualTotals.average}</TableCell>
      </TableRow>
    </>
  );
}
