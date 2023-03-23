import { Box, Container, Grid, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import AddProductButton from "../../components/goods-cmp/buttons/AddProductButton";
import ContentDatePicker from "../../components/goods-cmp/content-date-picker/ContentDatePicker";
import ContentTab from "../../components/goods-cmp/content-tab";
import ContentTable from "../../components/goods-cmp/content-table/ContentTable";
import SearchItem from "../../components/goods-cmp/search/SearchItem";
import {
  actionGoodSlice,
  getProductsThunk,
} from "../../redux/slices/goods-slice";

const Goods = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    params,
    localParams,
    localParamsKeys = [],
  } = useSelector((state) => state.goods);

  const dispatch = useDispatch();

  useEffect(() => {
    if (params.productType && params.page) {
      dispatch(getProductsThunk(params));
    }
  }, [params]);

  useEffect(() => {
    const mountData = localParamsKeys.reduce((acc, current) => {
      return {
        ...acc,
        [current]: searchParams.get(current) ? searchParams.get(current) : null,
      };
    }, {});
    dispatch(actionGoodSlice.changeAllParams(mountData));
  }, []);

  useEffect(() => {
    setSearchParams(localParams);
  }, [localParams]);

  return (
    <StyledGoods>
      <Container>
        <Grid container spacing={3} className="flex between">
          <SearchItem />
          <AddProductButton />
          <ContentTab />
          <ContentDatePicker />
          <ContentTable />
        </Grid>
      </Container>
    </StyledGoods>
  );
};

export default Goods;

const StyledGoods = styled(Box)(() => ({
  padding: "0 0 130px",
}));
