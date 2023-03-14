import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailThunk } from "../../redux/slices/product-details";
import { Box, styled } from "@mui/material";
import ReactPlayer from "react-player";
const DescriptionTabItem = () => {
  const { product } = useParams();

  const { data } = useSelector((state) => state.productDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetailThunk({ product, attribute: "Описание" }));
  }, [dispatch, product]);

  return (
    <Styled_Wrapper>
      <ReactPlayer
        url={data.videoReview}
        config={{ youtube: { playerVars: { showinfo: 1 } } }}
        controls
        width="100%"
        height="570px"
      />
      <p>{data?.attribute?.Описание}</p>
    </Styled_Wrapper>
  );
};

export default DescriptionTabItem;

const Styled_Wrapper = styled(Box)(() => ({
  width: "90vw",
  height: "100%",
  padding: "60px 0",
  "& p": {
    width: "60vw",
    paddingTop: "50px",
  },
}));
