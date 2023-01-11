import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography,
} from "@mui/material";
import { ArrowLeftIcon } from "../../../assets";

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
    <div>
      <AccordionStyled
        expanded={expanded === panel}
        onChange={onChange}
        {...props}
      >
        <AccordionSummaryStyled
          classes={{
            expanded: "expanded",
            expandIconWrapper: "expandIconWrapper",
          }}
          expandIcon={<ArrowLeftIcon />}
        >
          <div
            className={
              expanded === panel ? "icon-number-open" : "icon-number-close"
            }
          >
            <p>{number}</p>
          </div>
          <Typography className="title">{question}</Typography>
        </AccordionSummaryStyled>
        <AccordionDetailsStyled>
          <Typography className="text">{text}</Typography>
        </AccordionDetailsStyled>
      </AccordionStyled>
    </div>
  );
};

export default AccordionComponents;
const AccordionStyled = styled(Accordion)(() => ({}));
const AccordionSummaryStyled = styled(AccordionSummary)(() => ({
  fontFamily: "Inter",
  height: "80px",
  borderRadius: "100px",
  "& .expandIconWrapper.expanded": {
    transform: "rotate(-90deg)",
  },
  "& .title": {
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "120%",
    fontFamily: "Inter",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
  },
  "& .icon-number-close": {
    width: "42px",
    height: "40px",
    backgroundColor: "#fae8f7",
    color: " #CB11AB",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "700",
  },
  "& .icon-number-open": {
    width: "40px",
    height: "40px",
    backgroundColor: " #CB11AB",
    color: "#FFFFFF",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "700",
  },
}));
const AccordionDetailsStyled = styled(AccordionDetails)(() => ({
  padding: "0px 0px 16px",
  "& .text": {
    paddingLeft: "102px",
    paddingTop: "0px",
  },
}));
