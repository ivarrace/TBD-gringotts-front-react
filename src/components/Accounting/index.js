import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NotFound from "../static/NotFound";
import AccountingsService from "../../services/accountings.service";
import Summary from "./Summary";
import Report from "./Report";

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
          <Tab label="Resumen" />
          <Tab label="Gastos" />
          <Tab label="Ingresos" />
        </Tabs>
      </Box>

      <TabPanel value={actualTab} index={0}>
        <Summary data={accounting} />
      </TabPanel>
      <TabPanel value={actualTab} index={1}>
        <Report
          type="expenses"
          accounting={accounting}
          updateAccounting={setAccounting}
        />
      </TabPanel>
      <TabPanel value={actualTab} index={2}>
        <Report
          type="income"
          accounting={accounting}
          updateAccounting={setAccounting}
        />
      </TabPanel>
    </Box>
  );
}
