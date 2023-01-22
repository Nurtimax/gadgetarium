import { Box } from "@mui/material";
import { iconsData } from "../../utils/constants";
import FunctionalIconsItem from "./FunctionalIconsItem";

const FunctionalIcons = () => {
  return (
    <Box className="flex gap2 height flex-end pointer">
      {iconsData.map((icon) => (
        <FunctionalIconsItem key={icon.id} {...icon} />
      ))}
    </Box>
  );
};

export default FunctionalIcons;
