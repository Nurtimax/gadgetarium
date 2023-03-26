import {
  Box,
  CircularProgress,
  Grid,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import PassordProfile from "./PassordProfile";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, putProfile } from "../../redux/slices/private-slice";
import { useFormik } from "formik";
import ProfileImg from "./ProfileImg";
import { orderingValidateSchemaWithAdreess } from "../../utils/helpers/validate";
import { toast } from "react-toastify";
import { PatternFormat } from "react-number-format";
import { Link } from "react-router-dom";

const Profile = () => {
  const [password, setPassword] = useState(false);

  const { data, status } = useSelector((state) => state.private.profile);
  const { statuss } = useSelector((state) => state.private.putProfile);

  const {
    handleChange,
    handleSubmit,
    values,
    setValues,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      image: "",
    },
    onSubmit: (value) => {
      dispatch(putProfile(value)).then((res) => {
        if (res.payload.status === "ok") {
          return toast.success("Пользователь успешно обновлен");
        }
        return toast.error("Что-то не так с сервером или данными");
      });
    },
    validationSchema: orderingValidateSchemaWithAdreess,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const onclickHandler = () => {
    setPassword(true);
  };

  useEffect(() => {
    setValues((prevState) => ({ ...prevState, ...data }));
  }, [data]);

  return (
    <>
      {status === "pending" ? (
        <Box sx={{ width: "100%" }} className="flex center">
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <StyledContainer>
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={3} className="padding">
                <ProfileImg
                  setFieldValue={setFieldValue}
                  values={values.image}
                />
              </Grid>

              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography component="h4">Личные данные</Typography>
                  </Grid>
                  <Grid item xs={12} className="flex between ">
                    <Box className="box">
                      <StyledLabel>Имя</StyledLabel>
                      <StyledInput
                        backcolor="white"
                        placeholder="Имя"
                        name="firstName"
                        type="text"
                        value={values.firstName || ""}
                        onChange={handleChange}
                        error={Boolean(errors.firstName)}
                        className={
                          errors.firstName && touched.firstName ? "error" : ""
                        }
                      />
                      {errors.firstName && touched.firstName && (
                        <p className="errors">{errors.firstName}</p>
                      )}
                    </Box>
                    <Box className="box">
                      <StyledLabel>Фамилия</StyledLabel>
                      <StyledInput
                        backcolor="white"
                        placeholder="Фамилия"
                        type="text"
                        name="lastName"
                        value={values.lastName || ""}
                        onChange={handleChange}
                        error={Boolean(errors.lastName)}
                      />
                      {errors.lastName && touched.lastName && (
                        <p className="errors">{errors.lastName}</p>
                      )}
                    </Box>
                  </Grid>
                  <Grid item xs={12} className="flex between ">
                    <Box className="box">
                      <StyledLabel>E-mail</StyledLabel>
                      <StyledInput
                        backcolor="white"
                        placeholder="Напишите email"
                        type="email"
                        name="email"
                        value={values.email || ""}
                        onChange={handleChange}
                        error={Boolean(errors.email)}
                      />
                      {errors.email && touched.email && (
                        <p className="errors">{errors.email}</p>
                      )}
                    </Box>
                    <Box className="box">
                      <StyledLabel>Телефон</StyledLabel>
                      <StyledInputMask
                        format="+996 (###) ### ###"
                        mask="_"
                        placeholder="+996(_ _ _) _ _  _ _  _ _"
                        name="phoneNumber"
                        value={values.phoneNumber || ""}
                        onChange={handleChange}
                        className={errors.phoneNumber ? "error" : ""}
                      />
                      {errors.phoneNumber && touched.phoneNumber && (
                        <p className="errors">{errors.phoneNumber}</p>
                      )}
                    </Box>
                  </Grid>

                  <Grid item xs={12} className="box ">
                    <StyledLabel>Адрес доставки</StyledLabel>
                    <StyleInput
                      backcolor="white"
                      placeholder="Адрес доставки"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      className={errors.address ? "error" : ""}
                    />
                    {errors.address && touched.address && (
                      <p className="errors">{errors.address}</p>
                    )}
                  </Grid>

                  <Grid item xs={12} className="p ">
                    {!password && (
                      <>
                        <p onClick={onclickHandler} className="pointer">
                          Сменить пароль
                        </p>

                        <Box className="flex between gap2">
                          <Link to="/">
                            <StyledButton variant="outlined">
                              Назад
                            </StyledButton>
                          </Link>

                          <StyledButton variant="contained">
                            {statuss === "pending" ? (
                              <CircularProgress color="secondary" />
                            ) : (
                              "Редактировать"
                            )}
                          </StyledButton>
                        </Box>
                      </>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              {password && <PassordProfile />}
            </Grid>
          </Grid>
        </StyledContainer>
      )}
    </>
  );
};

export default Profile;
const StyledContainer = styled(Box)(() => ({
  paddingBottom: "120px",
  "& .p": {
    textAlign: "end",
    "& p": {
      color: "#CB11AB",
      padding: "10px 0",
    },
  },
  "& .box": {
    width: "338px",
    display: "grid",
    gap: "10px 0px",
    padding: "5px 0",
  },

  "& .password": {
    paddingBottom: "10px",
  },
  "& .error": {
    border: "1px solid red",
  },
  "& .errors": {
    color: "red",
  },
  "& .errors:hover": {
    color: "red",
  },
}));

const StyledInput = styled(Input)(() => ({
  width: "338px",
  height: "48px",
  backgroundColor: "#ffff !important",
}));

const StyleInput = styled(Input)(() => ({
  height: "48px",
  backgroundColor: "#ffff !important",
  width: "99.5%",
}));

const StyledButton = styled(Button)(() => ({
  width: "338px",
}));

const StyledLabel = styled(InputLabel)(() => ({
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "16px",
  color: " #384255",
  "&:after": {
    content: '" *"',
    color: "red",
  },
}));

const StyledInputMask = styled(PatternFormat)(() => ({ theme }) => ({
  backgroundColor: "#ffff !important",
  width: "338px",
  height: "48px",
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
}));
