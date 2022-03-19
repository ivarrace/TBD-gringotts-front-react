import ResumenChart from "./ResumenChart";
import ResumenTableTotales from "./ResumenTableTotales";
import ResumenTableIngresos from "./ResumenTableIngresos";
import ResumenTableGastos from "./ResumenTableGastos";
import Box from "@mui/material/Box";

import { presupuestoMock } from "../static/MockData";

export default function Resumen() {
  return (
    <Box>
      <Box pt={3}>
        <ResumenChart presupuesto={presupuestoMock} />
      </Box>
      <Box pt={3}>
        <ResumenTableTotales presupuesto={presupuestoMock} />
      </Box>
      <Box pt={3}>
        <ResumenTableIngresos presupuesto={presupuestoMock} />
      </Box>
      <Box pt={3}>
        <ResumenTableGastos presupuesto={presupuestoMock} />
      </Box>
    </Box>
  );
}
