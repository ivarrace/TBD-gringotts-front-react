import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import EditableTextField from "../../../Common/EditableTextField";
import ClearIcon from "@mui/icons-material/Clear";

function jsonToArray(json_parsed) {
  const result = [];
  for (var name in json_parsed) {
    result.push({ id: name, ammount: json_parsed[name] });
  }
  return result;
}

export default function EditableCategoryRow({
  categoryId,
  accountingId,
  group,
  accounting,
  updateAccounting,
  groupId,
  type,
  handleUpdateCategory,
  handleDeleteCategory,
}) {
  const category =
    type === "expenses"
      ? accounting.expenses.groups
          .find((g) => g.id === groupId)
          .categories.find((c) => c.id === categoryId)
      : accounting.income.groups
          .find((g) => g.id === groupId)
          .categories.find((c) => c.id === categoryId);
  const [nameChanged, setNameChanged] = React.useState(false);

  function updateCategory(name) {
    setNameChanged(true);
    handleUpdateCategory(categoryId, name);
  }
  function deleteCategory() {
    handleDeleteCategory(categoryId);
  }

  return (
    <TableRow key={category.id}>
      <TableCell>
        <IconButton
          aria-label="Edit group"
          color="secondary"
          onClick={deleteCategory}
        >
          <ClearIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <EditableTextField
          sx={{ minWidth: 150 }}
          value={category.name}
          onSave={updateCategory}
          done={nameChanged}
        />
      </TableCell>
      {jsonToArray(category.annualTotals.monthly).map((month) => {
        return (
          <TableCell key={"total_" + month.id} align="right">
            {month.ammount}
          </TableCell>
        );
      })}
      <TableCell align="right">{category.annualTotals.total}</TableCell>
      <TableCell align="right">{category.annualTotals.average}</TableCell>
    </TableRow>
  );
}
