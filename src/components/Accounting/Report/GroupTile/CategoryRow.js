import * as React from "react";
import TableRow from "@mui/material/TableRow";
import RecordsModal from "./RecordsModal";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

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
          selected={selected}
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
