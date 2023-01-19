import { Container, styled } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { img_banner } from "../assets/images";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <StyledWrapper>
      <StyledContainer>
        <Slider {...settings}>
          {img_banner.map((image) => (
            <WrapperStyled key={image.id}>
              <div className="container">
                <Styled_H3>GATGETARIUM</Styled_H3>
                <Styled_H1>{image.title}</Styled_H1>
                <Styled_H2>{image.desctop}</Styled_H2>
              </div>
              <StyledImg src={image.url} alt={image.id}></StyledImg>
            </WrapperStyled>
          ))}
        </Slider>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Banner;

const StyledWrapper = styled("section")(() => ({
  width: "100%",
  height: "500px",
  background: "#E9EAEF",
}));

const StyledContainer = styled(Container)(() => ({
  width: "100%",
  position: "relative",

  ".slick-arrow": {
    position: "absolute",
    top: "80%",
    right: "50px",
  },
  ".slick-prev": {
    position: "absolute",
    top: "80%",
    left: "85%",
    zIndex: "10",
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
}));

const Styled_H3 = styled("h3")(() => ({
  fontWeight: " 900",
  fontSize: "24px",
  color: "#CB11AB",
  margin: "92px 0 24px 0",
}));
const Styled_H1 = styled("h1")(() => ({
  fontFamily: "'Thasadith', sans-serif;",
  fontStyle: "normal",
  fontWeight: "900",
  fontSize: "50px",
}));
const Styled_H2 = styled("h2")(() => ({
  fontWeight: "400",
  fontSize: "50px",
}));
