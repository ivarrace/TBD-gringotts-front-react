import Box from "@mui/material/Box";
import TotalsTable from "./TotalsTable";
import GroupsTable from "./GroupsTable";
import SummaryChart from "./SummaryChart";

export default function Summary({ data }) {
  return (
    <Box>
      <Box pt={3}>
        <SummaryChart data={data} />
      </Box>
      <Box pt={3}>
        <TotalsTable data={data} />
      </Box>
      <Box pt={3}>
        <GroupsTable groupsName="Ingresos" groupsData={data.income} />
      </Box>
      <Box pt={3}>
        <GroupsTable groupsName="Gastos" groupsData={data.expenses} />
      </Box>
    </Box>
  );
}
