import { Box, styled } from "@mui/material";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import AdminHeader from "./header/AdminHeader";
import UserHeader from "./header/UserHeader";
const Layout = ({ role = "admin" }) => {
  const location = useLocation();

  const roleResult = location.pathname.split("/").includes(role);

  return (
    <StyledLayoutWrapper>
      {roleResult ? <AdminHeader /> : <UserHeader />}
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
  gap: "2rem",
  "& .user_stop": {
    padding: "0 0 11rem",
  },
  "& .admin_stop": {
    padding: "0 0 4rem",
  },
}));
