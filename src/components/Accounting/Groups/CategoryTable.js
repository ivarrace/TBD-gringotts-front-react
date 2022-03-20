import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import RecordsModal from "../RecordsModal";

function jsonToArray(json_parsed) {
  const result = [];
  for (var name in json_parsed) {
    result.push({ id: name, ammount: json_parsed[name] });
  }
  return result;
}

export default function CategoryTable({ category }) {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => setOpen(!open);
  const [selected, setSelected] = React.useState();

  function handleClick(month) {
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
          open={open}
          toggleModal={toggleModal}
          selected={selected}
        />
      ) : (
        <></>
      )}

      <TableRow>
        <TableCell></TableCell>
        <TableCell>{category.name}</TableCell>
        {jsonToArray(category.annualTotals.monthly).map((month) => {
          return (
            <TableCell
              key={month.id}
              align="right"
              onClick={(e) => handleClick(month)}
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
