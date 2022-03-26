import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { meses } from "../../../static/utils";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import CategoryRow from "./CategoryRow";

function jsonToArray(json_parsed) {
  const result = [];
  for (var name in json_parsed) {
    result.push({ id: name, ammount: json_parsed[name] });
  }
  return result;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  /*[`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },*/
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  /*// hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },*/
}));

export default function CategoryTable({
  updateAccounting,
  accounting,
  type,
  groupId,
}) {
  const group =
    type === "expenses"
      ? accounting.expenses.groups.find((g) => g.id === groupId)
      : accounting.income.groups.find((g) => g.id === groupId);
  const summary = group.annualTotals;
  const categoryList = group.categories;

  return (
    <TableContainer>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
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
          <StyledTableRow>
            <StyledTableCell>
              <b>Total</b>
            </StyledTableCell>
            {jsonToArray(summary.monthly).map((month) => {
              return (
                <StyledTableCell key={"total_" + month.id} align="right">
                  {month.ammount}
                </StyledTableCell>
              );
            })}
            <StyledTableCell align="right">{summary.total}</StyledTableCell>
            <StyledTableCell align="right">{summary.average}</StyledTableCell>
          </StyledTableRow>
          {categoryList.map((category) => {
            return (
              <CategoryRow
                key={category.id}
                updateAccounting={updateAccounting}
                accounting={accounting}
                type={type}
                groupId={groupId}
                categoryId={category.id}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
