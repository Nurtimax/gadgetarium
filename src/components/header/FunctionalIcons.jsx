import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { iconsData } from "../../utils/constants";
import FunctionalIconsItem from "./FunctionalIconsItem";

const FunctionalIcons = () => {
  return (
    <Box className="flex gap2 height flex-end pointer">
      {iconsData.map((icon) => (
        <Link key={icon.id} to={icon.title}>
          <FunctionalIconsItem {...icon} />
        </Link>
      ))}
    </Box>
  );
};

export default FunctionalIcons;
