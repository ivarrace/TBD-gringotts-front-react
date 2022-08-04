import Box from "@mui/material/Box";
import TotalsTable from "./TotalsTable";
import GroupsTable from "./GroupsTable";
import { GroupTypes } from "../../../static/utils";

export default function Summary({ accounting }) {
  return (
    <Box>
      <Box pt={3}>
        <TotalsTable accountingTotals={accounting.totals} />
      </Box>
      <Box pt={3}>
        <GroupsTable
          groupsData={accounting.income}
          groupType={GroupTypes.Income}
        />
      </Box>
      <Box pt={3}>
        <GroupsTable
          groupsData={accounting.expenses}
          groupType={GroupTypes.Expense}
        />
      </Box>
    </Box>
  );
}
