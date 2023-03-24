import React, { useEffect } from "react";
import { Box, styled, Typography } from "@mui/material";
// import HistoryDetails from "./HistoryDetails";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryOrders } from "../../redux/slices/private-slice";
import HistoreEmpty from "./HistoreEmpty";
import { Link } from "react-router-dom";
import { orderStatus } from "../../utils/helpers/history";
const History = () => {
  const { data } = useSelector((state) => state.private);
  console.log(data, "aaaaaaaaaaa");
  const colors = {
    ["DELIVERED"]: "#299A0D",
    ["CANCEL"]: "#F53B49",
    ["WAITING"]: "#BDDEF1",
    ["IN_PROCESSING"]: "#F99808",
    ["ON_THE_WAY"]: "#08A592",
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHistoryOrders());
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <StyledContainer>
          {data?.map((item) => (
            <Link to={`/vip/history/${item.id}`} key={item.id}>
              <Typography component="div" className="box">
                <ul>
                  <li className="date">{item.dateOfOrder}</li>
                  <li className="code">№ {item.orderNumber}</li>
                  <li className="status">
                    <StyledStatusColor color={colors[item.orderStatus]}>
                      {orderStatus(item.orderStatus)}
                    </StyledStatusColor>
                  </li>
                </ul>
                <span className="price">{item.totalSum} с</span>
              </Typography>
            </Link>
          ))}
        </StyledContainer>
      ) : (
        <HistoreEmpty />
      )}

      {/* <HistoryDetails /> */}
    </>
  );
};

export default History;

const StyledContainer = styled(Box)((props) => ({
  width: "80%",
  fontFamily: "Inter",
  fontStyle: "normal",
  display: "grid",
  gap: "20px",
  "& .box": {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #E8E8E8",
    alignItems: "center",
    cursor: "pointer",
  },
  "& ul": {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "65%",
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
    width: "220px",
  },
  "& .status": {
    fontWeight: 400,
    fontSize: "16px",
    color: props.color,
  },
}));

const StyledStatusColor = styled(Box)(({ color }) => ({
  color: color,
}));
