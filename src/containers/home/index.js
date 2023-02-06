import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../../components/Banner";
import { ActionauthenticationSlice } from "../../redux/slices/authentication";
import { GADJEDTARIUM_LOGIN_INFO } from "../../utils/constants/fetch";

const authSave = JSON.parse(localStorage.getItem(GADJEDTARIUM_LOGIN_INFO));

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionauthenticationSlice.authLogIn(authSave));
  }, []);

  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
