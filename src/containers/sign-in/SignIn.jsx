import { Box, CircularProgress, Grid, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconClose, VisibilityOffIcon, VisibilityOnIcon } from "../../assets";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import Modal from "../../components/UI/Modal";
import { useFormik } from "formik";
import useVisibility from "../../hooks/useVisibility";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataSignin } from "../../redux/slices/authentication";
import { singInValidateSchema } from "../../utils/helpers/validate";

const SignIn = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useVisibility();
  const [error, setError] = useState(null);
  const { isLoading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const onSubmit = (values, action) => {
    dispatch(fetchDataSignin(values))
      .then((res) => {
        return res;
      })
      .then((data) => {
        const { payload } = data;
        if (payload?.email && payload?.roleName && payload?.token) {
          if (data) {
            action.resetForm();
            navigate("/");
            setError(null);
          }
        } else {
          setError(true);
        }
      });
  };

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: singInValidateSchema,
    validateOnChange: false,
  });

  return (
    <StyledSignIn className="background_linear" onSubmit={handleSubmit}>
      <StyledModal open={true}>
        <Grid container spacing={1}>
          <Grid item xs={12} className="flex flex-end">
            <Link to="/" replace>
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
              <StyledInput
                placeholder="Напишите email"
                value={values.email}
                onChange={handleChange}
                name="email"
                type="email"
              />
              {errors.email && (
                <Typography component="p" variant="body2" color="error">
                  {errors.email}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <StyledInput
                placeholder="Напишите пароль"
                value={values.password}
                onChange={handleChange}
                name="password"
                type={!showPassword ? "password" : "text"}
                endAdornment={
                  <>
                    {!showPassword ? (
                      <VisibilityOffIcon
                        className="pointer"
                        onClick={setShowPassword}
                      />
                    ) : (
                      <VisibilityOnIcon
                        className="pointer"
                        onClick={setShowPassword}
                      />
                    )}
                  </>
                }
              />
              {errors.password && (
                <Typography component="p" variant="body2" color="error">
                  {errors.password}
                </Typography>
              )}
            </Grid>
          </Grid>
          {error && (
            <Typography component="p" variant="body2" color="error">
              Неправильно указан Email и/или пароль
            </Typography>
          )}
          <StyledButton type="submit">
            {isLoading ? <CircularProgress size={30} /> : "Войти"}
          </StyledButton>
        </StyledForm>
        <Box className="change_login flex center gap">
          <Typography component="p" variant="body1">
            Нет аккаунта?
          </Typography>
          <Link to="/sign-up" className="link">
            <Typography component="span" variant="body1">
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
