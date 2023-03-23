import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Button from "../../components/UI/button/Button";
import HistoryCard from "../history/HistoryCard";
import LikeEmpty from "./LikeEmpty";

const Like = () => {
  return (
    <StyledContainer>
      <HistoryCard />
      <Typography className="btn">
        <StyledButton variant="outlined">Продолжить покупки</StyledButton>
      </Typography>
      <LikeEmpty />
    </StyledContainer>
  );
};

export default Like;
const StyledContainer = styled(Box)(() => ({
  "& .btn": {
    display: "flex",
    justifyContent: "center",
    padding: "70px 0",
  },
}));
const StyledButton = styled(Button)(() => ({
  width: "213px",
}));
