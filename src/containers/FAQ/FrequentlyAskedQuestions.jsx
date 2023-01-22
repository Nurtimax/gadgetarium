import { Container, styled, Typography } from "@mui/material";
import AccordionComponents from "../../components/UI/AccordionComponents";
import { title } from "../../utils/constants/listQuestions";
import { useToggle } from "../../hooks/useToggle";

const FrequentlyAskedQuestions = () => {
  const [expanded, setExpanded] = useToggle(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <FAQStyled>
      <Container className="faq-container">
        <Typography variant="h5" component="h1">
          FAQ
        </Typography>
      </Container>
      <Container className="accordion-container">
        <Typography variant="body2" component="p" className="general-text">
          Часто задаваемые вопросы
        </Typography>
        {title.map((item) => (
          <AccordionComponents
            key={item.number}
            {...item}
            expanded={expanded}
            onChange={handleChange(item.panel)}
            className="accordion"
          />
        ))}
      </Container>
    </FAQStyled>
  );
};

export default FrequentlyAskedQuestions;

const FAQStyled = styled("div")(() => ({
  fontFamily: "Inter",
  backgroundColor: "#f4f4f4",
  "& .faq-container": {
    padding: "1rem 0",
    borderBottom: "1px solid #CDCDCD",
    "& h1": {
      fontFamily: "Ubuntu",
      fontWeight: "500",
      fontSize: "2rem",
      lineHeight: "2rem",
    },
  },
  "& .accordion-container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    padding: "4rem",
    "& .general-text": {
      fontWeight: "700",
      fontSize: "2rem",
      lineHeight: "110%",
      padding: "2rem",
      textAlign: "center",
    },
  },
}));
