import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
} from "@mui/material";
import { ArrowLeftIcon } from "../../assets";

const AccordionComponents = ({
  expanded,
  onChange,
  panel,
  number,
  question,
  text,
  ...props
}) => {
  return (
    <StyledAccordion
      expanded={expanded === panel}
      onChange={onChange}
      {...props}
    >
      <AccordionSummaryStyled
        classes={{
          root: "summary",
          expanded: "expanded",
          expandIconWrapper: "expandIconWrapper",
        }}
        expandIcon={<ArrowLeftIcon />}
      >
        <Box
          className={
            expanded === panel ? "icon-number open" : "icon-number close"
          }
        >
          {number}
        </Box>
        <Typography className="title" component="span" variant="body1">
          {question}
        </Typography>
      </AccordionSummaryStyled>
      <AccordionDetailsStyled>
        <Typography className="text" component="p" variant="body1">
          {text}
        </Typography>
      </AccordionDetailsStyled>
    </StyledAccordion>
  );
};

export default AccordionComponents;

const StyledAccordion = styled(Accordion)(() => ({
  "&.MuiAccordion-root": {
    width: "100%",
  },
}));

const AccordionSummaryStyled = styled(AccordionSummary)(() => ({
  fontFamily: "Inter",
  height: "80px",
  borderRadius: "100px",

  "&.summary div": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  "& .expandIconWrapper.expanded": {
    transform: "rotate(-90deg)",
  },
  "& .title": {
    fontWeight: "600",
    fontSize: "18px",
    fontFamily: "Inter",
  },
  "& .icon-number": {
    width: "42px",
    height: "40px",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "700",
  },
  "& .icon-number.close": {
    backgroundColor: "#fae8f7",
    color: " #CB11AB",
  },
  "& .icon-number.open": {
    backgroundColor: " #CB11AB",
    color: "#FFFFFF",
  },
}));
const AccordionDetailsStyled = styled(AccordionDetails)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  "& .text": {
    width: "92%",
  },
}));
