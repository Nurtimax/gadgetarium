import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { iconsData } from "../../utils/constants";
import FunctionalIconsItem from "./FunctionalIconsItem";

const FunctionalIcons = () => {
  const data = useSelector((state) => state.basket.data);
  const favorite = useSelector((state) => state.favorite.data);

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
