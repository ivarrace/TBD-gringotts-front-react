import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

// Generate Sales Data
function createData(month, amount) {
  return { month, amount };
}

function prepareData(data) {
  const result = [
    createData("Ene", data.monthly.JANUARY),
    createData("Feb", data.monthly.FEBRUARY),
    createData("Mar", data.monthly.MARCH),
    createData("Abr", data.monthly.APRIL),
    createData("May", data.monthly.MAY),
    createData("Jun", data.monthly.JUNE),
    createData("Jul", data.monthly.JULY),
    createData("Ago", data.monthly.AUGUST),
    createData("Sep", data.monthly.SEPTEMBER),
    createData("Oct", data.monthly.OCTOBER),
    createData("Nov", data.monthly.NOVEMBER),
    createData("Dec", data.monthly.DECEMBER),
  ];
  return result;
}

export default function AccountingSummaryChartBox({ data }) {
  const theme = useTheme();
  const chartData = prepareData(data);
  return (
    <Grid item xs={12} md={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        <ResponsiveContainer>
          <LineChart
            data={chartData}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24,
            }}
          >
            <XAxis
              dataKey="month"
              stroke={theme.palette.text.secondary}
              style={theme.typography.body2}
            />
            <YAxis
              stroke={theme.palette.text.secondary}
              style={theme.typography.body2}
            ></YAxis>
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="amount"
              stroke={theme.palette.primary.main}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        {/* IN PROGRESS... */}
      </Paper>
    </Grid>
  );
}
