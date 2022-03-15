import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

import { presupuesto } from "../static/MockData";

export default function Configuracion() {
  const [grupos, setGrupos] = React.useState(presupuesto.gastos.grupos);

  const handleAddGrupo = () => {
    let newGrupo = { id: "test", name: "new-grupo", categorias: [] };
    setGrupos([...grupos, newGrupo]);
  };

  const handleAddCategoria = (grupo) => {};

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="div"
      >
        {grupos.map((grupo) => {
          return (
            <>
              <ListItem key={grupo.id} disablePadding>
                <ListItem role={undefined}>
                  <ListItemText primary={grupo.name} />
                </ListItem>
              </ListItem>
              <List component="div" disablePadding>
                {grupo.categorias.map((categoria) => {
                  return (
                    <ListItem sx={{ pl: 4 }} key={categoria.id}>
                      <ListItemText primary={categoria.name} />
                    </ListItem>
                  );
                })}
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={handleAddCategoria(grupo)}
                  key={"add-categoria-" + grupo.id}
                >
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Añadir categoria" />
                </ListItemButton>
              </List>
              <Divider />
            </>
          );
        })}
        <ListItemButton onClick={handleAddGrupo} key="add-grupo">
          <ListItemText primary="Añadir grupo" />
        </ListItemButton>
      </List>
    </>
  );
}
