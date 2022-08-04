import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import Link from "@mui/material/Link";
import { months } from "../../static/calendarUtils";
import { useNavigate } from "react-router-dom";

export default function CategoryTable({ accountingId, groupType, group }) {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>{group.name}</TableCell>
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
          {group.categories.map((category) => {
            return (
              <TableRow key={category.id}>
                <TableCell></TableCell>
                <TableCell>{category.name}</TableCell>
                {category.annualTotals.monthly.map((record) => {
                  return (
                    <TableCell
                      key={record.id}
                      align="right"
                      onClick={() =>
                        navigate("/accountings/" + accountingId + "/records")
                      }
                      style={{
                        cursor: "default",
                      }}
                    >
                      {record.ammount}
                    </TableCell>
                  );
                })}
                <TableCell align="right">
                  {category.annualTotals.total}
                </TableCell>
                <TableCell align="right">
                  {category.annualTotals.average}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
