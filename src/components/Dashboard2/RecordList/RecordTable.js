import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import Link from "@mui/material/Link";
import { months } from "../../static/calendarUtils";

export default function RecordTable({ records }) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Fecha</b>
            </TableCell>
            <TableCell>
              <b>Cantidad</b>
            </TableCell>
            <TableCell>
              <b>Concepto</b>
            </TableCell>
            <TableCell>
              <b>Accounting</b>
            </TableCell>
            <TableCell>
              <b>Tipo</b>
            </TableCell>
            <TableCell>
              <b>Grupo</b>
            </TableCell>
            <TableCell>
              <b>Categoria</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record) => {
            return (
              <TableRow key={record.id}>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.ammount}</TableCell>
                <TableCell>{record.details}</TableCell>
                <TableCell>{record.accounting}</TableCell>
                <TableCell>{record.type}</TableCell>
                <TableCell>{record.group}</TableCell>
                <TableCell>{record.category}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
