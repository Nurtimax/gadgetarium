import { Box, Container, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../components/breadcrumbs/Breadcrumbs";
import Footer from "./Footer/Footer";
import AdminHeader from "./header/AdminHeader";
import UserHeader from "./header/UserHeader";

const Layout = ({ role }) => {
  return (
    <StyledLayoutWrapper className={!role ? "flex" : ""}>
      {role === "admin" ? <AdminHeader /> : <UserHeader />}
      <Container>
        <StyledBreadcrumbsPosition className="flex">
          <BreadCrumbs />
        </StyledBreadcrumbsPosition>
      </Container>
      <main>
        <Outlet />
      </main>
      {role === "admin" ? null : <Footer />}
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
