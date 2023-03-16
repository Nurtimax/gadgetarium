import { Container, InputLabel, styled, Typography } from "@mui/material";
import ReactInputMask from "react-input-mask";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import { contactsData, URLMAP } from "../../utils/constants";

const Contacts = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ContainerPage>
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
              {contactsData.map((data, i) => (
                <ContainerEachData key={i}>
                  <DataGadgetariumTitle variant="h1" component="h5">
                    {data.title}
                  </DataGadgetariumTitle>
                  <DataGadgetariumTitleValue variant="h1" component="h5">
                    {data.value}
                  </DataGadgetariumTitleValue>
                </ContainerEachData>
              ))}
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
                <StyledInputMask
                  mask="+996(999)99-99-99"
                  placeholder="+996 (_ _ _) _ _  _ _  _ _"
                />
              </ContainerInput>
            </ContainerInputSeperating>
            <>
              <ContainerTextarea>
                <TextareaTitle variant="h1" component="h5">
                  Сообщение
                </TextareaTitle>
                <StyledTextarea placeholder="Напишите сообщение" />
              </ContainerTextarea>
              <StyledButton type="submit" onClick={onSubmit}>
                отправить
              </StyledButton>
            </>
          </FormMainContainer>
        </ContainerSeparating>
        <iframe src={URLMAP} width="100%" height="400" />
      </Container>
    </ContainerPage>
  );
};

export default Contacts;

const ContainerPage = styled("div")`
  background-color: #f4f4f4;
  padding-bottom: 120px;
`;

const ContainerSeparating = styled("form")`
  display: flex;
  justify-content: space-between;
`;

const FormMainContainer = styled("div")`
  padding: 60px 0 120px;
`;

const FormMainTitle = styled(Typography)`
  padding-bottom: 40px;
  font-family: "Inter";
  font-weight: 700;
  font-size: 24px;
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
  font-weight: 400;
  font-size: 16px;
  color: #384255;
  &::after {
    content: " *";
    color: red;
  }
`;

const StyledInput = styled(Input)(() => ({
  width: "338px",
  height: "48px",
  backgroundColor: "#ffff !important",
}));

const StyledInputMask = styled(ReactInputMask)(() => ({ theme }) => ({
  backgroundColor: "#ffff !important",
  width: "338px",
  height: "48px",
  "&": {
    border: `0.1px solid ${theme.palette.grey[900]}`,
    background: `${theme.palette.background.default}`,
    borderRadius: "5px",
    padding: "0 10px",
  },
  "&:focus": {
    border: `0.1px solid ${theme.palette.secondary.main}`,
    background: `${theme.palette.background.default}`,
    borderRadius: "5px",
    color: `${theme.palette.primary.dark}`,
    outline: "none",
  },
}));

const TextareaTitle = styled(Typography)`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
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
  textTransform: "uppercase",
  color: "#FFFFFF !important",
  width: "100%",
  height: "47px",
}));

const HeaderTitle = styled(Typography)`
  padding-top: 30px;
  padding-bottom: 20px;
  font-family: "Ubuntu";
  font-weight: 500;
  font-size: 30px;
  color: #292929;
  border-bottom: 1px solid #cdcdcd;
`;

const ContainerAboutShop = styled("div")`
  padding: 141px 0 195px;
`;

const AboutShopTitle = styled(Typography)`
  padding-bottom: 47px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 24px;
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
  font-weight: 700;
  font-size: 18px;
  color: #292929;
`;

const DataGadgetariumTitleValue = styled(Typography)`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  color: #292929;
`;
