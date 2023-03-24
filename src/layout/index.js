import { Box, Container, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../components/breadcrumbs/Breadcrumbs";
import Footer from "./Footer/Footer";
import UserHeader from "./header/UserHeader";

const Layout = () => {
  return (
    <StyledLayoutWrapper>
      <UserHeader />
      <Container>
        <StyledBreadcrumbsPosition className="flex">
          <BreadCrumbs />
        </StyledBreadcrumbsPosition>
      </Container>
      <main id="main">
        <Outlet />
      </main>
      <Footer />
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
  "& #main": {
    minHeight: "80vh",
  },
}));

const StyledBreadcrumbsPosition = styled(Box)(() => ({
  height: "60px",
}));
