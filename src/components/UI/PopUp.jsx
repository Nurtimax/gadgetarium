import { styled } from "@mui/material";
import { useEffect } from "react";
import Icon from "../../assets/icons/iconClose.png";
const PopUp = ({ handleClose, transitionHandler, added, transition }) => {
  useEffect(() => {
    const time = setTimeout(() => {
      handleClose();
    }, 4000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <>
      <Container>
        <Added>{added}</Added>
        <Transition onClick={transitionHandler}>{transition}</Transition>
        <IconClose src={Icon} alt="Icon" onClick={handleClose} />
      </Container>
    </>
  );
};

export default PopUp;

//Style

const Container = styled("div")(() => ({
  width: "470px",
  height: "45px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 18px",
  gap: "36px",
  background: "#202027",
  borderRadius: "4px",
  position: "absolute",
  animationName: "popUp",
  animationDuration: "infinity",

  "@keyframes popUp": {
    "0%": {
      top: 0,
      right: 0,
    },
    "100%": {
      right: "30%",
    },
  },
}));

const Added = styled("div")(() => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontSize: "18px",
  lineHeight: "140%",
  textAlign: "center",
  color: "white",
  flex: "none",
  order: "0",
  flexGrow: "0",
}));

const Transition = styled("div")(() => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "130%",
  color: "#3cde14",
  flex: "none",
  flexGrow: "0",
}));

const IconClose = styled("img")(() => ({
  width: "12px",
  height: "12px",
}));
