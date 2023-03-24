import { Box, Container, styled, Typography } from "@mui/material";
import AccordionComponents from "../../components/UI/AccordionComponents";
import { title } from "../../utils/constants/listQuestions";
import { useState } from "react";

const FrequentlyAskedQuestions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <FAQStyled>
      <Box className="faq-container">
        <Typography variant="h5" component="h1">
          FAQ
        </Typography>
      </Box>
      <Box className="accordion-container">
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
      </Box>
    </FAQStyled>
  );
};

export default FrequentlyAskedQuestions;

const FAQStyled = styled(Container)(() => ({
  width: "100%",
  fontFamily: "Inter",
  backgroundColor: "#f4f4f4",
  minHeight: "500px",

  "&.MuiAccordion-root": {
    width: "100%",
  },

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
