import { Box, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import AnswerComment from "../UI/feedback/AnswerComment";

const ReviewsTabSlice = ({
  userMainResponse,
  reviewTime,
  productGrade,
  userReview,
  responseOfReview,
  myReview,
  id,
}) => {
  const [reviewHover, setReviewHover] = useState(false);

  const reviewHoverHandler = () => {
    if (myReview) {
      setReviewHover((prevState) => !prevState);
    }
  };
  return (
    <>
      <Styled_User>
        <Typography component="div" className="flex gap2">
          <Styled_Img
            src={userMainResponse.image}
            alt={userMainResponse.fullName}
          />
          <Box>
            <Typography variant="h5">{userMainResponse.fullName}</Typography>
            <Typography variant="h6">{reviewTime}</Typography>
          </Box>
        </Typography>
        <Box
          onMouseEnter={reviewHoverHandler}
          onMouseLeave={reviewHoverHandler}
        >
          <Styled_Comment>
            <AnswerComment
              answer={userReview}
              responseOfReview={responseOfReview}
              reviewHover={reviewHover}
              productGrade={productGrade}
              id={id}
            />
          </Styled_Comment>
        </Box>
      </Styled_User>
    </>
  );
};

export default ReviewsTabSlice;

const Styled_User = styled(Box)(() => ({
  fontFamily: "Inter",
  fontStyle: "normal",

  "& h5": {
    fontWeight: 700,
    fontSize: "16px",
  },
  "& h6": {
    fontWeight: 400,
    fontSize: "12px",
    color: "grey",
  },
  "& .my_reveiw": {
    borderBottom: "1px solid gray",
    width: "100%",
  },
}));
const Styled_Img = styled("img")(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
}));

const Styled_Comment = styled("div")(() => ({
  paddingLeft: "55px",
  "& .top": {
    padding: "5px",
  },
}));
