import { Box, styled } from "@mui/material";
import React from "react";
import Contacts from "../containers/contacts/Contacts";
import Footer from "./Footer/Footer";
import AdminHeader from "./header/AdminHeader";
import UserHeader from "./header/UserHeader";

const Layout = () => {
  const role = "user";
  return (
    <StyledLayoutWrapper>
      {role === "admin" ? <AdminHeader /> : <UserHeader />}
      <main>
        <Contacts />
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
