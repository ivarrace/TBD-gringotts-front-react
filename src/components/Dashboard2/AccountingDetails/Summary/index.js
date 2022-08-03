import Box from "@mui/material/Box";
import TotalsTable from "./TotalsTable";
import GroupsTable from "./GroupsTable";

export default function Summary({ accounting }) {
  return (
    <Box>
      <Box pt={3}>
        <TotalsTable accountingTotals={accounting.totals} />
      </Box>
      <Box pt={3}>
        <GroupsTable groupType="income" groupsData={accounting.income} />
      </Box>
      <Box pt={3}>
        <GroupsTable groupType="expenses" groupsData={accounting.expenses} />
      </Box>
    </Box>
  );
}
