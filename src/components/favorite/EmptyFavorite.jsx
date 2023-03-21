import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ImageEmptyFavorite } from "../../assets";
import Button from "../UI/button/Button";

const EmptyFavorite = () => {
  return (
    <MainContainer>
      <img src={ImageEmptyFavorite} alt="image" />
      <Typography className="first-text">В избранном пока пусто</Typography>
      <Typography className="second-text">
        Воспользуйтесь поиском или каталогом,
        <br /> выберите нужные товары и добавьте их в избранное!
      </Typography>

      <Link to="/">
        <StyledButton>К покупкам</StyledButton>
      </Link>
    </MainContainer>
  );
};

export default EmptyFavorite;

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  backgroundColor: theme.palette.secondary.main,
  color: "white !important",
  width: "140px",
}));

const MainContainer = styled(Box)(({ theme }) => ({
  padding: "120px 0",
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
