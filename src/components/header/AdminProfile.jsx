import {
  Avatar,
  Box,
  Divider,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "../UI/button/Button";

const AdminProfile = () => {
  return (
    <Box className="flex gap2 between">
      <ButtonStyled>Создать рассылку</ButtonStyled>
      <Divider flexItem orientation="vertical" variant="middle" color="white" />
      <AvatarStyled>G</AvatarStyled>
      <Box className="flex color-white pointer">
        <Typography component="div" variant="body2">
          Администратор
        </Typography>
        <IconButton color="inherit">
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AdminProfile;

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.secondary.main,
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "26px",
  lineHeight: "31px",
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: "white !important",
  borderRadius: "46px",
  fontWeight: 700,
  fontSize: 16,
  padding: "10px 15px",
  width: "190px",
}));
