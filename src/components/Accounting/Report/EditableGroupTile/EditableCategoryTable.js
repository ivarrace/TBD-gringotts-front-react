import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { meses } from "../../../static/utils";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import EditableCategoryRow from "./EditableCategoryRow";

import AccountingsService from "../../../../services/accountings.service";
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

export default function EditableCategoryTable({
  accountingId,
  accounting,
  updateAccounting,
  groupId,
  type,
}) {
  const thisGroup =
    type === "expenses"
      ? accounting.expenses.groups.find((g) => g.id === groupId)
      : accounting.income.groups.find((g) => g.id === groupId);
  const summary = thisGroup.annualTotals;
  const categoryList = thisGroup.categories;
  const valueRef = React.useRef("");

  function addCategory() {
    const name = valueRef.current.value;
    const apiCall = async () => {
      const promise = await AccountingsService.addCategory(
        accountingId,
        groupId,
        type,
        name
      );
      if (promise.status === 200) {
        updateAccounting(promise.data);
        valueRef.current.value = "";
      } else {
        console.error(promise);
      }
    };
    apiCall();
  }

  function updateCategory(categoryId, name) {
    const apiCall = async () => {
      const promise = await AccountingsService.updateCategory(
        accounting.id,
        groupId,
        type,
        categoryId,
        name
      );
      if (promise.status === 200) {
        updateAccounting(promise.data);
      } else {
        console.error(promise);
      }
    };
    apiCall();
  }

  function deleteCategory(categoryId) {
    const apiCall = async () => {
      const promise = await AccountingsService.deleteCategory(
        accounting.id,
        groupId,
        type,
        categoryId
      );
      if (promise.status === 200) {
        updateAccounting(promise.data);
      } else {
        console.error(promise);
      }
    };
    apiCall();
  }

  return (
    <TableContainer>
      <Table aria-label="simple table" stickyHeader>
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
        <TableBody>
          <StyledTableRow>
            <StyledTableCell colSpan={2}>
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
              <EditableCategoryRow
                key={category.id}
                categoryId={category.id}
                group={thisGroup}
                accountingId={accountingId}
                accounting={accounting}
                updateAccounting={updateAccounting}
                groupId={groupId}
                type={type}
                handleUpdateCategory={updateCategory}
                handleDeleteCategory={deleteCategory}
              />
            );
          })}
          {/* ADD category */}
          <TableRow>
            <TableCell colSpan={2}>
              <TextField
                hiddenLabel
                variant="filled"
                size="small"
                inputRef={valueRef}
                InputProps={{
                  endAdornment: (
                    <IconButton color="primary" onClick={addCategory}>
                      <AddIcon />
                    </IconButton>
                  ),
                }}
              />
            </TableCell>
          </TableRow>
          {/* ADD category */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
