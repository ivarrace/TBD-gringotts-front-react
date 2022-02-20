import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableSectionSubcategoria from "./TableSectionSubcategoria";

export default function GategoriaTable({ categoria }) {
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
        <TableCell>{categoria.name}</TableCell>
        <TableCell>Total al mes</TableCell>
        {categoria.gastosTotales.mensuales.map((gastoMensual) => {
          return (
            <TableCell key={"total_" + gastoMensual.mes} align="right">
              {gastoMensual.total}
            </TableCell>
          );
        })}
        <TableCell align="right">{categoria.gastosTotales.total}</TableCell>
        <TableCell align="right">{categoria.gastosTotales.promedio}</TableCell>
      </TableRow>
      {categoria.subcategorias.map((subcategoria) => {
        return (
          <TableSectionSubcategoria
            key={subcategoria.id}
            subcategoria={subcategoria}
          />
        );
      })}
    </TableBody>
  );
}
