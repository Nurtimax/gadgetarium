import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBasketProduct } from "../../redux/slices/basket-slice";
import { iconsData } from "../../utils/constants";
import FunctionalIconsItem from "./FunctionalIconsItem";

const FunctionalIcons = () => {
  const data = useSelector((state) => state.basket.data);
  const { data: auth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    Object.keys(auth).length === 0 ? "" : dispatch(getBasketProduct());
  }, []);

  return (
    <Box className="flex gap2 height flex-end pointer">
      {iconsData.map((icon) => (
        <Link key={icon.id} to={icon.title}>
          <FunctionalIconsItem
            {...icon}
            badgeContent={icon.title === "cart" ? data || [] : []}
          />
        </Link>
      ))}
    </Box>
  );
};

export default FunctionalIcons;
