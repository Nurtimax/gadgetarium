import { Box, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Infographic from "../../components/orders/Infographic";

const Admin = () => {
  return (
    <StyledAdmin>
      <Box className="first_outlet">
        <Outlet />
      </Box>
      <Box className="last_outlet">
        <Infographic />
      </Box>
    </StyledAdmin>
  );
};

export default Admin;

const StyledAdmin = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  "& .first_outlet": {
    gridColumn: "1/4",
  },
  "& .last_outlet": {
    gridColumn: "4/5",
  },
}));
