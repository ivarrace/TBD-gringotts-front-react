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
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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

export default function CategoryTable({ categories, summary, editable }) {
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
      {selected ? (
        <RecordsModal
          open={openModal}
          toggleModal={toggleModal}
          selected={selected}
        />
      ) : (
        <></>
      )}
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
            {categories.map((category) => {
              return (
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
                  <TableCell align="right">
                    {category.annualTotals.total}
                  </TableCell>
                  <TableCell align="right">
                    {category.annualTotals.average}
                  </TableCell>
                </TableRow>
              );
            })}
            {/* ADD category */}
            {editable ? (
              <IconButton
                color="primary"
                aria-label="add new category"
                onClick={() => {
                  alert("Add new category");
                }}
              >
                <AddCircleOutlineIcon />
              </IconButton>
            ) : (
              <></>
            )}

            {/* ADD category */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
