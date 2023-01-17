import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const AdminProfile = () => {
  return (
    <Box className="flex gap between">
      <Box>
        <ButtonStyled className="createlink">Создать рассылку</ButtonStyled>
      </Box>
      <Divider flexItem orientation="vertical" variant="middle" color="white" />
      <Box>
        <AvatarStyled>G</AvatarStyled>
      </Box>
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
  color: "white",
  borderRadius: "46px",
  fontWeight: 500,
  fontSize: 12,
  padding: "12px 20px",
}));
