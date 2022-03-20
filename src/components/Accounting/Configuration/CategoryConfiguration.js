import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function CategoryConfiguration({ category, group }) {
  return (
    <TableRow>
      <TableCell></TableCell>
      <TableCell>{group.name}</TableCell>
      <TableCell>{category.name}</TableCell>
    </TableRow>
  );
}
