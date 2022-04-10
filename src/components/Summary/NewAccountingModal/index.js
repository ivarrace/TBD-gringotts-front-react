import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountingsService from "../../../services/accountings.service";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxHeight: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  //"& .MuiTextField-root": { m: 1 },
};

//TODO accountingId groupId categoryId accountiong type
export default function NewAccountingModal({
  open,
  toggleModal,
  updateAccountingList,
}) {
  const [nameError, setnameError] = React.useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newName = data.get("name");
    if (newName === "") {
      setnameError(true);
    } else {
      const apiCall = async () => {
        const promise = await AccountingsService.add(newName);
        if (promise.status === 200) {
          updateAccountingList(promise.data);
        } else {
          console.error(promise);
        }
      };
      apiCall();
    }
  };

  return (
    <Modal
      //keepMounted
      open={open}
      onClose={toggleModal}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style} onSubmit={handleSubmit} component="form">
        <Typography sx={{ mb: 2 }} variant="h6" id="formTitle" component="div">
          New accounting
        </Typography>

        <TextField
          //required
          fullWidth
          id="name"
          label="Accounting name"
          name="name"
          required
          error={nameError}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          //disabled={state.loading}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
}
