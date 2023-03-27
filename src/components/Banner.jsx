import { styled, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBannerThunk } from "../redux/slices/banner-slice";
import GadgetariumSpinnerLoading from "./GadgetariumSpinnerLoading";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const { banners, isLoading, message } = useSelector((state) => state.banner);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannerThunk());
  }, []);

  return (
    <StyledWrapper>
      {isLoading && <GadgetariumSpinnerLoading />}
      <Slider {...settings}>
        {message ? (
          <Typography variant="h5" component="h2">
            {message}
          </Typography>
        ) : (
          banners?.map((image) => (
            <WrapperStyled key={image}>
              <StyledImg src={image} alt=""></StyledImg>
            </WrapperStyled>
          ))
        )}
      </Slider>
    </StyledWrapper>
  );
};

export default Banner;

const StyledWrapper = styled("section")(() => ({
  width: "100%",
  height: "500px",
  background: "#E9EAEF",

  ".slick-dots li.slick-active button:before": {
    color: "#CB11AB",
    fontSize: "14px",
  },
  ".slick-dots li button:before": {
    color: "#CB11AB",
    fontSize: "8px",
  },
}));

const WrapperStyled = styled("div")(() => ({
  width: "100%",
  height: "100%",
  position: "relative",
  ".container": {
    width: "500px",
    position: "absolute",
    left: "100px",
  },
}));
const StyledImg = styled("img")(() => ({
  height: "500px",
  width: "100%",
  objectFit: "cover",
  aspectRatio: "3/2",
  mixBlendMode: "color-burn",
}));
