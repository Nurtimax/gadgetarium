import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";

const Profile = () => {
  return (
    <StyledContainer>
      <form>
        <Grid container>
          <Grid item xs={3}>
            img
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
                  <StyledInput backcolor="white" placeholder="Имя" />
                </Box>
                <Box className="box">
                  <label>
                    Фамилия <span>*</span>
                  </label>
                  <StyledInput backcolor="white" placeholder="Фамилия" />
                </Box>
              </Grid>
              <Grid item xs={12} className="flex between block">
                <Box className="box">
                  <label>
                    E-mail <span>*</span>
                  </label>
                  <StyledInput backcolor="white" placeholder="E-mail " />
                </Box>
                <Box className="box">
                  <label>
                    Телефон <span>*</span>
                  </label>
                  <StyledInput backcolor="white" placeholder="Телефон" />
                </Box>
              </Grid>
              <Grid item xs={12} className="box block">
                <label>
                  Адрес доставки <span>*</span>
                </label>
                <StyleInput backcolor="white" placeholder="Адрес доставки" />
              </Grid>
              <Grid item xs={12} className="p block">
                <p>Сменить пароль</p>
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
