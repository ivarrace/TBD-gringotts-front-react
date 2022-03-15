import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import { meses } from "../static/utils";

export default function ResumenTableAll({ presupuesto }) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>Totales</TableCell>
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
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Ingresos</TableCell>
            {presupuesto.ingresos.totales.mensual.map((movimiento) => {
              return (
                <TableCell key={movimiento.mes} align="right">
                  {movimiento.cantidad}
                </TableCell>
              );
            })}
            <TableCell align="right">
              {presupuesto.ingresos.totales.total}
            </TableCell>
            <TableCell align="right">
              {presupuesto.ingresos.totales.promedio}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Gastos</TableCell>
            {presupuesto.gastos.totales.mensual.map((movimiento) => {
              return (
                <TableCell key={movimiento.mes} align="right">
                  {movimiento.cantidad}
                </TableCell>
              );
            })}
            <TableCell align="right">
              {presupuesto.gastos.totales.total}
            </TableCell>
            <TableCell align="right">
              {presupuesto.gastos.totales.promedio}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Ahorros</TableCell>
            {presupuesto.ahorro.mensual.map((movimiento) => {
              return (
                <TableCell key={movimiento.mes} align="right">
                  {movimiento.cantidad}
                </TableCell>
              );
            })}
            <TableCell align="right">{presupuesto.ahorro.total}</TableCell>
            <TableCell align="right">{presupuesto.ahorro.promedio}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
