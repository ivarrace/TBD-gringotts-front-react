import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Configuracion from "./Configuracion";
import Gastos from "./Gastos";
import Ingresos from "./Ingresos";
import Resumen from "./Resumen";
import NotFound from "../static/NotFound";
import AccountingsService from "../../services/accountings.service";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Accounting({ id }) {
  const [accounting, setAccounting] = React.useState();
  const [actualTab, setActualTab] = React.useState(0);

  const changeTabHandle = (event, newTabIndex) => {
    setActualTab(newTabIndex);
  };

  React.useEffect(() => {
    const apiCall = async () => {
      const promise = await AccountingsService.getById(id);
      setAccounting(promise.data);
    };
    apiCall();
  }, [id]);
  if (!accounting) {
    return <NotFound />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={actualTab}
          onChange={changeTabHandle}
          aria-label="basic tabs example"
        >
          <Tab label="Configuracion" />
          <Tab label="Gastos" />
          <Tab label="Ingresos" />
          <Tab label="Resumen" />
        </Tabs>
      </Box>
      <TabPanel value={actualTab} index={0}>
        <Configuracion />
      </TabPanel>
      <TabPanel value={actualTab} index={1}>
        <Gastos />
      </TabPanel>
      <TabPanel value={actualTab} index={2}>
        <Ingresos />
      </TabPanel>
      <TabPanel value={actualTab} index={3}>
        <Resumen />
      </TabPanel>
    </Box>
  );
}
