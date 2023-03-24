import { Snackbar, styled } from "@mui/material";
import { Link } from "react-router-dom";
import iconClose from "../../assets/icons/iconClose.png";

const PopUp = ({
  vertical = "top",
  horizontal = "right",
  open,
  handleClose,
  addedTitle,
  transitionTitle,
  durationSnackbar,
  transition,
  to,
  icon = false,
}) => {
  const snackbar = (
    <Box>
      <AddedTitleStyle>{addedTitle}</AddedTitleStyle>
      <TransitionTitleStyle onClick={transition}>
        <Link to={to}>{transitionTitle}</Link>
      </TransitionTitleStyle>
      {icon && (
        <IconCloseBtn src={iconClose} alt="icon" onClick={handleClose} />
      )}
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
    marginTop: "90px",
    background: "#202027",
  },
}));

const Box = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "36px",
  borderRadius: "4px",
  width: "100%",
  justifyContent: "space-between",
}));

const AddedTitleStyle = styled("div")(({ theme }) => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "140%",
  texAlign: "center",
  color: theme.palette.secondary.contrastText,
}));

const TransitionTitleStyle = styled("div")(({ theme }) => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "130%",
  color: theme.palette.success.light,
  cursor: "pointer",
}));

const IconCloseBtn = styled("img")(() => ({
  width: "12px",
  height: "12px",
  cursor: "pointer",
}));
