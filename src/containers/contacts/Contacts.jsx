import { Container, InputLabel, styled, Typography } from "@mui/material";
import { useFormik } from "formik";
import { PatternFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import { postContacts } from "../../redux/slices/contacts";
import { contactsData, URLMAP } from "../../utils/constants";
import { showErrorss } from "../../utils/helpers/catch-signup";
import { contactsValidationSchema } from "../../utils/helpers/validate";
import { animateScroll as Scroll } from "react-scroll";
import { useEffect } from "react";

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    Scroll.scrollTo(0);
  }, []);

  const onSubmit = (values) => {
    const phoneNumber = values.phoneNumber
      .split("-")
      .join("")
      .split("(")
      .join("")
      .split(")")
      .join("");

    const requestData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber,
      text: values.text,
    };

    dispatch(postContacts(requestData)).then(() => {
      navigate("/");
    });
  };

  const { handleSubmit, values, handleChange, errors, isSubmitting } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        text: "",
      },
      onSubmit,
      validationSchema: contactsValidationSchema,
      validateOnChange: false,
    });

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

          <FormMainContainer onSubmit={handleSubmit}>
            <FormMainTitle variant="h1" component="h5">
              Напишите нам
            </FormMainTitle>
            <ContainerInputSeperating>
              <ContainerInput>
                <LabelInput htmlFor="firstName">Имя</LabelInput>
                <StyledInput
                  placeholder="Напишите ваше имя"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  id="firstName"
                />
              </ContainerInput>
              <ContainerInput>
                <LabelInput htmlFor="lastName">Фамилия</LabelInput>
                <StyledInput
                  placeholder="Напишите вашу фамилию"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  id="lastName"
                />
              </ContainerInput>
              <ContainerInput>
                <LabelInput htmlFor="email">E-mail</LabelInput>
                <StyledInput
                  name="email"
                  placeholder="Напишите ваш email"
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                />
              </ContainerInput>
              <ContainerInput>
                <LabelInput htmlFor="phoneNumber">Телефон</LabelInput>
                <StyledInputMask
                  format="+996 (###) ### ###"
                  mask="_"
                  placeholder="+996(_ _ _) _ _  _ _  _ _"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  name="phoneNumber"
                  id="phoneNumber"
                />
              </ContainerInput>
            </ContainerInputSeperating>
            <>
              <ContainerTextarea>
                <TextareaTitle variant="h1" component="h5">
                  Сообщение
                </TextareaTitle>
                <StyledTextarea
                  placeholder="Напишите сообщение"
                  value={values.text}
                  onChange={handleChange}
                  name="text"
                  id="text"
                />
              </ContainerTextarea>

              {showErrorss(errors) && (
                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "10px",
                  }}
                  color="error"
                >
                  {showErrorss(errors)}
                </Typography>
              )}

              <StyledButton type="submit" disabled={isSubmitting}>
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
  min-height: 500px;
`;

const ContainerSeparating = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const FormMainContainer = styled("form")`
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

const StyledInputMask = styled(PatternFormat)(() => ({ theme }) => ({
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
  border: `1px solid  ${theme.palette.grey[900]}`,
  borderRadius: "6px",
  outline: "none",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "1rem",
  " &:focus": {
    border: `0.1px solid ${theme.palette.secondary.main}`,
    borderRadius: "5px",
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
