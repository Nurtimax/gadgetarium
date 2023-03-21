import { styled } from "@mui/material";
import React from "react";
import Modal from "../UI/Modal";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const DetailsImg = ({ open, state, handleClose, images }) => {
  return (
    <Styled_Wrapper
      open={open}
      state={state}
      handleClose={handleClose}
      classes={{ paper: "show_photo" }}
    >
      <CarouselStyle infiniteLoop showStatus={false} showIndicators={false}>
        {images?.map((img) => (
          <div key={img} onClick={open}>
            <img src={img} alt="" />
          </div>
        ))}
      </CarouselStyle>
    </Styled_Wrapper>
  );
};

export default DetailsImg;

const Styled_Wrapper = styled(Modal)(() => ({
  width: "100vw",
  position: "fixed",

  "& .show_photo": {
    maxWidth: "100vw",
    maxHeight: "105vh",
    position: "fixed",
    top: "-6%",
    left: "-35px",
    bottom: "-10%",
    right: "-30px",
  },
  "& .css-1cka1gl": {
    "& svg": {
      height: "25px",
      width: "25px",
    },
  },
}));
const CarouselStyle = styled(Carousel)(() => ({
  "& .carousel-slider": {
    display: "flex",
    justifyContent: "center",
  },
  "& .thumb": {
    border: "none",
  },
  "& .thumb:hover": {
    border: "2px solid #CB11AB",
    borderRadius: "10px",
  },

  "& .slider-wrapper": {
    "& img": {
      width: "100%",
      height: "400px",
      aspectRatio: "1/1",
      objectFit: "contain",
    },
  },

  "& .thumbs": {
    display: "flex",
    justifyContent: "center",
    "& .selected": {
      borderRadius: "10px",
      border: "1px solid #CB11AB",
    },
  },

  "& button": {
    // display: "none",
  },
}));
