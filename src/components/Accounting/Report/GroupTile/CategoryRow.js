import * as React from "react";
import TableRow from "@mui/material/TableRow";
import RecordsModal from "./RecordsModal";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import * as moment from "moment";
function jsonToArray(json_parsed) {
  const result = [];
  for (var name in json_parsed) {
    result.push({ id: name, ammount: json_parsed[name] });
  }
  return result;
}

export default function CategoryRow({
  updateAccounting,
  accounting,
  type,
  groupId,
  categoryId,
}) {
  const category =
    type === "expenses"
      ? accounting.expenses.groups
          .find((g) => g.id === groupId)
          .categories.find((c) => c.id === categoryId)
      : accounting.income.groups
          .find((g) => g.id === groupId)
          .categories.find((c) => c.id === categoryId);
  const [openModal, setOpenModal] = React.useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  const [selected, setSelected] = React.useState();

  function handleClickRecords(month) {
    const newSelected = {
      category,
      month,
    };
    setSelected(newSelected);
    toggleModal();
  }

  return (
    <>
      {selected ? (
        <RecordsModal
          open={openModal}
          toggleModal={toggleModal}
          updateAccounting={updateAccounting}
          accounting={accounting}
          type={type}
          groupId={groupId}
          categoryId={category.id}
          defaultDate={moment(
            moment(new Date()).format("YYYY") + "-" + selected.month.id + "-01",
            "YYYY-MMMM-DD",
            true
          ).format("YYYY-MM-DD")}
        />
      ) : (
        <></>
      )}
      <TableRow key={category.id}>
        <TableCell>{category.name}</TableCell>
        {jsonToArray(category.annualTotals.monthly).map((month) => {
          return (
            <TableCell
              key={"total_" + month.id}
              align="right"
              onClick={(e) => handleClickRecords(month)}
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
