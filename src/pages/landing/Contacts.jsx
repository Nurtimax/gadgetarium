import { Container, InputLabel, styled, Typography } from "@mui/material";
import React from "react";
import { BishkekMapImage } from "../../assets";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";

const Contacts = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Container>
        <HeaderTitle variant="h1" component="h5">
          Контакты
        </HeaderTitle>
        <ContainerSeparating>
          <ContainerAboutShop>
            <AboutShopTitle variant="h1" component="h5">
              Магазин Gadgetarium
            </AboutShopTitle>

            <ContainerDataGadgetarium>
              <ContainerEachData>
                <DataGadgetariumTitle variant="h1" component="h5">
                  Адрес:
                </DataGadgetariumTitle>
                <DataGadgetariumTitleValue variant="h1" component="h5">
                  г. Бишкек, ул. Гражданская 119
                </DataGadgetariumTitleValue>
              </ContainerEachData>
              <ContainerEachData>
                <DataGadgetariumTitle variant="h1" component="h5">
                  Телефон:
                </DataGadgetariumTitle>
                <DataGadgetariumTitleValue variant="h1" component="h5">
                  г+996(400) 00-00-00
                </DataGadgetariumTitleValue>
              </ContainerEachData>
              <ContainerEachData>
                <DataGadgetariumTitle variant="h1" component="h5">
                  Почта:
                </DataGadgetariumTitle>
                <DataGadgetariumTitleValue variant="h1" component="h5">
                  Gadgetarium.kg
                </DataGadgetariumTitleValue>
              </ContainerEachData>
              <ContainerEachData>
                <DataGadgetariumTitle variant="h1" component="h5">
                  Режим работы:
                </DataGadgetariumTitle>
                <DataGadgetariumTitleValue variant="h1" component="h5">
                  10:00 - 21:00
                </DataGadgetariumTitleValue>
              </ContainerEachData>
            </ContainerDataGadgetarium>
          </ContainerAboutShop>

          <FormMainContainer>
            <FormMainTitle variant="h1" component="h5">
              Напишите нам
            </FormMainTitle>
            <ContainerInputSeperating>
              <ContainerInput>
                <LabelInput>Имя</LabelInput>
                <StyledInput placeholder="Напишите ваше имя" />
              </ContainerInput>
              <ContainerInput>
                <LabelInput>Фамилия</LabelInput>
                <StyledInput placeholder="Напишите вашу фамилию" />
              </ContainerInput>
              <ContainerInput>
                <LabelInput>E-mail</LabelInput>
                <StyledInput placeholder="Напишите ваш email" />
              </ContainerInput>
              <ContainerInput>
                <LabelInput>Телефон</LabelInput>
                <StyledInput placeholder="+996 (_ _ _) _ _  _ _  _ _" />
              </ContainerInput>
            </ContainerInputSeperating>
            <ContainerTextarea>
              <TextareaTitle variant="h1" component="h5">
                Сообщение
              </TextareaTitle>
              <StyledTextarea placeholder="Напишите сообщение" />
            </ContainerTextarea>
            <StyledButton>отправить</StyledButton>
          </FormMainContainer>
        </ContainerSeparating>
        <StyleBishkekImage />
      </Container>
    </div>
  );
};

export default Contacts;

// Style

const ContainerSeparating = styled("div")`
  display: flex;
  justify-content: space-between;
`;

// Form Style__________________________________________________________________________

const FormMainContainer = styled("div")`
  padding: 60px 0 120px;
`;

const FormMainTitle = styled(Typography)`
  padding-bottom: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 110%;
  color: #292929;
`;

const ContainerInputSeperating = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding-bottom: 12px;
`;

const ContainerInput = styled("span")`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LabelInput = styled(InputLabel)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #384255;
  &::after {
    content: " *";
    color: red;
  }
`;

const StyledInput = styled(Input)(() => ({
  width: "338px",
  height: "48px",
}));

const TextareaTitle = styled(Typography)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #384255;
  padding-bottom: 6px;
`;

const StyledTextarea = styled("textarea")(({ theme }) => ({
  width: "685px",
  height: "150px",
  resize: "none",
  padding: "12px 10px",
  background: "#FFFFFF",
  border: "1px solid #CDCDCD",
  borderRadius: "6px",
  outline: "none",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "1rem",
  lineHeight: "150%",
  color: "#91969E",
  " &:focus": {
    border: `0.1px solid ${theme.palette.secondary.main}`,
    background: `${theme.palette.background.default}`,
    borderRadius: "5px",
    color: `${theme.palette.primary.dark}`,
  },
}));

const ContainerTextarea = styled("div")`
  padding-bottom: 24px;
`;

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#CB11AB",
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  textTransform: "uppercase",
  color: "#FFFFFF !important",
  width: "100%",
  height: "47px",
}));

const StyleBishkekImage = styled(BishkekMapImage)`
  width: 100%;
`;

// Form Style________________________________________________________________________

// Data Style|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const HeaderTitle = styled(Typography)`
  padding-top: 30px;
  padding-bottom: 20px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 110%;
  color: #292929;
  border-bottom: 1px solid #cdcdcd;
`;

const ContainerAboutShop = styled("div")`
  padding: 141px 0 195px;
`;

const AboutShopTitle = styled(Typography)`
  padding-bottom: 47px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 110%;
  color: #292929;
`;

const ContainerDataGadgetarium = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContainerEachData = styled("span")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DataGadgetariumTitle = styled(Typography)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 110%;
  color: #292929;
`;

const DataGadgetariumTitleValue = styled(Typography)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  color: #292929;
`;

// Data Style|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
