import { Grid, styled } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import { actionGoodSlice } from "../../../redux/slices/goods-slice";
import Search from "../../UI/Search";

const SearchItem = () => {
  const { params } = useSelector((state) => state.goods);

  const [searchValue, setSearchValue] = useState("");
  const [searchTerm] = useDebounce(searchValue, 1000);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (params.searchText) {
      setSearchValue(params.searchText);
    }
  }, [params.searchText]);

  useEffect(() => {
    dispatch(
      actionGoodSlice.changeParams({ key: "searchText", value: searchTerm })
    );
    dispatch(
      actionGoodSlice.changeLocalParams({
        key: "searchText",
        value: searchTerm,
      })
    );
  }, [searchTerm]);

  return (
    <>
      <Grid item xs={6}>
        <StyledSearch
          width="95%"
          placeholder="Поиск по артикулу или ..."
          showBackground={true}
          onChange={handleChange}
          value={searchValue}
        />
      </Grid>
    </>
  );
};

export default SearchItem;

const StyledSearch = styled(Search)(() => ({}));
