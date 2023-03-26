import { Box, Rating, styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ArrowOrderIcon, ArrowOrderIconRotate, DeleteIcon } from "../../assets";
import {
  addComment,
  deleteRevewRating,
} from "../../redux/slices/review-rating-slice";
import Button from "../../components/UI/button/Button";

const ReviewItem = ({ review }) => {
  const [reviews, setReview] = useState(false);

  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const userReview = reviews
    ? review.userReview
    : review.userReview?.split(",", 1).join("");

  const deleteHandler = () => {
    dispatch(deleteRevewRating({ id: review.id }));
  };

  const commentHandler = () => {
    dispatch(
      addComment({
        id: review.id,
        responseOfReview: value,
      })
    );

    setReview(false);
  };

  return (
    <>
      <Box className="product">
        <p>{review.id}</p>

        <img src={review.productReviewResponse.image} alt="image" />

        <Box className="name-product">
          <p>{review.productReviewResponse.name}</p>
          <p>Модель</p>
          <p>Арт. {review.productReviewResponse.productVendorCode}</p>
        </Box>

        <Box className="review">
          <p>{userReview}</p>

          <p>{review.reviewTime}</p>

          <Box className="images">
            {reviews
              ? review.reviewImages.map((image, i) => (
                  <img src={image} alt="image" key={i} />
                ))
              : ""}
          </Box>
        </Box>

        <Rating readOnly value={review.productGrade} className="rating" />

        <Box className="user">
          <img src={review.userResponse.image} alt="image" />

          <Box>
            <p>{review.userResponse.firstName}</p>
            <p className="email">{review.userResponse.email}</p>
          </Box>
        </Box>

        <Box className="icons">
          <DeleteIcon onClick={deleteHandler} />

          {reviews ? (
            <ArrowOrderIconRotate onClick={() => setReview(!reviews)} />
          ) : (
            <ArrowOrderIcon onClick={() => setReview(!reviews)} />
          )}
        </Box>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {reviews ? (
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <label>Ответить на комментарий</label>
            <StyledTextarea
              style={{
                width: "500px",
                height: "200px",
                marginTop: "10px",
              }}
              type="textarea"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <StyledButton onClick={commentHandler}>Ответить</StyledButton>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default ReviewItem;

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  backgroundColor: theme.palette.secondary.main,
  color: "white !important",
  width: "100%",
}));

const StyledTextarea = styled("textarea")(({ theme }) => ({
  width: "685px",
  height: "150px",
  resize: "none",
  padding: "12px 10px",
  background: "#FFFFFF",
  border: `1px solid  ${theme.palette.grey[900]}`,
  borderRadius: "6px",
  outline: "none",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "1rem",
  " &:focus": {
    border: `0.1px solid ${theme.palette.secondary.main}`,
    borderRadius: "5px",
  },
}));
