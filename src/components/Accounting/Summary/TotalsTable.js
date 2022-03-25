import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import { meses } from "../../static/utils";

function jsonToArray(json_parsed) {
  const result = [];
  for (var name in json_parsed) {
    result.push({ id: name, ammount: json_parsed[name] });
  }
  return result;
}

export default function TotalsTable({ data }) {
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
            {jsonToArray(data.income.annualTotals.monthly).map((month) => {
              return (
                <TableCell key={"income_"+month.id} align="right">
                  {month.ammount}
                </TableCell>
              );
            })}
            <TableCell align="right">
              {data.income.annualTotals.total}
            </TableCell>
            <TableCell align="right">
              {data.income.annualTotals.average}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Gastos</TableCell>
            {jsonToArray(data.expenses.annualTotals.monthly).map((month) => {
              return (
                <TableCell key={"expenses_"+month.id} align="right">
                  {month.ammount}
                </TableCell>
              );
            })}
            <TableCell align="right">
              {data.expenses.annualTotals.total}
            </TableCell>
            <TableCell align="right">
              {data.expenses.annualTotals.average}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Ahorros</TableCell>
            {jsonToArray(data.savings.monthly).map((month) => {
              return (
                <TableCell key={"savings_"+month.id} align="right">
                  {month.ammount}
                </TableCell>
              );
            })}
            <TableCell align="right">{data.savings.total}</TableCell>
            <TableCell align="right">{data.savings.average}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
