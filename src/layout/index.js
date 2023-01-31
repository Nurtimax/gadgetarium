import { Box, styled } from "@mui/material";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminBreadcrumbs from "../components/breadcrumbs/AdminBreadCrumbs";
import UserBreadcrumbs from "../components/breadcrumbs/UserBreadCrumbs";
import { DUMMY_PRODUCT_DATA } from "../utils/constants";
import Footer from "./Footer/Footer";
import AdminHeader from "./header/AdminHeader";
import UserHeader from "./header/UserHeader";

const Layout = ({ role = "admin" }) => {
  const location = useLocation();

  const roleResult = location.pathname.split("/").includes(role);

  return (
    <StyledLayoutWrapper className={!roleResult ? "flex" : ""}>
      {roleResult ? <AdminHeader /> : <UserHeader />}
      {!roleResult ? (
        <UserBreadcrumbs />
      ) : (
        <AdminBreadcrumbs items={DUMMY_PRODUCT_DATA} />
      )}
      <main>
        <Outlet />
      </main>
      {!roleResult && <Footer />}
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
