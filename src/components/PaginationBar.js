import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { setPageNum } from "../slice/bookSlice";

const PaginationBar = () => {
  const handleChange = (event, value) => {
    dispatch(setPageNum(value));
  };
  const dispatch = useDispatch();
  const totalPage = 10;
  const pageNum = useSelector((state) => state.books.pageNum);

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPage}
        page={pageNum}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};

export default PaginationBar;
