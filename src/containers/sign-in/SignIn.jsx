import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { IconClose } from "../../assets";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import Modal from "../../components/UI/Modal";

const SignIn = () => {
  return (
    <StyledSignIn className="background_linear">
      <StyledModal open={true}>
        <Grid container spacing={1}>
          <Grid item xs={12} className="flex flex-end">
            <Link to="/">
              <IconClose />
            </Link>
          </Grid>
          <Grid item xs={12} className="flex center padding">
            <Typography component="h1" variant="h5">
              Войти
            </Typography>
          </Grid>
        </Grid>
        <StyledForm component="form" className="flex column">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StyledInput placeholder="Напишите email" />
            </Grid>
            <Grid item xs={12}>
              <StyledInput placeholder="Напишите пароль" />
            </Grid>
          </Grid>
          <StyledButton>Войти</StyledButton>
        </StyledForm>
        <Box className="change_login flex center gap">
          <Typography component="p" variant="body1">
            Нет аккаунта?
          </Typography>
          <Link to="/sign-up" className="link">
            <Typography component="a" variant="body1">
              Зарегистрироваться
            </Typography>
          </Link>
        </Box>
      </StyledModal>
    </StyledSignIn>
  );
};

export default SignIn;

const StyledSignIn = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledModal = styled(Modal)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "21px",
    width: "580px",
  },
  "& .link": {
    color: theme.palette.secondary.light,
  },
}));

const StyledInput = styled(Input)(() => ({
  width: "100%",
  height: "43px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: "white !important",
  width: "100%",
}));

const StyledForm = styled(Box)(() => ({
  gap: "24px",
  padding: "0 40px",
}));
