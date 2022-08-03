import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import Link from "@mui/material/Link";
import { months } from "../../../static/calendarUtils";

export default function TotalsTable({ groupType, groupsData }) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              <Link href={"/new/test/" + groupType} underline="none">
                {groupType === "income" ? "Ingresos" : "Gastos"}
              </Link>
            </TableCell>
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
          {groupsData.groups.map((grupo) => {
            return (
              <TableRow key={grupo.id}>
                <TableCell></TableCell>
                <TableCell>{grupo.name}</TableCell>
                {grupo.annualTotals.monthly.map((movimiento) => {
                  return (
                    <TableCell key={movimiento.id} align="right">
                      {movimiento.ammount}
                    </TableCell>
                  );
                })}
                <TableCell align="right">{grupo.annualTotals.total}</TableCell>
                <TableCell align="right">
                  {grupo.annualTotals.average}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
