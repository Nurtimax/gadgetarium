import { Box, Grid, Rating, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/button/Button";
import { useParams } from "react-router-dom";
import { getProductDetailThunk } from "../../redux/slices/product-details";
// import Feedback from "../UI/feedback/Feedback";
// import Feedback from "../UI/feedback/Feedback";
import SuccessFeedback from "../UI/feedback/SuccessFeedback";

const ReviewsTabItem = () => {
  const [reviewCount, setReviewCount] = useState(0);

  const [isShowModal, setIsShowModal] = useState(false);

  const { product } = useParams();

  const { data } = useSelector((state) => state.productDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetailThunk({ product, attribute: "Отзывы" }));
  }, [dispatch, product]);

  useEffect(() => {
    for (const key in data.reviewCount) {
      setReviewCount((prev) => prev + data.reviewCount[key]);
    }
  }, [data.reviewCount]);

  const onClickOpenModal = () => {
    setIsShowModal(true);
  };

  const onClickCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      {isShowModal && (
        <SuccessFeedback open={isShowModal} onClose={onClickCloseModal} />
      )}
      <Styled_Wrapper>
        <Grid container spacing={10}>
          {data.attribute?.Отзывы?.length === 0 ? (
            <Grid item xs={7}>
              review is empty
            </Grid>
          ) : (
            data.attribute?.Отзывы?.map((user) => (
              <Grid item xs={7} key={user.id}>
                <Typography variant="h1" className="title">
                  Отзывы
                </Typography>
                <Styled_User>
                  <Typography component="div" className="flex gap2">
                    <Styled_Img
                      src={user.userMainResponse.image}
                      alt={user.userMainResponse.fullName}
                    />
                    <Box>
                      <Typography variant="h5">
                        {user.userMainResponse.fullName}
                      </Typography>
                      <Typography variant="h6">{user.reviewTime}</Typography>
                    </Box>
                  </Typography>
                  <Styled_Raring>
                    <Typography variant="h5" component="h5">
                      Оценка
                    </Typography>
                    <Rating size="small" readOnly value={user.productGrade} />
                  </Styled_Raring>
                  <Styled_Comment>{user.userReview}</Styled_Comment>
                </Styled_User>
                <Typography component="div" className="flex center padding">
                  <Button variant="outlined">Показать еще</Button>
                </Typography>
              </Grid>
            ))
          )}

          <Grid item xs={5}>
            <Box className="ratingBlock">
              <Grid container>
                <Grid item xs={6}>
                  <div className="rating">
                    <h1>{reviewCount / 5}</h1>
                    <Rating
                      readOnly
                      size="small"
                      value={reviewCount / 5}
                      precision={0.5}
                    />
                  </div>
                  <p>789 отзывов</p>
                </Grid>
                <Grid item xs={6} className="ul">
                  {[1, 2, 3, 4, 5].reverse().map((review) => (
                    <li key={review} className="flex gap">
                      <Rating
                        readOnly
                        size="small"
                        value={review}
                        className="flex"
                      />
                      {data.reviewCount && data.reviewCount[review]} отзывов
                    </li>
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Styled_Button>
                    <Button
                      onClick={onClickOpenModal}
                      variant="contained"
                      width="90%"
                    >
                      Оставить отзыв
                    </Button>
                  </Styled_Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Styled_Wrapper>
    </>
  );
};

export default ReviewsTabItem;

const Styled_Wrapper = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  padding: "40px 0",
  fontFamily: "Inter",
  fontStyle: "normal",
  "& .title": {
    fontWeight: 700,
    fontSize: "30px",
    paddingBottom: "60px",
  },
  "& p": {
    fontWeight: 400,
    fontSize: "14px",
    color: "#91969E",
  },

  "& .ul": {
    display: "grid",
    gap: "8px",
    fontWeight: 400,
    fontSize: "14px",
    listStyle: "none",
  },
  "& .rating": {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },
  "& .ratingBlock": {
    background: "#dbdbdb",
    borderRadius: "5px",
    padding: "30px 40px 26px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  },
}));
const Styled_Button = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  paddingTop: "20px",
}));

const Styled_User = styled(Box)(() => ({
  borderBottom: "1px solid grey",
  fontFamily: "Inter",
  fontStyle: "normal",
  paddingBottom: "40px",

  "& h5": {
    fontWeight: 700,
    fontSize: "16px",
  },
  "& h6": {
    fontWeight: 400,
    fontSize: "12px",
    color: "grey",
  },
}));
const Styled_Img = styled("img")(() => ({
  width: "40px",
  borderRadius: "50%",
}));
const Styled_Raring = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: " 12px  55px",
}));

const Styled_Comment = styled("div")(() => ({
  paddingLeft: "55px",
}));
