import { Box, Grid, styled } from "@mui/material";
import React from "react";
import Input from "../../components/UI/input/Input";

const PassordProfile = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} className="box ">
          <Box className="box">
            <label>
              Старый пароль <span>*</span>
            </label>
            <StyledInput backcolor="white" placeholder="Старый пароль" />
          </Box>
        </Grid>
        <Grid item xs={12} className="box ">
          <Box className="box">
            <label>
              Новый пароль <span>*</span>
            </label>
            <StyledInput backcolor="white" placeholder="Новый пароль" />
          </Box>
        </Grid>
        <Grid item xs={12} className="box password">
          <Box className="box">
            <label>
              Подтвердите новый пароль <span>*</span>
            </label>
            <StyledInput
              backcolor="white"
              placeholder="Подтвердите новый пароль"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PassordProfile;
const StyledInput = styled(Input)(() => ({
  width: "99%",
}));
