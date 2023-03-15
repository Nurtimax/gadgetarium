import { Grid, MenuItem } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ActionauthenticationSlice } from "../../redux/slices/authentication-slice";
import { getBasketProduct } from "../../redux/slices/basket-slice";
import { getFavoriteProducts } from "../../redux/slices/favorite-slice";
import {
  fetchDiscountProduct,
  fetchNewProduct,
  fetchRecomendationProduct,
} from "../../redux/slices/product-slice";
import { userProfileStatus_FAKE_DATA } from "../../utils/constants";

const UserProfileList = () => {
  const { data, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isLogIn = useMemo(() => {
    return data?.roleName ? "enteredLogIn" : "enter";
  }, [data?.roleName]);

  const logOutHandler = (title) => () => {
    if (title === "Выйти") {
      dispatch(ActionauthenticationSlice.authLogOut());
      dispatch(getBasketProduct());
      dispatch(getFavoriteProducts());
    }
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      dispatch(fetchDiscountProduct(100));
      dispatch(fetchNewProduct(100));
      dispatch(fetchRecomendationProduct(100));
    }
  }, [isAuthenticated, dispatch]);

  return (
    <>
      <Grid container spacing={1} className="pointer">
        {userProfileStatus_FAKE_DATA[isLogIn].map((status) => (
          <Grid key={status.id} item xs={12}>
            <Link to={status.link}>
              <MenuItem onClick={logOutHandler(status.title)}>
                {status.title}
              </MenuItem>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default UserProfileList;
