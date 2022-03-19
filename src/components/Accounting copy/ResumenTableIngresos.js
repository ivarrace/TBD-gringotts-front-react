import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import { meses } from "../static/utils";

export default function ResumenTableIngresos({ presupuesto }) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>Ingresos</TableCell>
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
        <TableBody>
          {presupuesto.ingresos.grupos.map((grupo) => {
            return (
              <TableRow key={grupo.id}>
                <TableCell></TableCell>
                <TableCell>{grupo.name}</TableCell>
                {grupo.totales.mensual.map((movimiento) => {
                  return (
                    <TableCell key={movimiento.mes} align="right">
                      {movimiento.cantidad}
                    </TableCell>
                  );
                })}
                <TableCell align="right">{grupo.totales.total}</TableCell>
                <TableCell align="right">{grupo.totales.promedio}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
