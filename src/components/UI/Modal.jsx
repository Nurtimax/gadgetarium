import { Dialog, DialogContent, styled } from "@mui/material";
import Icon from "../../assets/icons/closeIcon.png";

const Modal = ({ children, open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <ContainerIcon>
        <img src={Icon} alt="closeIcon" />
      </ContainerIcon>
      <ContainerModal>{children}</ContainerModal>
    </Dialog>
  );
};

export default Modal;

const ContainerModal = styled(DialogContent)(() => ({
  background: "#FFFFFF",
  boxShadow: "0px 10px 30px rgba(133, 143, 164, 0.1)",
  borderRadius: "4px",
}));

const ContainerIcon = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  padding: "15px 15px 0 0",
}));
