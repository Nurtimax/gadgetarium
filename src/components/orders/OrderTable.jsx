import { Grid, Pagination, Stack, styled, Typography } from "@mui/material";
import {
  OrdersTableHeaderTitle,
  OrdersTableListData,
} from "../../utils/constants";
import OrderTableItem from "./OrderTableItem";
import { handleWidthItemsOrders } from "../../utils/helpers/general";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchOrderProductSlice } from "../../redux/slices/order-product";

const OrderTable = ({ orderStatus }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrderProductSlice({ orderStatus, page: 1, size: 1 }));
  }, []);

  // const getPaginationData = (type, page, selected) => {};
  // const onChange = (_, page) => {};

  return (
    <MainContainer>
      <TextFounds>Найдено 250 заказов</TextFounds>

      <ContainerTable>
        <ContainerTableRow>
          <Grid container>
            {OrdersTableHeaderTitle.map((title) => (
              <TitleTableCell
                item
                xs={handleWidthItemsOrders(title)}
                key={title}
              >
                {title}
              </TitleTableCell>
            ))}
          </Grid>
        </ContainerTableRow>

        <ContainerTableBody>
          {OrdersTableListData.map((obj, i) => (
            <OrderTableItem key={i} obj={obj} />
          ))}
        </ContainerTableBody>
      </ContainerTable>

      <Stack>
        <Pagination
          count={10}
          color="secondary"
          // getItemAriaLabel={getPaginationData}
          // onChange={onChange}
        />
      </Stack>
    </MainContainer>
  );
};

export default OrderTable;

const TextFounds = styled(Typography)(({ theme }) => ({
  paddingTop: "40px",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "14px",
  color: theme.palette.primary.light,
}));

const MainContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",

  "& .MuiButtonBase-root": {
    width: "22px",
    height: "22px",
    minWidth: "0",
    padding: "0",
  },

  "& .MuiPagination-ul": {
    paddingTop: "41px",
    justifyContent: "center",
  },
}));

const ContainerTable = styled("div")(() => ({
  paddingTop: "16px",
  width: "1305px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const ContainerTableRow = styled("div")(({ theme }) => ({
  paddingLeft: "20px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.primary.light,
}));

const TitleTableCell = styled(Grid)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "14px",
  letterSpacing: "1px",
  color: theme.palette.primary.contrastText,
}));

const ContainerTableBody = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
