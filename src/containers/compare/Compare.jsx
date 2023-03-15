// import React, { useEffect } from "react";
// import {
//   Box,
//   Checkbox,
//   Container,
//   FormControlLabel,
//   styled,
//   Table,
//   TableCell,
//   TableRow,
//   // TableRow,
//   Typography,
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useSearchParams } from "react-router-dom";

// // import { getOrderProducts } from "../../redux/slices/orders-slice";

// import { checkTabName } from "../../utils/helpers/general";

// import { useCallback } from "react";
// import {
//   catalogMenu_FAKE_DATA,
//   TAB_ITEMS_COMPARE,
// } from "../../utils/constants";
// import { DeleteIconInCart } from "../../assets";
// import { getCompareProduct } from "../../redux/slices/compore-slice";
// // import EmptyCompore from "../../components/compare/EmptyCompare";

// const compare_characteristic = [
//   "Бренд",
//   "Экран",
//   "Цвет",
//   "Операционная система",
//   "Память",
//   "Вес",
//   " SIM - карты",
// ];

// const OrdersTabs = () => {
//   const { data } = useSelector((state) => state.comporeProducts);
//   console.log(data);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const orderStatus = searchParams.get("compareStatus");
//   // const page = searchParams.get("page_index") || 1;

//   const dispatch = useDispatch();
//   const { catalogItem } = useParams();
//   const findedCatalogItem = catalogMenu_FAKE_DATA.find(
//     (catalog) => catalog.id === Number(catalogItem)
//   );
//   useEffect(() => {
//     dispatch(getCompareProduct({ categoryName: findedCatalogItem, size: 12 }));
//   }, []);

//   const handleTabClick = useCallback((e) => {
//     searchParams.set("orderStatus", e.target.name);
//     setSearchParams(searchParams);
//   });

//   // const requestParams = useMemo(() => {
//   //   const params = {
//   //     orderStatus,
//   //     page,
//   //   };

//   //   if (searchTerm) {
//   //     params.keyWord = searchTerm;
//   //   }
//   //   return params;
//   // }, [orderStatus, page, searchTerm]);

//   useEffect(() => {
//     searchParams.set("orderStatus", orderStatus);
//     setSearchParams(searchParams);
//   }, [orderStatus]);

//   // const request = useCallback(() => {
//   //   dispatch(getOrderProducts(requestParams));
//   // }, [requestParams]);

//   // useEffect(() => {
//   //   request();
//   // }, [request]);

//   return (
//     <div>
//       <ContainerStyled>
//         <Typography variant="h5" component="h1" className="text_header">
//           Сравнение товаров
//         </Typography>
//         {/* <EmptyCompore /> */}
//         <Tabs>
//           {TAB_ITEMS_COMPARE.map((tab, i) => (
//             <button
//               key={i}
//               name={tab.tabTitle}
//               disabled={orderStatus === `${tab.tabTitle}`}
//               onClick={handleTabClick}
//             >
//               {tab.title} {checkTabName(tab.title)}
//             </button>
//           ))}
//         </Tabs>
//         <Box style={{ display: "flex", gap: "30px" }}>
//           <FormControlLabel
//             control={<Checkbox defaultChecked color="secondary" />}
//             label="Показывать только различия"
//             style={{
//               fontFamily: "Inter",
//               fontWeight: "400",
//               fontSize: "14px",
//             }}
//           />
//           <Box style={{ display: "flex", alignItems: "center", gap: "6.5px" }}>
//             <DeleteIconInCart />
//             <Typography
//               style={{
//                 fontFamily: "Roboto,Helvetica,Arial,sans-serif",
//                 fontWeight: "400",
//                 fontSize: "1rem",
//                 lineHeight: "1.5",
//                 letterSpacing: "0.00938em",
//               }}
//             >
//               Очистить список
//             </Typography>
//           </Box>
//         </Box>

//         <Table oriantation="vertical">
//           {compare_characteristic.map((product, i) => (
//             <TableRow key={i}>
//               <TableCell
//                 style={{
//                   fontFamily: "Inter",
//                   fontWeight: "700",
//                   fontSize: "16px",
//                   width: "250px",
//                   height: "20px",
//                   padding: "0",
//                 }}
//                 key={i}
//                 variant="head"
//               >
//                 {product}
//               </TableCell>
//               <TableCell>{i}</TableCell>
//               <TableCell>{i}</TableCell>
//               <TableCell>{i}</TableCell>
//             </TableRow>
//           ))}
//         </Table>
//       </ContainerStyled>
//     </div>
//   );
// };

// export default OrdersTabs;

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
// }));

// const Tabs = styled("div")(({ theme }) => ({
//   display: "flex",
//   gap: "10px",
//   padding: "40px 0 10px 0",

//   "& button": {
//     cursor: "pointer",
//     backgroundColor: theme.palette.grey[200],
//     borderRadius: "4px",
//     border: `1px solid ${theme.palette.grey[200]}`,
//     fontFamily: "Inter",
//     fontWeight: "600",
//     fontSize: "16px",
//     color: theme.palette.primary.light,
//     padding: "8px 20px",
//   },

//   "& button:disabled": {
//     backgroundColor: "#384255",
//     color: theme.palette.primary.contrastText,
//   },
// }));
import { Table, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompareProductCard from "../../components/UI/card/CompareProductCard";
import { getCompareProduct } from "../../redux/slices/compore-slice";

const Compare = () => {
  const { data } = useSelector((state) => state.comporeProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompareProduct({ categoryName: "Смартфоны", size: 12 }));
  }, []);
  console.log(data);
  // const compare_characteristic = [
  //   "Бренд",
  //   "Экран",
  //   "Цвет",
  //   "Операционная система",
  //   "Память",
  //   "Вес",
  //   " SIM - карты",
  // ];
  return (
    <div>
      <Table oriantation="vertical">
        {data.comporeProducts.productCardResponses?.map((product) => (
          <TableRow key={product}>
            <CompareProductCard {...product} />
            <TableCell
              style={{
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "16px",
                width: "250px",
                height: "20px",
                padding: "0",
              }}
              variant="head"
            >
              {product.productName}
            </TableCell>
            <>
              {/* <TableCell>{product.productImage}</TableCell> */}

              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.productPrice}</TableCell>
              {/* <TableCell>{product.productPrice}</TableCell> */}
            </>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default Compare;
