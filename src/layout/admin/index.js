import { Box, Container, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../../components/breadcrumbs/Breadcrumbs";
import AdminHeader from "../header/AdminHeader";

const AdminLayout = () => {
  return (
    <StyledAdminLayout>
      <AdminHeader />
      <Container>
        <StyledBreadcrumbsPosition className="flex">
          <BreadCrumbs />
        </StyledBreadcrumbsPosition>
      </Container>
      <main>
        <Outlet />
      </main>
    </StyledAdminLayout>
  );
};

export default AdminLayout;

const StyledAdminLayout = styled(Box)(() => ({
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
  minHeight: "500px",
  gap: "2rem",
  "& .admin_stop": {
    padding: "0 0 6rem",
  },
}));

const StyledBreadcrumbsPosition = styled(Box)(() => ({
  height: "60px",
}));
