import {
  Box,
  CircularProgress,
  Grid,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Addimage } from "../../../assets";
import Button from "../button/Button";
import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { SWAGGER_API } from "../../../utils/constants/fetch";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { postAddFeedback } from "../../../redux/slices/feedback-slice";
const Feedback = ({ open, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { product } = useParams();
  const dispatch = useDispatch();

  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      productGrade: 0,
      reviewComment: "",
      images: [""],
      product,
    },
    onSubmit: (values) => {
      dispatch(postAddFeedback(values)).then((res) => {
        switch (res?.payload?.response?.data?.message) {
          case "This customer did not purchase this product":
            return toast.warning("Отзыв только после покупки!"), onClose();
          case "User has already added a review for this product":
            return (
              toast.error("Вы уже добавили отзыв об этом продукте!"), onClose()
            );
          default:
            return null;
        }
      });
      onClose();
    },
  });

  const getImageLinkHandler = async (file) => {
    setIsLoading(true);
    const bodyFormData = new FormData();
    bodyFormData.append("file", file[0]);
    axios({
      method: "POST",
      url: `${SWAGGER_API}file`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        setFieldValue("images", [...values.images, response.data.link]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };
  const onDrop = useCallback((files) => {
    getImageLinkHandler(files);
  }, []);

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
  });

  useEffect(() => {
    setFieldValue("productId", Number(product));
  }, [product]);

  return (
    <Styled open={open} handleClose={onClose}>
      <Styled_Container onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Оставьте свой отзыв</Typography>
          </Grid>
          <Grid item xs={12} className="flex rating">
            <Typography component="p">Оценки</Typography>
            <Rating
              value={values.productGrade}
              onChange={handleChange}
              name="productGrade"
            />
          </Grid>
        </Grid>
        <Typography variant="p" className="flex">
          <Styled_Box>
            <Typography variant="p">Ваш комментарий</Typography>
            <Styled_Texterea
              value={values.reviewComment}
              onChange={handleChange}
              name="reviewComment"
              type="text"
              placeholder="Напишите комментарий"
            />
            <Styled_img {...getRootProps()}>
              <Typography variant="input" {...getInputProps()} />
              <Addimage className="btn" />
              {isLoading ? (
                <CircularProgress color="secondary" />
              ) : (
                values.images.map((item) => (
                  <img key={item} src={item} alt={item} />
                ))
              )}
            </Styled_img>
          </Styled_Box>
        </Typography>
        <Grid item xs={12}>
          <Styled_Button variant="contained" type="submit">
            Отправить отзыв
          </Styled_Button>
        </Grid>
      </Styled_Container>
    </Styled>
  );
};
export default Feedback;
const Styled = styled(Modal)(() => ({
  width: "100%",
  height: "100%",
}));
const Styled_Container = styled("form")(() => ({
  width: "550px",
  height: "460px",
  display: "grid",
  gap: 10,
  "& p": {
    fontWeight: 400,
    fontSize: "16px",
  },
  "& h6": {
    fontWeight: 600,
    fontSize: "20px",
  },
  "& .rating": {
    padding: "20px 0",
  },
}));
const Styled_Texterea = styled("textarea")(() => ({
  width: "100%",
  height: "180px",
  boxSizing: "border-box",
  padding: "14px",
  fontFamily: "Inter",
  fontSize: "14px",
  border: "1px solid #CDCDCD",
}));
const Styled_Box = styled(Box)(() => ({
  width: "100%",
  display: "grid",
  "& .MuiInputBase-sizeSmall": {
    height: "150px",
    alignItems: "start",
  },
}));
const Styled_img = styled("div")(() => ({
  width: "100%",
  height: "100px",
  border: "1px solid #CDCDCD",
  marginTop: "12px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  paddingLeft: "20px",
  position: "relative",
  "& .btn": {
    cursor: "pointer",
    width: "40px",
  },
  "& img": {
    width: "90px",
    height: "100px",
    objectFit: "contain",
    mixBlendMode: "",
    borderRadius: 5,
    aspectRatio: "1/1",
  },
}));
const Styled_Button = styled(Button)(() => ({
  width: "100%",
  height: "42px",
}));
