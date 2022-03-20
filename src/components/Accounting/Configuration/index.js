import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GroupConfiguration from "./GroupConfiguration";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";

export default function Configuration({ accounting }) {
  const [expensesGroups, setExpensesGroups] = React.useState(
    accounting.expenses.groups
  );
  const [incomeGroups, setIncomeGroups] = React.useState(
    accounting.income.groups
  );
  const [inputName, setInputName] = React.useState("");
  const [inputError, setInputError] = React.useState("");

  const handleInputNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleAddExpensesGrupo = () => {
    if (inputName === "") {
      setInputError("Empty field");
    } else {
      let categoria = { id: Date.now(), name: "Otros" };
      let newGrupo = {
        id: Date.now(),
        name: inputName,
        categorias: [categoria],
      };
      setExpensesGroups([...expensesGroups, newGrupo]);
      resetInputName();
    }
  };

  const handleAddIncomeGrupo = () => {
    if (inputName === "") {
      setInputError("Empty field");
    } else {
      let categoria = { id: Date.now(), name: "Otros" };
      let newGrupo = {
        id: Date.now(),
        name: inputName,
        categorias: [categoria],
      };
      setIncomeGroups([...incomeGroups, newGrupo]);
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
            <TableCell>
              <b>Gastos</b>
            </TableCell>
            <TableCell>Grupo</TableCell>
            <TableCell>Categoria</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expensesGroups.map((group) => {
            return <GroupConfiguration group={group} key={group.id} />;
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
                onClick={handleAddExpensesGrupo}
              >
                <SaveIcon />
              </IconButton>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Ingresos</b>
            </TableCell>
            <TableCell>Grupo</TableCell>
            <TableCell>Categoria</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incomeGroups.map((group) => {
            return <GroupConfiguration group={group} key={group.id} />;
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
                onClick={handleAddIncomeGrupo}
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
