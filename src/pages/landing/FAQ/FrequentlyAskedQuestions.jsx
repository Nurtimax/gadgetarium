import { Container, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import AccordionComponents from "./AccordionComponents";
import { title } from "./listQuestions";

const FrequentlyAskedQuestions = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <FAQStyled>
      <Container className="faq-container">
        <Typography variant="h5" component="h1">
          FAQ
        </Typography>
        <div>a</div>
      </Container>
      <Container className="accordion-container">
        <p className="general-text">Часто задаваемые вопросы</p>
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
    padding: "18px 0",
    borderBottom: "1px solid #CDCDCD",
    "& h1": {
      fontFamily: "Ubuntu",
      fontWeight: "500",
      fontSize: "30px",
      lineHeight: "33px",
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
      fontSize: "28px",
      lineHeight: "110%",
      padding: "2rem",
      textAlign: "center",
    },
  },
}));
