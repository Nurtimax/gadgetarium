import { Box, FormLabel, Grid, styled, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { VisibilityOffIcon, VisibilityOnIcon } from "../../assets";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import useVisibility from "../../hooks/useVisibility";
import { putPassword } from "../../redux/slices/private-slice";
import { change } from "../../utils/helpers/validate";
import { Link } from "react-router-dom";
const PassordProfile = () => {
  const [showPassword, setShowPassword] = useVisibility();
  const [showConfirmPassword, setShowConfirmPassword] = useVisibility();
  const [repeatPassword, setRepeatPassword] = useVisibility();
  const dispatch = useDispatch();

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      newPassword: "",
    },
    validationSchema: change,
    onSubmit: (values) => {
      dispatch(putPassword(values)).then((res) => {
        if (res.payload.status === "ok") {
          return toast.success("Пользователь успешно обновлен");
        }
        return toast.error("Что-то не так с сервером или данными");
      });
    },
  });
  return (
    <>
      <Styled_Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} className="box ">
            <Box className="box">
              <FormLabel required>Старый пароль</FormLabel>
              <StyledInput
                backcolor="white"
                placeholder="Старый пароль"
                type={!showPassword ? "password" : "text"}
                name="currentPassword"
                value={values.currentPassword || ""}
                onChange={handleChange}
                className={errors.currentPassword ? "error" : ""}
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
              {errors.currentPassword && touched.currentPassword && (
                <Typography variant="subtitle2" color="error">
                  {errors.currentPassword}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} className="box ">
            <Box className="box">
              <FormLabel required>Новый пароль</FormLabel>
              <StyledInput
                backcolor="white"
                placeholder="Новый пароль"
                type={!showConfirmPassword ? "password" : "text"}
                name="newPassword"
                value={values.newPassword || ""}
                onChange={handleChange}
                className={errors.newPassword ? "error" : ""}
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
              {errors.newPassword && (
                <Typography variant="subtitle2" color="error">
                  {errors.newPassword}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} className="box password">
            <Box className="box">
              <FormLabel required>Подтвердите новый пароль</FormLabel>
              <StyledInput
                backcolor="white"
                placeholder="Подтвердите новый пароль"
                type={!repeatPassword ? "password" : "text"}
                className={errors.password ? "error" : ""}
                onChange={handleChange}
                name="password"
                endAdornment={
                  <>
                    {!repeatPassword ? (
                      <VisibilityOffIcon
                        className="pointer"
                        onClick={setRepeatPassword}
                      />
                    ) : (
                      <VisibilityOnIcon
                        className="pointer"
                        onClick={setRepeatPassword}
                      />
                    )}
                  </>
                }
              />
              {errors.password && (
                <Typography variant="subtitle2" color="error">
                  {errors.password}
                </Typography>
              )}
            </Box>
          </Grid>
          <Box className="flex between gap2">
            <Link to={`/`}>
              <StyledButton variant="outlined">Назад</StyledButton>
            </Link>
            <StyledButton variant="contained">Редактировать</StyledButton>
          </Box>
        </Grid>
      </Styled_Form>
    </>
  );
};

export default PassordProfile;
const StyledInput = styled(Input)(() => ({
  width: "99%",
}));
const StyledButton = styled(Button)(() => ({
  width: "338px",
}));
const Styled_Form = styled("form")(() => ({
  "& .error": {
    border: "1px solid red",
  },
}));
