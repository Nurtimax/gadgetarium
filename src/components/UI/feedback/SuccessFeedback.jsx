import {
  Rating,
  Typography,
  styled,
  Box,
  CircularProgress,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Button from "../UI/button/Button";
import { Addimage } from "../../assets";
import Modal from "../UI/Modal";
import { useCallback, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { SWAGGER_API } from "../../utils/constants/fetch";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAddFeedback } from "../../redux/slices/add-feedback";
import { useParams } from "react-router-dom";
const SuccessFeedback = ({ open, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const a = useSelector((state) => state.feedback);
  console.log(a);
  const { product } = useParams();
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      productId: 0,
      productGrade: 0,
      reviewComment: "",
      images: [],
    },
    onSubmit: (values) => {
      dispatch(postAddFeedback(values));
      // onClose();
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
      .catch((error) => {
        console.log(error);
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
        <Typography variant="h6">Оставьте свой отзыв</Typography>
        <Typography variant="p" className="flex">
          Оценки
          <Rating
            value={values.productGrade}
            onChange={handleChange}
            name="productGrade"
            icon={<StarIcon />}
          />
        </Typography>
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
        <Styled_Button variant="contained" type="submit">
          Отправить отзыв
        </Styled_Button>
      </Styled_Container>
    </Styled>
  );
};
export default SuccessFeedback;
const Styled = styled(Modal)(() => ({
  width: "100%",
  height: "100%",
}));
const Styled_Container = styled("form")(() => ({
  width: "500px",
  height: "500px",
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
}));
const Styled_Box = styled(Box)(() => ({
  display: "grid",
  "& .MuiInputBase-sizeSmall": {
    height: "150px",
    alignItems: "start",
  },
}));
const Styled_img = styled("div")(() => ({
  width: "100%",
  height: "118px",
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
const Styled_Texterea = styled("textarea")(() => ({
  width: "100%",
  height: "150px",
  boxSizing: "border-box",
  padding: "14px",
  fontFamily: "Inter",
  fontSize: "14px",
  border: "1px solid #CDCDCD",
}));
