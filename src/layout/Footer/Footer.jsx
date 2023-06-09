import { styled } from "@mui/material";
import { Typography, CssBaseline } from "@mui/material";
import { ClockIcon, Logo, Phone, Message, Locotion } from "../../assets";
import Input from "./../../components/UI/input/Input";
import Button from "./../../components/UI/button/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import { Link as Scroll } from "react-scroll";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useDispatch } from "react-redux";
import { postEmail } from "../../redux/slices/subscribe-slice";

const Footer = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const [searchTerm] = useDebounce(value, 1000);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postEmail({ email: searchTerm }));

    setValue("");
  };

  return (
    <FooterStyled>
      <CssBaseline />

      <FooterContainer>
        <BoxContainer>
          <BoxBlock>
            <Box>
              <Typography variant="body1" component="p">
                <Title>Каталог</Title>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Link to="item/1">Смартфоны</Link>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Link to="item/2">Ноутбуки</Link>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Link to="item/3">Планшеты</Link>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Link to="item/4">Смарт-часы и браслеты</Link>
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" component="p">
                <Title> Будь с нами </Title>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Scroll to="Promotion" smooth={true}>
                  Акции
                </Scroll>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Scroll to="New" smooth={true}>
                  Новинки
                </Scroll>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Scroll to="Recomendation" smooth={true}>
                  Рекомендуемые
                </Scroll>
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" component="p">
                <Title> Помощь и сервисы </Title>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Link to={ROUTES.ABOUTSTORE}>О магазине</Link>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Link to={ROUTES.DELIVERY}>Доставка</Link>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Link to={ROUTES.FAG}>FAQ</Link>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Link to={ROUTES.CONTACTS}>Контакты</Link>
              </Typography>
            </Box>
          </BoxBlock>
          <ContactsBox>
            <FooterFormBlock>
              <Title> Расскажем об акциях и скидках </Title>
              <Typography
                component="form"
                className="container-form"
                onSubmit={handleSubmit}
              >
                <StyledInput className="int">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </StyledInput>

                <StyledBtn className="btn">
                  <Button
                    width="130px"
                    height="33px"
                    type="submit"
                    variant="contained"
                  >
                    Подписаться
                  </Button>
                </StyledBtn>
              </Typography>

              <p>
                Нажимая на кнопку «подписаться» Вы соглашаетесь <br /> на
                обработку персональных данных
              </p>
            </FooterFormBlock>
            <Contacts>
              <Typography component="li" variant="body1" color="inherit">
                <Phone />
                <Typography variant="body1" component="p">
                  <a href="tel:+996703717797">+996 (400) 00 00 00</a>
                </Typography>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Message />
                <Typography variant="body1" component="p">
                  <a href="mailto:gadgetariumph@gmail.com ">Gadgetarium.kg</a>
                </Typography>
              </Typography>
              <div>
                <Locotion />
                <Typography component="li" variant="body1" color="inherit">
                  <a href="https://go.2gis.com/0u9l3">
                    г.Бишкек, ул. Гражданская 119
                  </a>
                </Typography>
              </div>
              <div>
                <ClockIcon />
                <Typography component="li" variant="body1" color="inherit">
                  С 10:00 до 21:00 (без выходных)
                </Typography>
              </div>
            </Contacts>
          </ContactsBox>
        </BoxContainer>
        <FooterBox>
          <Link to="/">
            <Logo />
          </Link>
          <FooterBlock>
            © 2022 Gadgetarium. Интернет магазин Все права защищены.
          </FooterBlock>
        </FooterBox>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;

const StyledInput = styled("div")(() => ({
  "&.int": {
    background: "white",
    borderRadius: "4px 0px 0px 4px",
  },

  "& .MuiInputBase-root.input.focused": {
    border: "none",
  },
  "& .MuiInputBase-root.input": {
    border: "none",
  },
}));

const StyledBtn = styled("div")(() => ({
  "&.btn": {
    background: "#e20fbe",
    borderRadius: " 0px 4px 4px 0px",
  },
}));

const FooterStyled = styled("footer")(() => ({
  width: "100%",
  background: "#1a1a25",
  minHeight: "500px",
}));

const FooterContainer = styled("div")(() => ({
  padding: "60px 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  marginTop: "auto",
}));

const BoxContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const BoxBlock = styled("div")(() => ({
  display: "flex",
  height: "300px",
  gap: "120px",
  marginRight: "50px",
}));
const ContactsBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
}));
const FooterBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "61px",
  alignItems: "center",
  borderTop: "1px solid #858fa4",
  paddingTop: "20px",
}));

const Title = styled("span")(() => ({
  cursor: "pointer",
  marginBottom: "15px",
  color: "#ffffff",
}));

const Box = styled("ul")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "19px",

  "& li": {
    color: "#858fa4",
    textDecoration: "none",
    listStyle: "none",
  },
  "& li:hover": {
    color: "#ffffff",
    transition: "0.4s",
    cursor: "pointer",
  },
}));

const Contacts = styled("div")(() => ({
  width: "300px",
  height: "132px",
  color: "#858fa4",
  display: "flex",
  flexDirection: "column",
  alignItems: "felex-start",
  gap: "18px",
  "& div": {
    display: "flex",
    gap: "15px",
  },
  "& li": {
    fontWeight: "400",
    fontSize: "14px",
    textDecoration: "none",
    display: "flex",
    gap: "15px",
  },
}));

const FooterFormBlock = styled("div")(() => ({
  height: "135px",
  color: "#858fa4",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  "& .container-form": {
    display: "flex",
  },

  "& p": {
    marginTop: "10px",
    lineHeight: "20px",
    color: "#ffffff",
    fontSize: "14px",
    alignItems: "flex-start",
  },
}));

const FooterBlock = styled("p")(() => ({
  width: "278px",
  height: "40px",
  fontSize: "14px",
  color: "#858fa4",
  lineHeight: "20px",
  textAlign: "center",
  paddingTop: "8px",
}));
