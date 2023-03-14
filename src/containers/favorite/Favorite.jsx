import { Box, Container, styled, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconClear } from "../../assets";
import EmptyFavorite from "../../components/favorite/EmptyFavorite";
import GadgetariumSpinnerLoading from "../../components/GadgetariumSpinnerLoading";
import Button from "../../components/UI/button/Button";
import ProductCard from "../../components/UI/card/ProductCard";
import { getFavoriteProducts } from "../../redux/slices/favorite-slice";

const Favorite = () => {
  const { data, isLoading } = useSelector((state) => state.favorite);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, []);

  return (
    <>
      {isLoading ? (
        <GadgetariumSpinnerLoading />
      ) : (
        <>
          {data?.length > 0 ? (
            <StyledContainer>
              <Typography className="title">Избранное</Typography>

              <Typography className="clearText">
                <IconClear />
                Очистить список товаров
              </Typography>

              <Box className="container-favorite">
                {data?.map((product, i) => (
                  <ProductCard key={i} {...product} />
                ))}
              </Box>

              <Box className="button">
                <Link to="/">
                  <Button width="213px" height="44px" variant="outlined">
                    Продолжить покупки
                  </Button>
                </Link>
              </Box>
            </StyledContainer>
          ) : (
            <EmptyFavorite />
          )}
        </>
      )}
    </>
  );
};

export default Favorite;

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#f4f4f4",
  paddingBottom: "119px",

  "& .title": {
    fontFamily: "Ubuntu",
    fontWeight: "500",
    fontSize: "30px",
    borderBottom: `1px solid ${theme.palette.grey[600]}`,
    paddingBottom: "20px",
    marginBottom: "40px",
  },

  "& .clearText": {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "14px",
    display: "flex",
    gap: "6px",
    alignItems: "center",
    cursor: "pointer",
  },

  "& .container-favorite": {
    paddingTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  "& .button": {
    paddingTop: "42px",
    textAlign: "center",
  },
}));
