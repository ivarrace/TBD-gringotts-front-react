import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
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
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import Link from "@mui/material/Link";
import { monthsShort } from "../../static/calendarUtils";
import { useNavigate } from "react-router-dom";

const dataMapper = (accounting) => {
  let result = [];
  let json_parsed = accounting.summary ? accounting.summary.monthly : [];

  monthsShort.forEach(function (value, index) {
    let actualDataIndex = json_parsed.findIndex(
      (element) => element.month === index + 1
    );
    result.push({
      name: value,
      expenses:
        actualDataIndex >= 0 ? -json_parsed[actualDataIndex].expenses : 0,
      income: actualDataIndex >= 0 ? json_parsed[actualDataIndex].income : 0,
      savings: actualDataIndex >= 0 ? json_parsed[actualDataIndex].savings : 0,
    });
  });
  return result;
};

export default function AccountingListItem({ accounting, toggleForm }) {
  const navigate = useNavigate();
  const chartData = dataMapper(accounting);
  return (
    <Paper
      sx={{
        p: 2,
        mb: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
        <Link underline="none" onClick={() => navigate(accounting.id)}>
          {accounting.name}
        </Link>
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
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
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() => toggleForm(accounting)}
          >
            Edit
          </Button>
        </ButtonGroup>
      </Box>
    </Paper>
  );
}
