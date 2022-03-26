import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
//import { gastos } from "../../static/MockData";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import * as moment from "moment";
import AccountingsService from "../../../../../services/accountings.service";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxHeight: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  //"& .MuiTextField-root": { m: 1 },
};

//TODO accountingId groupId categoryId accountiong type
export default function RecordsModal({
  open,
  toggleModal,
  updateAccounting,
  accounting,
  type,
  groupId,
  categoryId,
  defaultDate,
}) {
  const allRecords =
    type === "expenses"
      ? accounting.expenses.groups
          .find((g) => g.id === groupId)
          .categories.find((c) => c.id === categoryId).records
      : accounting.income.groups
          .find((g) => g.id === groupId)
          .categories.find((c) => c.id === categoryId).records;

  const [newDate, setNewDate] = React.useState(defaultDate);
  const [validDate, setValidDate] = React.useState(true);
  function handleDateChange(value) {
    let date = moment(value, "YYYY-MM-DD", true);
    setValidDate(date.isValid());
    setNewDate(date.format("YYYY-MM-DD"));
  }

  const [newAmount, setNewAmount] = React.useState(1);
  const [validAmount, setValidAmount] = React.useState(true);
  function handleAmountChange(value) {
    setValidAmount(!isNaN(value) && value > 0);
    setNewAmount(value);
  }

  const [info, setInfo] = React.useState();

  function addRecord() {
    if (!validDate || !validAmount) return;
    const newRecord = {
      info: info ? info : "",
      date: newDate,
      amount: newAmount,
    };
    const apiCall = async () => {
      const promise = await AccountingsService.addRecord(
        type,
        accounting.id,
        groupId,
        categoryId,
        newRecord
      );
      if (promise.status === 200) {
        updateAccounting(promise.data);
      } else {
        console.error(promise);
      }
    };
    apiCall();
  }

  const deleteRecord = (recordId) => {
    const apiCall = async () => {
      const promise = await AccountingsService.deleteRecord(
        type,
        accounting.id,
        groupId,
        categoryId,
        recordId
      );
      if (promise.status === 200) {
        updateAccounting(promise.data);
      } else {
        console.error(promise);
      }
    };
    apiCall();
  };

  function filterRecordsBySelectedMonth() {
    let result = [];
    allRecords.map((record) => {
      if (
        moment(record.date, "YYYY-MM-DD").format("MMMM").toLowerCase() ===
        moment(defaultDate, "YYYY-MM-DD").format("MMMM").toLowerCase()
      ) {
        result.push(record);
      }
    });
    return result;
  }
  return (
    <Modal
      //keepMounted
      open={open}
      onClose={toggleModal}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Toolbar>
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="formTitle"
            component="div"
          >
            Nuevo
          </Typography>
        </Toolbar>
        <Stack direction="row" spacing={2}>
          <TextField
            required
            error={!validAmount}
            helperText={validAmount ? "" : "Incorrect entry."}
            id="new-amount"
            label="Amount"
            onChange={(event) => {
              handleAmountChange(event.target.value);
            }}
            defaultValue={newAmount}
            variant="standard"
          />
          <TextField
            required
            error={!validDate}
            helperText={validDate ? "" : "Expected format: YYYY-MM-DD"}
            id="new-date"
            label="Date"
            onChange={(event) => {
              handleDateChange(event.target.value);
            }}
            defaultValue={defaultDate}
            variant="standard"
          />
          <TextField
            id="new-info"
            label="Info"
            onChange={(event) => {
              setInfo(event.target.value);
            }}
            variant="standard"
          />
          <Button variant="text" color="primary" onClick={addRecord}>
            <SaveIcon />
          </Button>
        </Stack>

        <Toolbar>
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Historial
          </Typography>
        </Toolbar>
        <TableContainer component={Paper} sx={{ maxHeight: 250 }}>
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "primary.light",
                }}
              >
                <TableCell>Cantidad</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Info</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterRecordsBySelectedMonth().map((record) => (
                <TableRow
                  key={record.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:nth-of-type(even)": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  <TableCell>{record.amount}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.info}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="Edit group"
                      color="secondary"
                      onClick={() => deleteRecord(record.id)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
}
