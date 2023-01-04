import { Snackbar } from "@mui/material";

const PopUp = ({ handleClose, action, open }) => {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Товар добовлен в избранное!"
        action={action}
      />
    </>
  );
};

export default PopUp;
