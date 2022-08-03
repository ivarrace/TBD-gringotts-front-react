import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import { months } from "../../../static/calendarUtils";

export default function TotalsTable({ accountingTotals }) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>Totales</TableCell>
            {months.map((month) => {
              return (
                <TableCell key={month.id} align="right">
                  {month.name}
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
            {accountingTotals.income.monthly.map((month) => {
              return (
                <TableCell key={"income_" + month.id} align="right">
                  {month.ammount}
                </TableCell>
              );
            })}
            <TableCell align="right">{accountingTotals.income.total}</TableCell>
            <TableCell align="right">
              {accountingTotals.income.average}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell></TableCell>
            <TableCell>Gastos</TableCell>
            {accountingTotals.expenses.monthly.map((month) => {
              return (
                <TableCell key={"expenses_" + month.id} align="right">
                  {month.ammount}
                </TableCell>
              );
            })}
            <TableCell align="right">
              {accountingTotals.expenses.total}
            </TableCell>
            <TableCell align="right">
              {accountingTotals.expenses.average}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Ahorros</TableCell>
            {accountingTotals.savings.monthly.map((month) => {
              return (
                <TableCell key={"savings_" + month.id} align="right">
                  {month.ammount}
                </TableCell>
              );
            })}
            <TableCell align="right">
              {accountingTotals.savings.total}
            </TableCell>
            <TableCell align="right">
              {accountingTotals.savings.average}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
