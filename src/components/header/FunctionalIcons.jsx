import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBasketProduct } from "../../redux/slices/basket-slice";
import { getFavoriteProducts } from "../../redux/slices/favorite-slice";
import { iconsData } from "../../utils/constants";
import FunctionalIconsItem from "./FunctionalIconsItem";

const FunctionalIcons = () => {
  const data = useSelector((state) => state.basket.data);
  const favorite = useSelector((state) => state.favorite.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasketProduct());
  }, []);

  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, []);

  return (
    <Box className="flex gap2 height flex-end pointer">
      {iconsData.map((icon) => (
        <Link key={icon.id} to={icon.title}>
          <FunctionalIconsItem
            {...icon}
            badgeContent={
              icon.title === "cart"
                ? data || []
                : icon.title === "favorite"
                ? favorite || []
                : []
            }
          />
        </Link>
      ))}
    </Box>
  );
};

export default FunctionalIcons;
