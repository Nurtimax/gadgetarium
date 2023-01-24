import { Box, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import AdminHeader from "./header/AdminHeader";
import UserHeader from "./header/UserHeader";

const Layout = () => {
  const role = "user";
  return (
    <StyledLayoutWrapper>
      {role === "admin" ? <AdminHeader /> : <UserHeader />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledLayoutWrapper>
  );
};

export default Layout;

const StyledLayoutWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
}));
