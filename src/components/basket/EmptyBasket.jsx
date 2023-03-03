import { Box, styled, Typography } from "@mui/material";
import { ImageEmptyBasket } from "../../assets";
import Button from "../UI/button/Button";

const EmptyBasket = () => {
  return (
    <MainContainer>
      <img src={ImageEmptyBasket} alt="image" />
      <Typography className="first-text">Ваша корзина пуста</Typography>
      <Typography className="second-text">
        Но вы всегда можете ее наполнить
      </Typography>

      <StyledButton>К покупкам</StyledButton>
    </MainContainer>
  );
};

export default EmptyBasket;

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
    paddingTop: "5px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "18px",
    color: theme.palette.primary.main,
  },
}));
