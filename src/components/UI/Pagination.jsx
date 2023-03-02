import {
  PaginationItem,
  Pagination as MyPagination,
  Stack,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const PAGE_INDEX = "page_index";

const Pagination = ({ count = 10 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParams = searchParams.get(PAGE_INDEX);
  const [pageIndex, setPageIndex] = useState(Number(pageParams));

  useEffect(() => {
    if (!pageParams) {
      setPageIndex(1);
      searchParams.set(PAGE_INDEX, "1");
      setSearchParams(searchParams);
    }
  }, [pageParams]);

  const changeHandler = (_, index) => {
    setPageIndex(index);
    searchParams.set(PAGE_INDEX, index);
    setSearchParams(searchParams);
  };

  return (
    <Stack className="flex" style={{ padding: "40px 0" }}>
      <MyPagination
        page={pageIndex}
        onChange={changeHandler}
        count={count}
        color="secondary"
        renderItem={(item) => <PaginationItem {...item} />}
      />
    </Stack>
  );
};

export default Pagination;
