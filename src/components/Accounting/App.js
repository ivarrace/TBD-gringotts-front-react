import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Configuracion from "./Configuracion";
import Gastos from "./Gastos";
import Ingresos from "./Ingresos";
import Resumen from "./Resumen";

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Configuracion" {...a11yProps(0)} />
          <Tab label="Gastos" {...a11yProps(1)} />
          <Tab label="Ingresos" {...a11yProps(2)} />
          <Tab label="Resumen" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Configuracion />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Gastos />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Ingresos />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Resumen />
      </TabPanel>
    </Box>
  );
}
