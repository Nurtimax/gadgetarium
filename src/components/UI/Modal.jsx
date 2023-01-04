import { Dialog, DialogContent } from "@mui/material";

const Modal = ({ children, open, handleClose }) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
