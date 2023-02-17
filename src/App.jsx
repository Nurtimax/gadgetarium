import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionauthenticationSlice } from "./redux/slices/authentication";
import AppRoutes from "./routes/AppRoutes";
import { GADJEDTARIUM_LOGIN_INFO } from "./utils/constants/fetch";

const authSave = JSON.parse(localStorage.getItem(GADJEDTARIUM_LOGIN_INFO));

const App = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (authSave) {
      dispatch(ActionauthenticationSlice.getUserData(authSave));
    }
  }, []);

  return <AppRoutes />;
};

export default App;
