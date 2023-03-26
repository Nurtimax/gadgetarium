import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { EmptyLike } from "../../assets";
import Button from "../../components/UI/button/Button";
import { Link } from "react-router-dom";

const LikeEmpty = () => {
  return (
    <StyledContainer>
      <Typography className="svg">
        <EmptyLike />
      </Typography>

      <Typography component="div" className="block">
        <h5>В избранном пока пусто</h5>
        <p>
          Воспользуйтесь поиском или каталогом, выберите нужные товары и
          добавьте их в избранное!
        </p>
        <Typography>
          <Link to={`/`}>
            <Button variant="contained" width={141}>
              К покупкам
            </Button>
          </Link>
        </Typography>
      </Typography>
    </StyledContainer>
  );
};

export default LikeEmpty;
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
    gap: "10px 0",

    "& h5": {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "24px",
    },
  },
}));
