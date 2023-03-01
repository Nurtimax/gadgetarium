import { Box, CircularProgress, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconClose, VisibilityOffIcon, VisibilityOnIcon } from "../../assets";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import Modal from "../../components/UI/Modal";
import { useFormik } from "formik";
import ReactInputMask from "react-input-mask";
import useVisibility from "../../hooks/useVisibility";
import { showError } from "../../utils/helpers/catch-signup";
import { singUpValidateSchema } from "../../utils/helpers/validate";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataSignup } from "../../redux/slices/authentication";

const SignUp = () => {
  const [showPassword, setShowPassword] = useVisibility();
  const [showConfirmPassword, setShowConfirmPassword] = useVisibility();

  const { isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values, action) => {
    const phoneNumber = values.phoneNumber
      .split("-")
      .join("")
      .split("(")
      .join("")
      .split(")")
      .join("");

    const registerData = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      phoneNumber,
      password: values.password,
    };
    dispatch(fetchDataSignup(registerData)).then((res) => {
      const { email, roleName, token } = res.payload;
      if (email && roleName && token) {
        action.resetForm();
        if (roleName === "Admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    });
  };

  const { handleChange, handleSubmit, values, errors, isSubmitting } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: singUpValidateSchema,
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
              Регистрация
            </Typography>
          </Grid>
        </Grid>
        <StyledForm component="form" className="flex column">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StyledInput
                placeholder="Напишите ваше имя"
                value={values.firstname}
                onChange={handleChange}
                name="firstname"
                type="text"
                error={Boolean(errors.firstname)}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledInput
                placeholder="Напишите вашу фамилию"
                value={values.lastname}
                onChange={handleChange}
                name="lastname"
                type="text"
                error={Boolean(errors.lastname)}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledInputMask
                mask="+996(999)99-99-99"
                placeholder="+996 (_ _ _) _ _  _ _  _ _"
                value={values.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                className={errors.phoneNumber && "error"}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledInput
                placeholder="Напишите email"
                value={values.email}
                onChange={handleChange}
                name="email"
                type="email"
                error={Boolean(errors.email)}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledInput
                placeholder="Напишите пароль"
                value={values.password}
                onChange={handleChange}
                name="password"
                type={!showPassword ? "password" : "text"}
                error={Boolean(errors.password)}
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
            </Grid>
            <Grid item xs={12}>
              <StyledInput
                placeholder="Подтвердите пароль"
                value={values.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                type={!showConfirmPassword ? "password" : "text"}
                error={Boolean(errors.confirmPassword)}
                endAdornment={
                  <>
                    {!showConfirmPassword ? (
                      <VisibilityOffIcon
                        className="pointer"
                        onClick={setShowConfirmPassword}
                      />
                    ) : (
                      <VisibilityOnIcon
                        className="pointer"
                        onClick={setShowConfirmPassword}
                      />
                    )}
                  </>
                }
              />
            </Grid>
          </Grid>
          {showError(errors) && (
            <Typography component="p" variant="body2" color="error">
              {showError(errors)}
            </Typography>
          )}
          <StyledButton type="submit" disabled={isSubmitting}>
            {isLoading ? <CircularProgress size={30} /> : " Создать аккаунт"}
          </StyledButton>
        </StyledForm>
        <Box className="change_login flex center gap">
          <Typography component="p" variant="body1">
            У вас уже есть аккаунт?
          </Typography>
          <Link to="/sign-in" className="link">
            <Typography component="span" variant="body1">
              Войти
            </Typography>
          </Link>
        </Box>
      </StyledModal>
    </StyledSignIn>
  );
};

export default SignUp;

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
const StyledInputMask = styled(ReactInputMask)(({ theme }) => ({
  width: "100%",
  height: "43px",
  "&": {
    border: `0.1px solid ${theme.palette.grey[900]}`,
    background: `${theme.palette.background.default}`,
    borderRadius: "5px",
    padding: "0 10px",
  },
  "&:focus": {
    border: `0.1px solid ${theme.palette.secondary.main}`,
    background: `${theme.palette.background.default}`,
    borderRadius: "5px",
    color: `${theme.palette.primary.dark}`,
    outline: "none",
  },
  "&.error": {
    border: "1px solid red",
  },
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
