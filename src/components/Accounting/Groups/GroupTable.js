import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CategoryTable from "./CategoryTable";

function jsonToArray(json_parsed) {
  const result = [];
  for (var name in json_parsed) {
    result.push({ id: name, ammount: json_parsed[name] });
  }
  return result;
}

export default function TableSectionGrupo({ data }) {
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
        <TableCell>{data.name}</TableCell>
        <TableCell>Total al mes</TableCell>
        {jsonToArray(data.annualTotals.monthly).map((month) => {
          return (
            <TableCell key={"total_" + month.id} align="right">
              {month.ammount}
            </TableCell>
          );
        })}
        <TableCell align="right">{data.annualTotals.total}</TableCell>
        <TableCell align="right">{data.annualTotals.average}</TableCell>
      </TableRow>
      {data.categories.map((category) => {
        return <CategoryTable key={category.id} data={category} />;
      })}
    </TableBody>
  );
}
