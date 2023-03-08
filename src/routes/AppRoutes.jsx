import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import AdminRoutes from "./AdminRoutes";
import PrivateRoute from "./PrivateRoute";
import { GADJEDTARIUM_LOGIN_INFO } from "../utils/constants/fetch";
import { useDispatch } from "react-redux";
import { ActionauthenticationSlice } from "../redux/slices/authentication-slice";
import { ROUTES } from "../utils/constants/routes";

const autoAuthenticated = JSON.parse(
  localStorage.getItem(GADJEDTARIUM_LOGIN_INFO)
);

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (autoAuthenticated?.token) {
      dispatch(ActionauthenticationSlice.getUserData(autoAuthenticated));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/*" element={<MainRoutes />} />
        <Route
          path="admin/*"
          element={
            <PrivateRoute
              Component={<AdminRoutes />}
              role={["Admin"]}
              fallbackPath="/admin"
            />
          }
        />
        <Route path={ROUTES.NOTFOUND} element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
