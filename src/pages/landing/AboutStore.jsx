import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled, Typography } from "@mui/material";
import { IconNext, IconPrev, ImageKyrgyzstanKart } from "../../assets";

export const dataDigitalBestSeller = [
  "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero?_a=AJADJWI0",

  "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/t/triangle-strategy-switch/hero?_a=AJADJWI0",

  "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero?_a=AJADJWI0",

  "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?_a=AJADJWI0",

  "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/c/cuphead-switch/hero?_a=AJADJWI0",

  "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/minecraft-switch/hero?_a=AJADJWI0",

  "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/u/unravel-two-switch/hero?_a=AJADJWI0",
];

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
        right: "350px",
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
        top: "113px",
        left: "350px",
        zIndex: "1",
      }}
    />
  );
}

const AboutStore = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    autoplay: true,
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
          {dataDigitalBestSeller.map((item, i) => (
            <Image src={item} alt="image" key={i} />
          ))}
        </Slider>
      </MainContainer>
      <StoreGadgetariumTitle variant="h4" component="h5">
        Магазин Gadgetarium
      </StoreGadgetariumTitle>
      <UlList>
        <li>
          слаженная команда людей, любящих спорт и здоровый образ жизни знающих
          свое дело и ориентирующихся <br /> во всех нюансах фитнес
          оборудования;
        </li>
        <li>
          широкая номенклатура качественной продукции ведущих мировых брендов с
          огромным выбором товаров в <br /> наличии;
        </li>
        <li>
          склад запчастей для обеспечения качественного сервиса и бесперебойной
          работы оборудования;
        </li>
        <li>
          полный послепродажный сервис с информационной и технической
          поддержкой;
        </li>
        <li>строгое соблюдение всех обязательств перед партнерами;</li>
        <li>отличные цены и эксклюзивные условия для постоянных партнеров.</li>
      </UlList>

      <StoreGadgetariumTitle>
        В чем причина нашего успеха?
      </StoreGadgetariumTitle>
      <BoxText>
        Non ultricies sollicitudin nisi quisque. Morbi integer quis tincidunt
        vitae penatibus. Feugiat quis tincidunt volutpat <br /> scelerisque elit
        fermentum nullam rhoncus adipiscing. Sem tortor molestie odio. <br />
        Adipiscing etiam vitae in semper sed eget nec aliquet aliquam. Morbi
        integer quis tincidunt vitae penatibus. Feugiat quis <br /> tincidunt
        volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem
        tortor molestie odio.Adipiscing etiam vitae <br /> in semper sed eget
        nec aliquet aliquam. Morbi integer quis tincidunt vitae penatibus.
        Feugiat quis tincidunt volutpat <br /> scelerisque elit fermentum nullam
        rhoncus adipiscing. Sem tortor molestie odio.
      </BoxText>
      <br />
      <BoxText>
        Non ultricies sollicitudin nisi quisque. Morbi integer quis tincidunt
        vitae penatibus. Feugiat quis tincidunt volutpat <br /> scelerisque elit
        fermentum nullam rhoncus adipiscing. Sem tortor molestie odio. <br />
        Adipiscing etiam vitae in semper sed eget nec aliquet aliquam. Morbi
        integer quis tincidunt vitae penatibus. Feugiat quis <br /> tincidunt
        volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem
        tortor molestie odio.Adipiscing etiam vitae <br /> in semper sed eget
        nec aliquet aliquam. Morbi integer quis tincidunt vitae penatibus.
        Feugiat quis tincidunt volutpat <br /> scelerisque elit fermentum nullam
        rhoncus adipiscing. Sem tortor molestie odio.
      </BoxText>

      <LastContainer>
        <div>
          <StoreGadgetariumTitle>Мы сегодня - это:</StoreGadgetariumTitle>

          <BoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet amet
            <br /> est orci volutpat placerat maecenas egestas augue ac. Tortor,
            sed
            <br />
            magnis interdum massa. Id phasellus lectus dui nisl. Adipiscing{" "}
            <br />
            etiam vitae in semper sed eget nec aliquet aliquam.
          </BoxText>
          <br />
          <BoxText>
            Non ultricies sollicitudin nisi quisque. Morbi integer quis
            tincidunt
            <br />
            vitae penatibus. Feugiat quis tincidunt volutpat scelerisque elit
            <br />
            fermentum nullam rhoncus adipiscing. Sem tortor molestie odio.
            <br />
            Adipiscing etiam vitae in semper sed eget nec aliquet aliquam.
            <br /> Morbi integer quis tincidunt vitae penatibus. Feugiat quis
            tincidunt <br /> volutpat scelerisque elit fermentum nullam rhoncus
            adipiscing. <br />
            Sem tortor molestie odio.
          </BoxText>
        </div>

        <ImageKyrgyzstanKart />
      </LastContainer>
    </BoxMain>
  );
};

export default AboutStore;

// Style

const BoxMain = styled("div")`
  width: 100%;
`;

const MainContainer = styled("div")`
  width: 90%;
  margin: 0 auto;
`;

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled(Typography)`
  color: #292929;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 110%;
  border-bottom: 1px solid #cdcdcd;
  padding-bottom: 20px;
  margin-left: 195px;
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-start;
  width: 1000px;
`;

const StoreGadgetariumTitle = styled(Typography)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: #292929;
  padding-top: 60px;
  padding-bottom: 24px;
  padding-left: 195px;
  display: flex;
  justify-content: flex-start;
`;

const UlList = styled("ul")`
  padding-left: 210px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;

const BoxText = styled("div")`
  padding-left: 195px;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

const LastContainer = styled("div")`
  display: flex;
`;
