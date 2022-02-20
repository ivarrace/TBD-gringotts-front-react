import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { PresupuestoData, meses } from "../static/MockData";
import CategoriaTableSection from "./TableSectionCategoria";

export default function Gastos() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              {PresupuestoData.name} - {PresupuestoData.year}
            </TableCell>
            {meses.map((mes) => {
              return (
                <TableCell key={mes.id} align="right">
                  {mes.nombre}
                </TableCell>
              );
            })}
            <TableCell align="right">
              <b>Total</b>
            </TableCell>
            <TableCell align="right">
              <b>Promedio</b>
            </TableCell>
          </TableRow>
        </TableHead>
        {PresupuestoData.categoriasGastos.map((categoriaGasto) => {
          return (
            <CategoriaTableSection
              key={categoriaGasto.id}
              categoria={categoriaGasto}
            />
          );
        })}
      </Table>
    </TableContainer>
  );
}
