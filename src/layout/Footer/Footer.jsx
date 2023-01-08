import { styled } from "@mui/material";
import { Typography } from "@mui/material";
import { ClockIcon, Logo, Phone, Message, Locotion } from "../../assets";
const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <BoxContainer>
          <BoxBlock>
            <Box>
              <Typography variant="body1" component="p">
                <Title> Каталог</Title>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                Смартфоны
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                Ноутбуки и планшеты
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                Смарт-часы и браслеты
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                Аксессуары
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" component="p">
                <Title> Будь с нами </Title>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                Акции
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                Новинки
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                Популярные котегории
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" component="p">
                <Title> Помощь и сервисы </Title>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                О магазине
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                Доставка
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                FAQ
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                Контакты
              </Typography>
            </Box>
          </BoxBlock>
          <ContactsBox>
            <FooterFormBlock>
              <Title> Расскажем об акциях и скидках </Title>

              <input type="email" />
              <button>Подписаться</button>
              <p>
                Нажимая на кнопку «подписаться» Вы соглашаетесь на обработку
                персональных данных
              </p>
            </FooterFormBlock>
            <Contacts>
              <Typography component="li" variant="body1" color="inherit">
                <Phone />
                <Typography variant="body1" component="p">
                  +996 (400) 00 00 00
                </Typography>
              </Typography>
              <Typography component="li" variant="body1" color="inherit">
                <Message />
                <Typography variant="body1" component="p">
                  Gadgetarium.kg
                </Typography>
              </Typography>
              <div>
                <Locotion />
                <Typography component="li" variant="body1" color="inherit">
                  г.Бишкек, ул. Гражданская 119{" "}
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
          <Logo />
          <FooterBlock>
            © 2022 Gadgetarium. Интернет магазин Все права защищены.
          </FooterBlock>
        </FooterBox>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled("footer")(() => ({
  width: "100%",
  background: "#1a1a25",
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
  "& input": {
    width: "50%",
    display: "inline",
  },
  "& button": {
    display: "inline",
  },
  "& p": {
    marginTop: "10px",
    lineHeight: "20px",
    color: "#ffffff",
    fontSize: "14px",
    width: "350px",
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
