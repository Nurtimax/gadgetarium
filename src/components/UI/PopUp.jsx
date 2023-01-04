import { Snackbar } from "@mui/material";

const PopUp = ({ handleClose, action, open, duration, title }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
      message={title}
      action={action}
    />
  );
};

export default PopUp;
