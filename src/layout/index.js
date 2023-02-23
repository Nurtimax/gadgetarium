import { Box, Container, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../components/breadcrumbs/Breadcrumbs";
import { ActionauthenticationSlice } from "../redux/slices/authentication";
import { GADJEDTARIUM_LOGIN_INFO } from "../utils/constants/fetch";
import Footer from "./Footer/Footer";
import AdminHeader from "./header/AdminHeader";
import UserHeader from "./header/UserHeader";

const authSave = JSON.parse(localStorage.getItem(GADJEDTARIUM_LOGIN_INFO));

const Layout = ({ role }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (authSave) {
      dispatch(ActionauthenticationSlice.getUserData(authSave));
    }
  }, [authSave, dispatch]);

  return (
    <StyledLayoutWrapper>
      {role?.toLowerCase() === "admin" ? <AdminHeader /> : <UserHeader />}
      <Container>
        <StyledBreadcrumbsPosition className="flex">
          <BreadCrumbs />
        </StyledBreadcrumbsPosition>
      </Container>
      <main>
        <Outlet />
      </main>
      {role?.toLowerCase() === "admin" ? null : <Footer />}
    </StyledLayoutWrapper>
  );
};

export default Layout;

const StyledLayoutWrapper = styled(Box)(() => ({
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
  gap: "2rem",
  "& .user_stop": {
    padding: "0 0 11rem",
  },
  "& .admin_stop": {
    padding: "0 0 6rem",
  },
}));

const StyledBreadcrumbsPosition = styled(Box)(() => ({
  height: "60px",
}));
