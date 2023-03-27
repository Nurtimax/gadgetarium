import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconNext, IconPrev } from "../../assets";
import { Box, Container, styled, Typography } from "@mui/material";
import Map from "../../assets/images/kyrgyzstan's-map.jpg";
import { dataAboutStore, dataDigitalBestSeller } from "../../utils/constants";
import { animateScroll as Scroll } from "react-scroll";

const SampleNextArrow = ({ onClick, style, className }) => {
  return (
    <IconNext
      onClick={onClick}
      className={className}
      style={{
        ...style,
        position: "absolute",
        width: "50px",
        height: "50px",
        right: "13%",
      }}
    />
  );
};

const SamplePrevArrow = ({ onClick, style, className }) => {
  return (
    <IconPrev
      onClick={onClick}
      className={className}
      style={{
        ...style,
        position: "absolute",
        width: "50px",
        height: "50px",
        left: "13%",
        zIndex: "1",
      }}
    />
  );
};

const AboutStore = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    Scroll.scrollTo(0);
  }, []);

  const settings = {
    infinity: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <BoxMain>
      <TitleAboutStore variant="h3" component="h5">
        О магазине
      </TitleAboutStore>

      <SliderContainer>
        <Slider {...settings} variableWidth={true}>
          {dataDigitalBestSeller.map((item, index) => (
            <div
              key={index}
              className={index === slideIndex ? "slide slide-active" : "slide"}
            >
              <Image src={item} />
            </div>
          ))}
        </Slider>
      </SliderContainer>

      <ContainerText>
        <div>
          <SubTitleAboutStore variant="h4" component="h5">
            Магазин Gadgetarium
          </SubTitleAboutStore>
          <ContainerUl>
            {dataAboutStore.textLi.map((obj, i) => (
              <li key={i}>{obj.li}</li>
            ))}
          </ContainerUl>
        </div>
        <BigTextContainer>
          <SubTitleAboutStore variant="h4" component="h5">
            В чем причина нашего успеха?
          </SubTitleAboutStore>

          {dataAboutStore.textTwoBigText.map((obj, i) => (
            <BigAllText key={i}>{obj.text}</BigAllText>
          ))}
        </BigTextContainer>
        <div>
          <SubTitleAboutStore variant="h1" component="h5">
            Мы сегодня - это:
          </SubTitleAboutStore>
          <LastContainer>
            <BigTextContainer>
              {dataAboutStore.textThreeBigText.map((obj, i) => (
                <BigAllText key={i}>{obj.text}</BigAllText>
              ))}
            </BigTextContainer>
            <img src={Map} alt="map" />
          </LastContainer>
        </div>
      </ContainerText>
    </BoxMain>
  );
};

export default AboutStore;

const BoxMain = styled(Box)`
  min-height: 500px;
  width: 100%;
  max-width: 1424px;
  margin-top: 30px;
  margin-bottom: 119.63px;
`;

const TitleAboutStore = styled(Typography)`
  margin-bottom: 40px;
  padding-bottom: 20px;
  font-family: "Ubuntu";
  font-weight: 500;
  font-size: 1.8rem;
  border-bottom: 1px solid #cdcdcd;
  color: #292929;
  margin-left: 55px;
`;

const SliderContainer = styled("div")`
  width: 98.7vw;

  .slide {
    filter: brightness(0.3);
    outline: none;
  }

  .slide-active {
    filter: brightness(1);
    outline: none;
  }

  .slick-slide {
    width: 60vw;
  }

  .slick-center {
    width: 60vw;
    padding: 0 20px;
  }

  .slick-slider {
    height: 60vh;
  }

  .slick-list {
    height: 70vh;
  }
`;

const Image = styled("div")`
  width: 100%;
  height: 80vh;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContainerText = styled(Container)`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const SubTitleAboutStore = styled(Typography)`
  padding-bottom: 24px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 1.25rem;
  color: #292929;
`;

const ContainerUl = styled("ul")`
  padding-left: 25px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  color: #292929;
`;

const BigTextContainer = styled("div")`
  & div:first-of-type {
    padding-bottom: 25px;
  }
`;

const BigAllText = styled("div")`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  color: #292929;
`;

const LastContainer = styled("div")`
  display: flex;
  gap: 48px;
  & img:last-of-type {
    width: 500px;
    height: 250px;
    mix-blend-mode: multiply;
  }
`;
