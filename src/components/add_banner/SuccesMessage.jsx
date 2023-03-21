import { CardMedia } from "@mui/material";

const SuccessMessage = ({ image }) => (
  <>
    <CardMedia
      image={image}
      sx={{ width: "15%", height: "30px", borderRadius: "3px" }}
    />
    <span>Image removed successfully.</span>
  </>
);

export default SuccessMessage;
