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

export default function TotalsTable({ groupsName, groupsData }) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>{groupsName}</TableCell>
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
          {groupsData.groups.map((grupo) => {
            return (
              <TableRow key={grupo.id}>
                <TableCell></TableCell>
                <TableCell>{grupo.name}</TableCell>
                {jsonToArray(grupo.annualTotals.monthly).map((movimiento) => {
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
