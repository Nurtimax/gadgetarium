import { Snackbar, styled } from "@mui/material";
import iconClose from "../../assets/icons/iconClose.png";

const PopUp = ({
  vertical,
  horizontal,
  open,
  handleClose,
  addedTitle,
  transitionTitle,
  durationSnackbar,
}) => {
  const snackbar = (
    <Box>
      <AddedTitleStyle>{addedTitle}</AddedTitleStyle>
      <TransitionTitleStyle>{transitionTitle}</TransitionTitleStyle>
      <IconCloseBtn src={iconClose} alt="icon" />
    </Box>
  );

  return (
    <Container
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={durationSnackbar}
      open={open}
      onClose={handleClose}
      message={snackbar}
      key={vertical + horizontal}
      classes={{ root: "snackbar", anchorOriginTopRight: "test" }}
    />
  );
};

export default PopUp;

///Style

const Container = styled(Snackbar)(() => ({
  "& .MuiPaper-root": {
    background: "#202027",
  },
}));

const Box = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "36px",
  borderRadius: "4px",
}));

const AddedTitleStyle = styled("div")(() => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "140%",
  texAlign: "center",
  color: "#fffff",
}));

const TransitionTitleStyle = styled("div")(() => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "130%",
  color: "#3CDE14",
}));

const IconCloseBtn = styled("img")(() => ({
  width: "12px",
  height: "12px",
  // background: "#858FA4",
}));
