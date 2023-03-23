import React from "react";
import { Box, styled, Typography } from "@mui/material";
import HistoryDetails from "./HistoryDetails";
// import HistoreEmpty from "./HistoreEmpty";
const History = () => {
  //   const colors = {
  //     ["Доставлен"]: "#299A0D",
  //     ["Отменен"]: "#F53B49",
  //     ["В обработке"]: "#F99808",
  //     ["В пути"]: "#08A592",
  //   };
  return (
    <>
      <StyledContainer>
        <Typography component="div" className="box">
          {/* <ul>
          <li className="date">26.03.2021</li>
          <li className="code">№ 1521751218</li>
          <li className="status" color={colors[0]}>
            Доставлен
          </li>
        </ul>
        <span className="price">54 000 с</span> */}
        </Typography>
      </StyledContainer>
      {/* <HistoreEmpty /> */}
      <HistoryDetails />
    </>
  );
};

export default History;

const StyledContainer = styled(Box)((props) => ({
  width: "70%",
  fontFamily: "Inter",
  fontStyle: "normal",
  "& .box": {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #E8E8E8",
    alignItems: "center",
  },
  "& ul": {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "60%",
    padding: "15px 0",
  },
  "& .price": {
    fontWeight: 700,
    fontSize: "17px",
  },
  "& .code": {
    fontWeight: 700,
    fontSize: "18px",
  },
  "& .date": {
    fontWeight: 400,
    fontSize: "16px",
  },
  "& .status": {
    fontWeight: 400,
    fontSize: "16px",
    color: props.color,
  },
}));
