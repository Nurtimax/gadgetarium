import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Button from "../../components/UI/button/Button";
import HistoryCard from "../history/HistoryCard";
import LikeEmpty from "./LikeEmpty";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/slices/private-slice";
import { useParams } from "react-router-dom";

const Like = () => {
  const { id } = useParams();

  const { dataFavorites } = useSelector((state) => state.private);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites(id));
  }, []);

  return (
    <StyledContainer>
      {dataFavorites.length > 0 ? (
        <>
          <Grid container>
            {dataFavorites?.map((item) => (
              <Grid key={item.productId} xs={2.3}>
                <HistoryCard {...item} />
              </Grid>
            ))}
          </Grid>

          <Typography className="btn">
            <StyledButton variant="outlined">Продолжить покупки</StyledButton>
          </Typography>
        </>
      ) : (
        <LikeEmpty />
      )}
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
