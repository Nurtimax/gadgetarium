import { Box, styled } from "@mui/material";
import React from "react";
const GadgetariumSpinnerLoading = () => {
  return (
    <StyledGadgetariumSpinnerLoading>
      <div className="border"></div>
      <div className="border second_border"></div>
      <div className="gadgetarium_logo">G</div>
    </StyledGadgetariumSpinnerLoading>
  );
};
export default GadgetariumSpinnerLoading;
const StyledGadgetariumSpinnerLoading = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  "& .border": {
    border: "2px solid #BA45C0",
    width: "65px",
    height: "65px",
    position: "absolute",
    borderRadius: "10px",
    animation: "GADGETARIUMBORDER 1s linear infinite running",
    "@keyframes GADGETARIUMBORDER": {
      "0%": {
        transform: "rotate3d(1, 1, 1, 0deg)",
      },
      "10%": {
        transform: "rotate3d(1, 1, 1, -40deg)",
      },
      "20%": {
        transform: "rotate3d(1, 1, 1, -80deg)",
      },
      "30%": {
        transform: "rotate3d(1, 1, 1, -120deg)",
      },
      "40%": {
        transform: "rotate3d(1, 1, 1, -180deg)",
      },
      "50%": {
        transform: "rotate3d(1, 1, 1, -230deg)",
      },
      "60%": {
        transform: "rotate3d(1, 1, 1, -280deg)",
      },
      "70%": {
        transform: "rotate3d(1, 1, 1, -310deg)",
      },
      "80%": {
        transform: "rotate3d(1, 1, 1, -340deg)",
      },
      "100%": {
        transform: "rotate3d(1, 1, 1, -360deg)",
      },
    },
  },
  "& .second_border": {
    width: "80px",
    height: "80px",
    animation: "GADGETARIUMSECONDBORDER 1.5s linear infinite running",
    "@keyframes GADGETARIUMSECONDBORDER": {
      "0%": {
        transform: "rotate3d(1, 1, 1, -360deg)",
      },
      "10%": {
        transform: "rotate3d(1, 1, 1, -330deg)",
      },
      "20%": {
        transform: "rotate3d(1, 1, 1, -290deg)",
      },
      "30%": {
        transform: "rotate3d(1, 1, 1, -250deg)",
      },
      "40%": {
        transform: "rotate3d(1, 1, 1, -200deg)",
      },
      "50%": {
        transform: "rotate3d(1, 1, 1, -180deg)",
      },
      "60%": {
        transform: "rotate3d(1, 1, 1, -130deg)",
      },
      "70%": {
        transform: "rotate3d(1, 1, 1, -90deg)",
      },
      "80%": {
        transform: "rotate3d(1, 1, 1, -55deg)",
      },
      "100%": {
        transform: "rotate3d(1, 1, 1, 0deg)",
      },
    },
  },
  "& .gadgetarium_logo": {
    fontSize: "4rem",
    color: theme.palette.secondary.main,
    fontWeight: "700",
    animation: "GADGETARIUM 8s linear infinite running",
    "@keyframes GADGETARIUM": {
      "0%, 100%": {
        animationTimingFunction: "cubic-bezier(0.5, 0, 1, 0.5)",
      },
      "0% ": {
        transform: "rotateY(0deg)",
      },
      " 50% ": {
        transform: "rotateY(1800deg)",
        animationTimingFunction: "cubic-bezier(0, 0.5, 0.5, 1)",
      },
      "100%": {
        transform: "rotateY(3600deg)",
      },
    },
  },
}));
