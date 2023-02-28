import React from "react";
import { Route, Routes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import { ROUTES } from "../utils/constants";
import AdminRoutes from "./AdminRoutes";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainRoutes />} />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute
              Component={<AdminRoutes />}
              role="admin"
              fallbackPath="/"
            />
          }
        />
        <Route path={ROUTES.NOTFOUND} element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
