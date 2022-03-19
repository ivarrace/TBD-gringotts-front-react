import { Paper } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  ComposedChart,
  Cell,
} from "recharts";
import { meses } from "../static/utils";

const dataMapper = (presupuesto) => {
  let result = [];
  meses.map((mes) => {
    result.push({
      name: mes.nombre.substr(0, 3),
      gastado: presupuesto.gastos.totales.mensual[mes.id - 1].cantidad,
      ingresado: presupuesto.ingresos.totales.mensual[mes.id - 1].cantidad,
      ahorro: presupuesto.ahorro.mensual[mes.id - 1].cantidad,
    });
  });
  return result;
};

export default function ResumenChart({ presupuesto }) {
  const data = dataMapper(presupuesto);

  return (
    <>
      <Paper>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ingresado" stroke="#82ca9d" />
            <Line type="monotone" dataKey="gastado" stroke="#8884d8" />
            <Bar dataKey="ahorro" barSize={20} fill="#413ea0">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  //stroke={entry.ahorro > 0 ? "green" : "red"}
                  // cambiar el 75 por 0
                  //strokeWidth={index === 2 ? 4 : 1}
                  fill={entry.ahorro > 75 ? "green" : "red"}
                />
              ))}
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </Paper>
    </>
  );
}
