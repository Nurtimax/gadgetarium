import { Box, Container, styled, Typography } from "@mui/material";
import { IconClear } from "../../assets";

const Favorite = () => {
  return (
    <StyledContainer>
      <Typography className="title">Избранное</Typography>

      <Typography className="clearText">
        <IconClear />
        Очистить список товаров
      </Typography>

      <Box className="container-favorite"></Box>
    </StyledContainer>
  );
};

export default Favorite;

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#f4f4f4",

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
    gap: "5px",
    alignItems: "center",
    cursor: "pointer",
  },
}));
