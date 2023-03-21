import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGoodSlice } from "../../../redux/slices/goods-slice";
import { tableHeader } from "../../../utils/constants/content-table";
import Table from "../../Table";
import Pagination from "../../UI/Pagination";

const ContentTable = () => {
  const [tableTitle, setTableTitle] = useState([]);

  const { data } = useSelector((state) => state.goods);

  const dispatch = useDispatch();

  const handleChange = (value) => {
    setTableTitle((prevState) => {
      if (!prevState.includes(value)) {
        return [...prevState, value];
      }
      return [...prevState.filter((state) => state !== value)];
    });
  };

  const handleChangePagination = (currentPage) => {
    dispatch(actionGoodSlice.changeParams({ key: "page", value: currentPage }));
  };

  useEffect(() => {
    dispatch(actionGoodSlice.changeParams({ key: "page", value: 1 }));
  }, []);

  return (
    <Grid item xs={12}>
      <StyledContentTable>
        {data.responseList?.length ? (
          <>
            <StyledTable
              countOfOrders={data.responseList?.length}
              data={data.responseList}
              tableHeaderTitle={tableHeader}
              isMarked={true}
              found={true}
              onChange={handleChange}
              selectedItem={tableTitle}
              isSort
            />
            <Pagination
              count={data.pages}
              color="secondary"
              onChange={handleChangePagination}
            />
          </>
        ) : (
          <Typography>Нет продукта в корзине</Typography>
        )}
      </StyledContentTable>
    </Grid>
  );
};

export default ContentTable;

const StyledContentTable = styled(Box)(() => ({}));

const StyledTable = styled(Table)(() => ({}));
