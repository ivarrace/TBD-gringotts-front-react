import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { meses } from "../../../static/utils";
import RecordsModal from "../../RecordsModal";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import EditableTextField from "../../../Common/EditableTextField";
function jsonToArray(json_parsed) {
  const result = [];
  for (var name in json_parsed) {
    result.push({ id: name, ammount: json_parsed[name] });
  }
  return result;
}

export default function CategoryRow({ category, accountingId, group }) {
  const [openModal, setOpenModal] = React.useState(false);
  const toggleModal = () => setOpenModal(!openModal);
  const [selected, setSelected] = React.useState();

  function handleClickRecords(category, month) {
    const newSelected = {
      category,
      month,
    };
    setSelected(newSelected);
    toggleModal();
  }

  return (
    <>
      <TableRow key={category.id}>
        <TableCell>{category.name}</TableCell>
        {jsonToArray(category.annualTotals.monthly).map((month) => {
          return (
            <TableCell
              key={"total_" + month.id}
              align="right"
              onClick={(e) => handleClickRecords(category, month)}
              sx={{
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              {month.ammount}
            </TableCell>
          );
        })}
        <TableCell align="right">{category.annualTotals.total}</TableCell>
        <TableCell align="right">{category.annualTotals.average}</TableCell>
      </TableRow>
    </>
  );
}
