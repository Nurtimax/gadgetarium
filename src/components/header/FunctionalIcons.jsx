import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { iconsData } from "../../utils/constants";
import FunctionalIconsItem from "./FunctionalIconsItem";

const FunctionalIcons = () => {
  const data = useSelector((state) => state.basket.data);
  const favorite = useSelector((state) => state.favorite.data);
  const { compare } = useSelector((state) => state.compareProducts);

  return (
    <Box className="flex gap2 height flex-end pointer">
      {iconsData.map((icon) => (
        <FunctionalIconsItem
          key={icon.id}
          {...icon}
          badgeContent={
            icon.title === "cart"
              ? data || []
              : icon.title === "favorite"
              ? favorite || []
              : icon.title === "comporative"
              ? compare || []
              : []
          }
        />
      ))}
    </Box>
  );
};

export default FunctionalIcons;
