import { styled } from "@mui/material";
import Modal from "../Modal";
const SuccessFeedback = ({ open, onClose }) => {
  return (
    <Styled open={open} handleClose={onClose}>
      <Styled_Container>d,jkb</Styled_Container>
    </Styled>
  );
};
export default SuccessFeedback;
const Styled = styled(Modal)(() => ({
  width: "100%",
  height: "100%",
}));
const Styled_Container = styled("form")(() => ({
  width: "450px",
  height: "130px",
  display: "grid",
}));
