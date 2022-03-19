import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { meses } from "../../static/utils";
import GroupTable from "./GroupTable";

export default function Gropus({ groupsName, data }) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}></TableCell>
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
        {data.groups.map((group) => {
          return <GroupTable key={group.id} data={group} />;
        })}
      </Table>
    </TableContainer>
  );
}
