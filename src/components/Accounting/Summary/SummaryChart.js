import { Paper } from "@mui/material";
import {
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
import { meses } from "../../static/utils";

const dataMapper = (accounting) => {
  let result = [];

  let json_parsed = accounting.savings.monthly;
  let monthId = 0;
  for (var name in json_parsed) {
    result.push({
      name: meses[monthId].nombre.substr(0, 3),
      gastado: accounting.expenses.annualTotals.monthly[name],
      ingresado: accounting.income.annualTotals.monthly[name],
      ahorro: json_parsed[name],
    });
    monthId++;
  }
  return result;
};

export default function ResumenChart({ data }) {
  const chartData = dataMapper(data);

  return (
    <>
      <Paper>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ingresado" stroke="#82ca9d" />
            <Line type="monotone" dataKey="gastado" stroke="#8884d8" />
            <Bar dataKey="ahorro" barSize={20} fill="#413ea0">
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  //stroke={entry.ahorro > 0 ? "green" : "red"}
                  // cambiar el 75 por 0
                  //strokeWidth={index === 2 ? 4 : 1}
                  fill={entry.ahorro > 0 ? "green" : "red"}
                />
              ))}
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </Paper>
    </>
  );
}
