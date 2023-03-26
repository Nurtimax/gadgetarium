import { Box, CircularProgress, Grid, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Button from "../../components/UI/button/Button";
import HistoryCard from "../history/HistoryCard";
import LikeEmpty from "./LikeEmpty";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/slices/private-slice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Like = () => {
  const { id } = useParams();

  const { data, status } = useSelector((state) => state.private.favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites(id));
  }, []);

  return (
    <>
      {status === "pending" ? (
        <Box sx={{ width: "100%" }} className="flex center">
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <StyledContainer>
          {data.length > 0 ? (
            <>
              <Grid container className="container">
                {data?.map((item) => (
                  <Grid key={item.productId}>
                    <HistoryCard {...item} />
                  </Grid>
                ))}
              </Grid>

              <Typography className="btn">
                <Link to={`/`}>
                  <StyledButton variant="outlined">
                    Продолжить покупки
                  </StyledButton>
                </Link>
              </Typography>
            </>
          ) : (
            <LikeEmpty />
          )}
        </StyledContainer>
      )}
    </>
  );
};

export default Like;
const StyledContainer = styled(Box)(() => ({
  "& .btn": {
    display: "flex",
    justifyContent: "center",
    padding: "70px 0",
  },

  "& .container": {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
  },
}));
const StyledButton = styled(Button)(() => ({
  width: "213px",
}));
