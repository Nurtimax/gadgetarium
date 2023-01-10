import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, styled, Typography } from "@mui/material";
import { IconNext, IconPrev, ImageKyrgyzstanKart } from "../../assets";
import { dataDigitalBestSeller } from "../../utils/constants";
import { useState } from "react";

function SampleNextArrow({ onClick, style, className }) {
  return (
    <IconNext
      onClick={onClick}
      className={className}
      style={{
        ...style,
        position: "absolute",
        width: "50px",
        height: "50px",
        bottom: "140px",
        right: "29%",
      }}
    />
  );
}

function SamplePrevArrow({ onClick, style, className }) {
  return (
    <IconPrev
      onClick={onClick}
      className={className}
      style={{
        ...style,
        position: "absolute",
        width: "50px",
        height: "50px",
        top: "167.5px",
        left: "29%",
        zIndex: "1",
      }}
    />
  );
}

const AboutStore = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinity: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <BoxMain>
      <Title variant="h3" component="h5">
        О магазине
      </Title>
      <MainContainer>
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item, index) => (
            <div
              key={index}
              className={index === slideIndex ? "slide slide-active" : "slide"}
            >
              <ImageBox src={item} alt="photos" />
            </div>
          ))}
        </Slider>
      </MainContainer>
      <ContainerText>
        <StoreGadgetariumTitle variant="h4" component="h5">
          Магазин Gadgetarium
        </StoreGadgetariumTitle>
        <UlList>
          <li>
            слаженная команда людей, любящих спорт и здоровый образ жизни
            знающих свое дело и ориентирующихся <br /> во всех нюансах фитнес
            оборудования;
          </li>
          <li>
            широкая номенклатура качественной продукции ведущих мировых брендов
            с огромным выбором товаров в <br /> наличии;
          </li>
          <li>
            склад запчастей для обеспечения качественного сервиса и
            бесперебойной работы оборудования;
          </li>
          <li>
            полный послепродажный сервис с информационной и технической
            поддержкой;
          </li>
          <li>строгое соблюдение всех обязательств перед партнерами;</li>
          <li>
            отличные цены и эксклюзивные условия для постоянных партнеров.
          </li>
        </UlList>

        <StoreGadgetariumTitle>
          В чем причина нашего успеха?
        </StoreGadgetariumTitle>
        <BoxText>
          Развитие цифровых технологий привело к тому, что рациональное
          отношение человека к своему времени стало <br /> ведущим трендом,
          определяющим то, как ведут себя потребители. Именно по этой <br />{" "}
          причине те сервисы, которые дают возможность использовать время
          наиболее оптимально, становятся востребованными: <br /> выгул собак,
          уборка дома, каршеринг. Все эти появившиеся за последнее время сервисы
          не что иное, как отражение этого <br /> тренда. Этот запрос
          распространяется даже на состав продуктов и их упаковку. Среди ярких
          примеров — напитки, <br />
          содержащие все необходимые питательные вещества и повышенное
          количество
        </BoxText>
        <br />
        <BoxText>
          Ассортимент cамая распространенная ошибка — копирование
          офлайн-ассортимента. Нельзя взять бестселлеры <br /> из офлайн и
          перенести их в онлайн. Они не повторят своего успеха. У многих есть
          <br /> иллюзия, что онлайн-полка бесконечна, но на самом деле она
          намного уже, чем, например, в супермаркете. Все чаще <br />
          выбор товаров происходит со смартфона, и если в магазине вы видите на
          полке 100 или 200 категорий товаров, то в <br /> интернете
          пользователи готовы просматривать всего 10–20 из них. Чтобы покупатель
          обратил внимание <br /> именно на вас, придется постараться.
        </BoxText>

        <LastContainer>
          <div>
            <StoreGadgetariumTitle>Мы сегодня - это:</StoreGadgetariumTitle>

            <BoxText>
              Информированность и доступ к информации в любой момент <br />
              времени – становится особой ценностью на сегодняшний день. <br />
              одной стороны, быть все время на связи нам помогают <br />{" "}
              постоянно совершенствующиеся другие гаджеты.
            </BoxText>
            <br />
            <BoxText>
              В наше время Интернет приобретает колоссальные масштабы. <br />
              Современный человек, который не хочет отставать от <br /> жизни,
              уже не представляет работу на компьютере без <br /> Интернета. С
              его помощью пользователь может <br /> общаться и получать нужную
              информацию. Существует <br /> большой выбор телекоммуникационных
              компаний <br /> с различными условиями обслуживания.
            </BoxText>
          </div>

          <ImageKyrgyzstanKart />
        </LastContainer>
      </ContainerText>
    </BoxMain>
  );
};

export default AboutStore;

// Style

const BoxMain = styled("div")`
  width: 100%;
  max-width: 1424px;
  margin: 0 auto;
`;

const ContainerText = styled(Container)`
  padding-left: 195px;
`;

const MainContainer = styled("div")`
  width: 90%;
  height: 330px;
  .slide {
    transform: scale(0.9);
    transition: 0.5;
    filter: brightness(0.3);
    outline: none;
  }

  .slide-active {
    filter: brightness(1);
    transform: scale(1);
    outline: none;
  }
`;

const ImageBox = styled("img")`
  width: 100%;
  height: 330px;
`;

const Title = styled(Typography)`
  color: #292929;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 110%;
  border-bottom: 1px solid #cdcdcd;
  padding-bottom: 20px;
  margin-left: 155px;
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-start;
  width: 59vw;
`;

const StoreGadgetariumTitle = styled(Typography)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 120%;
  color: #292929;
  padding-top: 60px;
  padding-bottom: 24px;
  display: flex;
  justify-content: flex-start;
`;

const UlList = styled("ul")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding-left: 20px;
`;

const BoxText = styled("div")`
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

const LastContainer = styled("div")`
  display: flex;
`;
