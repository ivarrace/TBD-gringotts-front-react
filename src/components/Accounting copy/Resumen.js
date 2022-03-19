import ResumenChart from "./ResumenChart";
import ResumenTableTotales from "./ResumenTableTotales";
import ResumenTableIngresos from "./ResumenTableIngresos";
import ResumenTableGastos from "./ResumenTableGastos";
import Box from "@mui/material/Box";

import { presupuesto } from "../static/MockData";

export default function Resumen() {
  return (
    <Box>
      <Box pt={3}>
        <ResumenChart presupuesto={presupuesto} />
      </Box>
      <Box pt={3}>
        <ResumenTableTotales presupuesto={presupuesto} />
      </Box>
      <Box pt={3}>
        <ResumenTableIngresos presupuesto={presupuesto} />
      </Box>
      <Box pt={3}>
        <ResumenTableGastos presupuesto={presupuesto} />
      </Box>
    </Box>
  );
}
