import { Box, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { EmptyHistory } from "../../assets";
import Button from "../../components/UI/button/Button";
import { Link } from "react-router-dom";
import { getProfile } from "../../redux/slices/private-slice";
import { useDispatch, useSelector } from "react-redux";
import { ActionauthenticationSlice } from "../../redux/slices/authentication-slice";

const HistoreEmpty = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.private.profile);

  const logOutHandler = () => {
    dispatch(ActionauthenticationSlice.authLogOut());
  };

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <StyledContainer>
      <Typography className="svg">
        <EmptyHistory />
      </Typography>

      <Typography component="div" className="block">
        <h5>Здесь пока пусто</h5>
        <p>Здесь будет храниться история ваших заказов.</p>
        <Typography>
          <Link to={`/`}>
            <Button variant="contained" width="147px">
              К покупкам
            </Button>
          </Link>
        </Typography>
      </Typography>
      <Typography component="div" className="block2">
        <p className="user">
          {data.firstName} <br /> {data.lastName}
        </p>
        <br />
        <p className="email">{data.email}</p>
        <p>{data.phoneNumber}</p>

        <br />

        <StyledButton onClick={logOutHandler}>Выйти</StyledButton>
      </Typography>
    </StyledContainer>
  );
};

export default HistoreEmpty;
const StyledContainer = styled(Box)(() => ({
  display: "grid",
  justifyContent: "center",
  padding: "30px 0",
  fontFamily: "Inter",
  fontStyle: "normal",
  "& .svg": {
    width: "400px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
  },
  "& .block": {
    width: "422px",
    height: "140px",
    display: "grid",
    justifyContent: "center",
    textAlign: "center",
    gap: "15px 0",

    "& h5": {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "24px",
    },
  },
  "& .block2": {
    width: "150px",
    height: "170px",
    position: "absolute",
    right: "5%",
    top: "15%",
  },
  "& .user": {
    fontWeight: 600,
    fontSize: "17px",
  },
  "& .email": {
    fontWeight: 400,
    color: "#384255",
  },
}));
const StyledButton = styled("button")(() => ({
  color: "blue",
  border: "none",
  fontWeight: 700,
  fontSize: "16px",
  cursor: "pointer",
}));
