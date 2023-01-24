import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutStore from "../containers/about-store/AboutStore";
import Layout from "../layout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutStore />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
