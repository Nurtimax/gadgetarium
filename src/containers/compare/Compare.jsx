// import { Box, Container, styled, Table, Tabs, Typography } from "@mui/material";
// import React, { useCallback } from "react";
// import { useSearchParams } from "react-router-dom";
// import { TAB_ITEMS_COMPARE } from "../../utils/constants";

// const Compare = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   // const [value, setValue] = useState(0);
//   const orderStatus = searchParams.get("orderStatus") || "WAITING";

//   const handleTabClick = useCallback((e) => {
//     searchParams.set("orderStatus", e.target.name);
//     setSearchParams(searchParams);
//   });
//   return (
//     <ContainerStyled>
//       <Typography variant="h5" component="h1" className="text_header">
//         Сравнение товаров
//       </Typography>
//       <Box>
//         <Box
//           sx={{
//             borderColor: "divider",
//           }}
//         >
//           <Tabs>
//             {TAB_ITEMS_COMPARE.map((tab, i) => (
//               <button
//                 key={i}
//                 name={tab.tabTitle}
//                 disabled={orderStatus === `${tab.tabTitle}`}
//                 onClick={handleTabClick}
//               >
//                 {tab.title}
//                 {/* {checkTabName(tab.title, orderStatusAndSize || {})} */}
//               </button>
//             ))}
//           </Tabs>

//           {TAB_ITEMS_COMPARE.map((tab, i) => (
//             <div key={i}>
//               {/* {orderStatus === `${tab.tabTitle}` &&
//                 (data.length < 1 ? (
//                   <StyledNoOrdersText>No orders!</StyledNoOrdersText>
//                 ) : ( */}
//               <Table
//                 // tableHeaderTitle={OrdersTableHeaderTitle}
//                 // data={tableData}
//                 isMarked={false}
//                 found={true}
//                 // countOfOrders={countOfOrders}
//               />
//               {/* ))} */}
//             </div>
//           ))}
//           {/* <Tabs value={value} onChange={handleChange}>
//             <Tab
//               label="Смартфоны(7)"
//               classes={{ root: "tabs", active: "active" }}
//               style={{}}
//             />
//             <Tab
//               label="Ноутбуки (3)"
//               style={{
//                 background: "rgba(144, 156, 181, 0.2)",
//                 borderRadius: "4px",
//                 textTransform: "capitalize",
//                 height: "34px",
//                 fontFamily: "Inter",
//                 fontWeight: "700",
//                 fontSize: "14px",
//                 lineHeight: "17px",
//               }}
//             />
//             <Tab
//               label="Наушники (1)"
//               style={{
//                 fontFamily: "Inter",
//                 fontWeight: "700",
//                 fontSize: "14px",
//                 lineHeight: "17px",
//                 background: "rgba(144, 156, 181, 0.2)",
//                 borderRadius: "4px",
//                 textTransform: "capitalize",
//                 height: "34px",
//               }}
//             />
//           </Tabs> */}
//         </Box>
//       </Box>
//     </ContainerStyled>
//   );
// };

// export default Compare;
// const ContainerStyled = styled(Container)(() => ({
//   "& .text_header": {
//     height: "83px",
//     display: "flex",
//     alignItems: "center",
//     fontFamily: "Ubuntu",
//     fontWeight: "500",
//     fontSize: "30px",
//     borderBottom: "1px solid #CDCDCD",
//   },
//   "& .MuiTabs-flexContainer": {
//     display: "flex",
//     gap: "12px",
//   },
//   "& .tabs": {
//     background: "rgba(144, 156, 181, 0.2)",
//     borderRadius: "4px",
//     textTransform: "capitalize",
//     height: "34px",
//     fontFamily: "Inter",
//     fontWeight: "700",
//     fontSize: "14px",
//     lineHeight: "17px",
//   },
// }));

import React, { useEffect, useMemo } from "react";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  styled,
  Table,
  TableCell,
  TableRow,
  // TableRow,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { getOrderProducts } from "../../redux/slices/orders-slice";

import { checkTabName } from "../../utils/helpers/general";

import { useCallback } from "react";
import { TAB_ITEMS_COMPARE } from "../../utils/constants";
import { DeleteIconInCart } from "../../assets";
// import EmptyCompore from "../../components/compare/EmptyCompare";

const compare_characteristic = [
  "Бренд",
  "Экран",
  "Цвет",
  "Операционная система",
  "Память",
  "Вес",
  " SIM - карты",
];

const OrdersTabs = ({ searchTerm }) => {
  const { orderStatusAndSize } = useSelector(
    (state) => state.orderProduct.data
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const orderStatus = searchParams.get("orderStatus") || "WAITING";
  const page = searchParams.get("page_index") || 1;

  const dispatch = useDispatch();

  const handleTabClick = useCallback((e) => {
    searchParams.set("orderStatus", e.target.name);
    setSearchParams(searchParams);
  });

  const requestParams = useMemo(() => {
    const params = {
      orderStatus,
      page,
      size: 7,
    };

    if (searchTerm) {
      params.keyWord = searchTerm;
    }
    return params;
  }, [orderStatus, page, searchTerm]);

  useEffect(() => {
    searchParams.set("orderStatus", orderStatus);
    setSearchParams(searchParams);
  }, [orderStatus]);

  const request = useCallback(() => {
    dispatch(getOrderProducts(requestParams));
  }, [requestParams]);

  useEffect(() => {
    request();
  }, [request]);

  return (
    <div>
      <ContainerStyled>
        <Typography variant="h5" component="h1" className="text_header">
          Сравнение товаров
        </Typography>
        {/* <EmptyCompore /> */}
        <Tabs>
          {TAB_ITEMS_COMPARE.map((tab, i) => (
            <button
              key={i}
              name={tab.tabTitle}
              disabled={orderStatus === `${tab.tabTitle}`}
              onClick={handleTabClick}
            >
              {tab.title} {checkTabName(tab.title, orderStatusAndSize || {})}
            </button>
          ))}
        </Tabs>
        <Box style={{ display: "flex", gap: "30px" }}>
          <FormControlLabel
            control={<Checkbox defaultChecked color="secondary" />}
            label="Показывать только различия"
            style={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "14px",
            }}
          />
          <Box style={{ display: "flex", alignItems: "center", gap: "6.5px" }}>
            <DeleteIconInCart />
            <Typography
              style={{
                fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                fontWeight: "400",
                fontSize: "1rem",
                lineHeight: "1.5",
                letterSpacing: "0.00938em",
              }}
            >
              Очистить список
            </Typography>
          </Box>
        </Box>

        <Table oriantation="vertical">
          {compare_characteristic.map((product, i) => (
            <TableRow key={i}>
              <TableCell
                style={{
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "16px",
                  width: "250px",
                  height: "20px",
                  padding: "0",
                }}
                key={i}
                variant="head"
              >
                {product}
              </TableCell>
              <TableCell>{i}</TableCell>
              <TableCell>{i}</TableCell>
              <TableCell>{i}</TableCell>
            </TableRow>
          ))}
        </Table>
      </ContainerStyled>
    </div>
  );
};

export default OrdersTabs;

const ContainerStyled = styled(Container)(() => ({
  "& .text_header": {
    height: "83px",
    display: "flex",
    alignItems: "center",
    fontFamily: "Ubuntu",
    fontWeight: "500",
    fontSize: "30px",
    borderBottom: "1px solid #CDCDCD",
  },
}));

const Tabs = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  padding: "40px 0 10px 0",

  "& button": {
    cursor: "pointer",
    backgroundColor: theme.palette.grey[200],
    borderRadius: "4px",
    border: `1px solid ${theme.palette.grey[200]}`,
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "16px",
    color: theme.palette.primary.light,
    padding: "8px 20px",
  },

  "& button:disabled": {
    backgroundColor: "#384255",
    color: theme.palette.primary.contrastText,
  },
}));
