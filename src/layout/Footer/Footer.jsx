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

const FooterStyled = styled("footer")`
  width: 100%;
  background: #1a1a25;
`;

const FooterContainer = styled("div")`
  padding: 60px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: auto;
`;
const BoxContainer = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const BoxBlock = styled("div")`
  display: flex;
  height: 300px;
  gap: 120px;
  margin-right: 50px;
`;
const ContactsBox = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FooterBox = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 61px;
  align-items: center;
  border-top: 1px solid #858fa4;
`;

const Title = styled("span")`
  color: #ffffff;
  margin-bottom: 15px;
  cursor: pointer;
`;
const Box = styled("ul")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
  li {
    color: #858fa4;
    text-decoration: none;
    list-style: none;
  }
  li:hover {
    color: #ffffff;
    transition: 0.4s;
    cursor: pointer;
  }
`;
const Contacts = styled("div")`
  width: 300px;
  height: 132px;
  color: #858fa4;
  display: flex;
  flex-direction: column;
  align-items: centers;
  gap: 18px;
  div {
    display: flex;
    gap: 15px;
  }
  li {
    font-weight: 400;
    font-size: 14px;
    text-decoration: none;
    color: #858fa4;
    display: flex;
    gap: 15px;
  }
  div {
    color: #858fa4;
    line-height: 23px;
  }
`;

const FooterFormBlock = styled("div")`
  height: 136px;
  color: #858fa4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & input {
    width: 100px;
    display: inline;
  }
  & button {
    display: inline;
  }
  p {
    margin-top: 10px;
    line-height: 20px;
    color: #ffffff;
    font-size: 14px;
    width: 360px;
  }
`;

const FooterBlock = styled("p")`
  width: 278px;
  height: 40px;
  font-size: 14px;
  color: #858fa4;
  line-height: 20px;
  text-align: center;
`;
