import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGoodSlice } from "../../../redux/slices/goods-slice";
import { tableHeader } from "../../../utils/constants/content-table";
import Table from "../../Table";
import Pagination from "../../UI/Pagination";

const ContentTable = () => {
  const { data, localParams, choosedItems } = useSelector(
    (state) => state.goods
  );

  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(actionGoodSlice.changeChoosedProducts({ value }));
  };

  useEffect(() => {
    if (choosedItems.length) {
      dispatch(
        actionGoodSlice.changeLocalParams({
          key: "chooseItem",
          value: choosedItems,
        })
      );
    }
  }, [choosedItems]);

  const handleChangePagination = (currentPage) => {
    dispatch(actionGoodSlice.changeParams({ key: "page", value: currentPage }));
  };

  return (
    <Grid item xs={12}>
      <StyledContentTable>
        {data.responseList?.length >= 1 ? (
          <>
            <StyledTable
              countOfOrders={data.responseList?.length}
              data={data.responseList}
              tableHeaderTitle={tableHeader}
              isMarked={true}
              found={true}
              onChange={handleChange}
              selectedItem={choosedItems}
              isSort
            />
            {(data.pages > 1 && data.responseList?.length < 7) || (
              <Pagination
                count={data.pages}
                color="secondary"
                onChange={handleChangePagination}
              />
            )}
          </>
        ) : (
          <Typography>Нет продукта {localParams.productType}</Typography>
        )}
      </StyledContentTable>
    </Grid>
  );
};

export default ContentTable;

const StyledContentTable = styled(Box)(() => ({}));

const StyledTable = styled(Table)(() => ({}));
