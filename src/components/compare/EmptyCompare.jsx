import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ImageEmptyCompare } from "../../assets";
import Button from "../UI/button/Button";

const EmptyCompare = ({ mainTitle, text, buttonText }) => {
  return (
    <MainContainer>
      <img src={ImageEmptyCompare} alt="image" />
      <Typography className="first-text">{mainTitle}</Typography>
      <Typography className="second-text">{text}</Typography>

      <Link to="/">
        <StyledButton>{buttonText}</StyledButton>
      </Link>
    </MainContainer>
  );
};

export default EmptyCompare;

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  backgroundColor: theme.palette.secondary.main,
  color: "white !important",
  width: "140px",
}));

const MainContainer = styled(Box)(({ theme }) => ({
  paddingTop: "120px",
  textAlign: "center",

  "& .first-text": {
    paddingTop: "5px",
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "24px",
    color: theme.palette.primary.main,
  },
  "& .second-text": {
    display: "flex",
    justifyContent: "center",
    paddingTop: "5px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "18px",
    color: theme.palette.primary.main,
  },
}));
