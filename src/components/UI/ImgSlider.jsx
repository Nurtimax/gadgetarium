import { styled } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import DetailsImg from "../product-details/DetailsImg";
const ImgSlider = ({ images }) => {
  const [openModal, setOpenModal] = useState(false);

  const open = () => {
    setOpenModal(true);
  };
  const close = () => {
    setOpenModal(false);
  };
  return (
    <div>
      {openModal && (
        <DetailsImg
          state={openModal}
          open={open}
          handleClose={close}
          images={images}
        />
      )}
      <CarouselStyle infiniteLoop showStatus={false} showIndicators={false}>
        {images?.map((img) => (
          <div key={img} onClick={open}>
            <img src={img} alt="photo" />
          </div>
        ))}
      </CarouselStyle>
    </div>
  );
};

export default ImgSlider;

const CarouselStyle = styled(Carousel)(() => ({
  "& .carousel-slider": {
    display: "flex",
    justifyContent: "center",
    mixBlendMode: "darken",
  },
  "& .thumbs li": {
    height: "80px",
    "& img": {
      aspectRatio: "1/1",
      objectFit: "contain",
      height: "100%",
      width: "100%",
    },
  },

  "& .carousel .thumb:hover": {
    border: "2px solid #cb11ab",
    borderRadius: "10px",
  },

  "& .slider-wrapper": {
    "& img": {
      width: "300px",
      height: "350px",
      aspectRatio: "1/1",
      objectFit: "contain",
    },
  },

  "& .thumbs": {
    display: "flex",
    justifyContent: "center",
  },

  "& .carousel .thumb.selected": {
    border: "2px solid #cb11ab",
  },

  "& button": {
    display: "none",
  },
}));
