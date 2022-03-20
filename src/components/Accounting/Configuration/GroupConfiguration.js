import * as React from "react";
import CategoryConfiguration from "./CategoryConfiguration";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";

export default function ConfiguracionGrupo({ group }) {
  const [categorias, setCategorias] = React.useState(group.categories);
  const [inputName, setInputName] = React.useState("");
  const [inputError, setInputError] = React.useState("");

  const handleInputNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleAddCategoria = () => {
    if (inputName === "") {
      setInputError("Empty field");
    } else {
      let newCategoria = { id: Date.now(), name: inputName };
      setCategorias([...categorias, newCategoria]);
      resetInputName();
    }
  };

  //TODO change to hook
  const resetInputName = () => {
    setInputName("");
    setInputError("");
  };

  return (
    <>
      {categorias.map((category) => {
        return (
          <CategoryConfiguration
            category={category}
            group={group}
            key={category.id}
          />
        );
      })}
      <TableRow>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell>
          <TextField
            error={inputError !== ""}
            helperText={inputError}
            size="small"
            id="outlined-basic"
            label="Nueva categoria"
            variant="outlined"
            value={inputName}
            onChange={handleInputNameChange}
          />
          <IconButton
            color={inputError !== "" ? "error" : "primary"}
            aria-label="upload picture"
            component="span"
            onClick={handleAddCategoria}
          >
            <SaveIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}
