import { Grid, MenuItem } from "@mui/material";
import React from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ActionauthenticationSlice } from "../../redux/slices/authentication-slice";
import { getBasketProduct } from "../../redux/slices/basket-slice";
import { userProfileStatus_FAKE_DATA } from "../../utils/constants";

const UserProfileList = () => {
  const { data } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isLogIn = useMemo(() => {
    return data?.roleName ? "enteredLogIn" : "enter";
  }, [data?.roleName]);

  const logOutHandler = (title) => () => {
    if (title === "Выйти") {
      dispatch(ActionauthenticationSlice.authLogOut());
      dispatch(getBasketProduct());
    }
  };
  return (
    <>
      {userProfileStatus_FAKE_DATA[isLogIn].map((status) => (
        <Grid key={status.id} item xs={12}>
          <Link to={status.link}>
            <MenuItem onClick={logOutHandler(status.title)}>
              {status.title}
            </MenuItem>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default UserProfileList;
