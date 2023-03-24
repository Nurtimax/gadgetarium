import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import PassordProfile from "./PassordProfile";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, putProfile } from "../../redux/slices/private-slice";
import { useFormik } from "formik";
import ProfileImg from "./ProfileImg";
import { singUpValidateSchema } from "../../utils/helpers/validate";

const Profile = () => {
  const [password, setPassword] = useState(false);

  const { dataInfoProfile } = useSelector((state) => state.private);

  const { handleChange, handleSubmit, values, setValues, setFieldValue } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: null,
        image: "",
      },
      onSubmit: (value) => {
        dispatch(putProfile(value));
      },
      validationSchema: singUpValidateSchema,
      validateOnChange: false,
    });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const onclickHandler = () => {
    setPassword(true);
  };

  useEffect(() => {
    setValues(dataInfoProfile);
  }, [dataInfoProfile]);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={3} className="padding">
            <ProfileImg setFieldValue={setFieldValue} values={values} />
          </Grid>
          <Grid item xs={7}>
            <Grid container>
              <Grid item xs={12}>
                <Typography component="h4">Личные данные</Typography>
              </Grid>
              <Grid item xs={12} className="flex between block">
                <Box className="box">
                  <label>
                    Имя <span>*</span>
                  </label>
                  <StyledInput
                    backcolor="white"
                    placeholder="Имя"
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                </Box>
                <Box className="box">
                  <label>
                    Фамилия <span>*</span>
                  </label>
                  <StyledInput
                    backcolor="white"
                    placeholder="Фамилия"
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} className="flex between block">
                <Box className="box">
                  <label>
                    E-mail <span>*</span>
                  </label>
                  <StyledInput
                    backcolor="white"
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </Box>
                <Box className="box">
                  <label>
                    Телефон <span>*</span>
                  </label>
                  <StyledInput
                    backcolor="white"
                    placeholder="Телефон"
                    type="tel"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} className="box block">
                <label>
                  Адрес доставки <span>*</span>
                </label>
                <StyleInput backcolor="white" placeholder="Адрес доставки" />
              </Grid>
              {password && <PassordProfile />}

              <Grid item xs={12} className="p block">
                {!password && (
                  <p onClick={onclickHandler} className="pointer">
                    Сменить пароль
                  </p>
                )}

                <Box className="flex gap2">
                  <StyledButton variant="outlined">Назад</StyledButton>
                  <StyledButton variant="contained">Редактировать</StyledButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </StyledContainer>
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
    width: "330px",
    display: "grid",
    gap: "10px 0px",
  },
  "& span": {
    color: "red",
  },
  "& .block": {
    paddingTop: "10px",
  },
  "& .password": {
    paddingBottom: "20px",
  },
}));
const StyledInput = styled(Input)(() => ({
  width: "99%",
}));
const StyleInput = styled(Input)(() => ({
  width: "99.5%",
}));

const StyledButton = styled(Button)(() => ({
  width: "330px",
}));
