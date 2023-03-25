import {
  Box,
  CircularProgress,
  FormLabel,
  Grid,
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
                      <FormLabel required>Имя</FormLabel>
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
                      <FormLabel required>Фамилия</FormLabel>
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
                      <FormLabel required>E-mail</FormLabel>
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
                      <FormLabel required>Телефон</FormLabel>
                      <StyledInput
                        backcolor="white"
                        placeholder="+996(_ _ _) _ _  _ _  _ _"
                        type="tel"
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
                    <FormLabel required>Адрес доставки</FormLabel>
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
                          <StyledButton variant="outlined">Назад</StyledButton>
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
  width: "99%",
}));
const StyleInput = styled(Input)(() => ({
  width: "99.5%",
}));

const StyledButton = styled(Button)(() => ({
  width: "338px",
}));
