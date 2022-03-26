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
  ReferenceLine,
} from "recharts";
import { meses } from "../../static/utils";

const dataMapper = (accounting) => {
  let result = [];

  let json_parsed = accounting.savings.monthly;
  let monthId = 0;
  for (var name in json_parsed) {
    result.push({
      name: meses[monthId].nombre.substr(0, 3),
      expenses: -accounting.expenses.annualTotals.monthly[name],
      income: accounting.income.annualTotals.monthly[name],
      savings: json_parsed[name],
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
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="income" barSize={20} fill="#82ca9d">
              {chartData.map((entry, index) => (
                <Cell key={"income_" + index} />
              ))}
            </Bar>
            <Bar dataKey="expenses" barSize={20} fill="#ed514e">
              {chartData.map((entry, index) => (
                <Cell key={"expenses_" + index} />
              ))}
            </Bar>
            <Line
              type="monotone"
              dataKey="savings"
              stroke="#8884d8"
              activeDot={{ r: 4 }}
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Paper>
    </>
  );
}
