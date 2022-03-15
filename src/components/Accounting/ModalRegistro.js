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
import { gastos } from "../static/MockData";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

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

export default function ModalRegistro({ open, toggleModal, selected }) {
  // API CALL -> detalles mocimientos
  if (selected != null) {
    console.log(
      "Actualizar registros del mes [" +
        selected.movimientoOverview.mes +
        "] en la categoria [" +
        selected.idCategoria +
        "]. Total actual: " +
        selected.movimientoOverview.cantidad
    );
  }
  ///test
  const [detalleGastos, setDetalleGastos] = React.useState(gastos);
  const [fecha, setFecha] = React.useState();
  const [cantidad, setCantidad] = React.useState(0);
  const [info, setInfo] = React.useState();
  function saveNewRecord() {
    const newGasto = {
      id: Math.random() * (99999 - 7) + 7,
      info: info,
      fecha: fecha,
      cantidad: cantidad,
    };
    console.log(newGasto);
    setDetalleGastos({
      ...detalleGastos,
      registros: [newGasto, ...detalleGastos.registros],
    });
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
            id="new-cantidad"
            label="Cantidad"
            onChange={(event) => {
              setCantidad(event.target.value);
            }}
          />
          <TextField
            id="new-fecha"
            label="Fecha"
            onChange={(event) => {
              setFecha(event.target.value);
            }}
          />
          <TextField
            id="new-info"
            label="Info"
            onChange={(event) => {
              setInfo(event.target.value);
            }}
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
        <TableContainer component={Paper}>
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
              {detalleGastos.registros.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:nth-of-type(even)": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  <TableCell>{row.cantidad}</TableCell>
                  <TableCell>{row.fecha}</TableCell>
                  <TableCell>{row.info}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
}
