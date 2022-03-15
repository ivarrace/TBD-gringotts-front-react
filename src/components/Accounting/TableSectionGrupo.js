import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableSectionCategoria from "./TableSectionCategoria";

export default function TableSectionGrupo({ grupo }) {
  return (
    <TableBody>
      <TableRow
        sx={{
          backgroundColor: "primary.light",
          /*"&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },*/
        }}
      >
        <TableCell>{grupo.name}</TableCell>
        <TableCell>Total al mes</TableCell>
        {grupo.totales.mensual.map((gastoMensual) => {
          return (
            <TableCell key={"total_" + gastoMensual.mes} align="right">
              {gastoMensual.cantidad}
            </TableCell>
          );
        })}
        <TableCell align="right">{grupo.totales.total}</TableCell>
        <TableCell align="right">{grupo.totales.promedio}</TableCell>
      </TableRow>
      {grupo.categorias.map((categoria) => {
        return (
          <TableSectionCategoria key={categoria.id} categoria={categoria} />
        );
      })}
    </TableBody>
  );
}
