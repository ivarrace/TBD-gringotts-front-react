import * as React from "react";
import { presupuesto } from "../static/MockData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ConfiguracionGrupo from "./ConfiguracionGrupo";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";

export default function Configuracion() {
  const [grupos, setGrupos] = React.useState(presupuesto.gastos.grupos);
  const [inputName, setInputName] = React.useState("");
  const [inputError, setInputError] = React.useState("");

  const handleInputNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleAddGrupo = () => {
    if (inputName === "") {
      setInputError("Empty field");
    } else {
      let categoria = { id: Date.now(), name: "Otros" };
      let newGrupo = {
        id: Date.now(),
        name: inputName,
        categorias: [categoria],
      };
      setGrupos([...grupos, newGrupo]);
      resetInputName();
    }
  };

  //TODO change to hook
  const resetInputName = () => {
    setInputName("");
    setInputError("");
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tipo</TableCell>
            <TableCell>Grupo</TableCell>
            <TableCell>Categoria</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {grupos.map((grupo) => {
            return <ConfiguracionGrupo grupo={grupo} key={grupo.id} />;
          })}
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <TextField
                error={inputError !== ""}
                helperText={inputError}
                size="small"
                id="outlined-basic"
                label="Nuevo grupo"
                variant="outlined"
                value={inputName}
                onChange={handleInputNameChange}
              />
              <IconButton
                color={inputError !== "" ? "error" : "primary"}
                aria-label="upload picture"
                component="span"
                onClick={handleAddGrupo}
              >
                <SaveIcon />
              </IconButton>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
