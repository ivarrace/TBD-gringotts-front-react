import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function ConfiguracionCategoria({ categoria, grupo }) {
  return (
    <TableRow>
      <TableCell>Gastos</TableCell>
      <TableCell>{grupo.name}</TableCell>
      <TableCell>{categoria.name}</TableCell>
    </TableRow>
  );
}
