import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { meses } from "../static/utils";
import { presupuestoMock } from "../static/MockData";
import TableSectionGrupo from "./TableSectionGrupo";

export default function Ingresos() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              {presupuestoMock.name} - (Ultima modificacion:{" "}
              {presupuestoMock.lastUpdate})
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
        {presupuestoMock.ingresos.grupos.map((grupo) => {
          return <TableSectionGrupo key={grupo.id} grupo={grupo} />;
        })}
      </Table>
    </TableContainer>
  );
}
