import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ImageEmptyCompare } from "../../assets";
import Button from "../UI/button/Button";

const EmptyCompore = () => {
  return (
    <MainContainer>
      <img src={ImageEmptyCompare} alt="image" />
      <Typography className="first-text">Сравнивать пока нечего</Typography>
      <Typography className="second-text">
        Добавляйте сюда товары, чтобы сравнить их характеристики. <br />
        Так выбрать станет проще!
      </Typography>

      <Link to="/">
        <StyledButton>К покупкам</StyledButton>
      </Link>
    </MainContainer>
  );
};

export default EmptyCompore;

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
    // width: "555px",
    display: "flex",
    justifyContent: "center",
    paddingTop: "5px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "18px",
    color: theme.palette.primary.main,
  },
}));
