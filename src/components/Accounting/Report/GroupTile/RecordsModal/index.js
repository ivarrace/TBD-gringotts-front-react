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

export default function RecordsModal({ open, toggleModal, selected }) {
  //FIXME
  /*const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];*/
  /*function getMonthRecords() {
    let result = [];
    selected.category.records.forEach((record) => {
      const date = new Date(record.date);
      const recordMonth = months[date.getMonth()].toUpperCase();
      if (recordMonth === selected.month.id) {
        result.push(record);
      }
    });
    return result;
  }*/

  ///test
  const [records, setRecords] = React.useState(selected.category.records);

  const [newDate, setNewDate] = React.useState("01/01/1970");
  const [validDate, setValidDate] = React.useState(true);
  function handleDateChange(value) {
    let date = moment(value, "DD/MM/YYYY", true);
    console.log("date change: " + date.format("DD/MM/YYYY"));
    setValidDate(date.isValid());
    setNewDate(date.format("DD/MM/YYYY"));
  }

  const [newAmount, setNewAmount] = React.useState(1);
  const [validAmount, setValidAmount] = React.useState(true);
  function handleAmountChange(value) {
    console.log("amount change: " + value);
    setValidAmount(!isNaN(value) && value > 0);
    setNewAmount(value);
  }

  const [info, setInfo] = React.useState();

  function saveNewRecord() {
    if (!validDate || !validAmount) return;
    const newGasto = {
      id: Math.random() * (99999 - 7) + 7,
      info: info,
      date: newDate,
      amount: newAmount,
    };
    console.log(newGasto);
    setRecords([newGasto, ...records]);
  }
  return (
    <Modal
      keepMounted
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
            helperText={validDate ? "" : "Expected format: DD/MM/YYYY"}
            id="new-date"
            label="Date"
            onChange={(event) => {
              handleDateChange(event.target.value);
            }}
            defaultValue={newDate}
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
          <Button variant="text" color="primary" onClick={saveNewRecord}>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {records.map((record) => (
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
}
