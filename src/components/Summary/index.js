import * as React from "react";
import Container from "@mui/material/Container";
import AccountingSummary from "./AccountingSummary";
import Grid from "@mui/material/Grid";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import NewAccountingModal from "./NewAccountingModal";

export default function Summary({ accountingList, setAccountingList }) {
  const [openModal, setOpenModal] = React.useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  const addAccounting = () => {
    toggleModal();
  };

  const updateAccountingList = (newAccounting) => {
    setAccountingList([...accountingList, newAccounting]);
    toggleModal();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container sx={{ mb: 3 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={addAccounting}
          >
            Add accounting
          </Button>
        </Grid>
        <NewAccountingModal
          open={openModal}
          toggleModal={toggleModal}
          updateAccountingList={updateAccountingList}
        />
      </Grid>
      <Grid container spacing={3}>
        {/* Accountings */}
        {accountingList.map((accountungSummary) => {
          return (
            <AccountingSummary
              key={accountungSummary.id}
              data={accountungSummary}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
