import { styled } from "@mui/material";
import numberIcon from "../../assets/icons/Vector.svg";
import messageIcon from "../../assets/icons/icon.svg";
import gpsIcon from "../../assets/icons/icon (1).svg";
import clockIcon from "../../assets/icons/clock.svg";
import logo from "../../assets/icons/Group 337505 (1).svg";
const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <BoxContainer>
          <BoxBlock>
            <Box>
              <li>
                <Title> Каталог</Title>
              </li>
              <li>Смартфоны</li>
              <li> Ноутбуки и планшеты</li>
              <li> Смарт-часы и браслеты</li>
              <li>Аксессуары</li>
            </Box>
            <Box>
              <li>
                <Title> Будь с нами </Title>
              </li>
              <li>Акции</li>
              <li>Новинки</li>
              <li>Популярные котегории</li>
            </Box>

            <Box>
              <li>
                <Title> Помощь и сервисы </Title>
              </li>
              <li>О магазине</li>
              <li>Доставка</li>
              <li>FAQ</li>
              <li>Контакты</li>
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
              <li>
                <Icons src={numberIcon} />
                <p> +996 (400) 00 00 00</p>
              </li>
              <li>
                <Icons src={messageIcon} />
                <p> Gadgetarium.kg </p>
              </li>
              <div>
                <Icons src={gpsIcon} />
                <li> г.Бишкек, ул. Гражданская 119 </li>
              </div>
              <div>
                <Icons src={clockIcon} />
                <li> С 10:00 до 21:00 (без выходных) </li>
              </div>
            </Contacts>
          </ContactsBox>
        </BoxContainer>
        <FooterBox>
          <Block src={logo} />
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
  max-width: 1430px;
  margin-left: auto;
  margin-right: auto;
  /* height: 600px; */
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
  /* height: 95px; */
  display: flex;
  flex-direction: column;
  margin-top: 61px;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #858fa4;
`;

const Title = styled("span")`
  color: #ffffff;
  margin-bottom: 15px;
  cursor: pointer;
`;
const Box = styled("ul")`
  white-space: nowrap;
  /* height: 138px; */
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
const Icons = styled("img")`
  width: 20px;
  height: 20px;
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
const Block = styled("img")`
  padding-top: 31px;
`;
