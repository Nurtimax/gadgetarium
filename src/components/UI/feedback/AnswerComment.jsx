import { Box, Rating, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { DeleteBinLine, EditLine } from "../../../assets";
import { BsCheck2All } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  // ActionAddFeedbackSlice,
  deletetFeedback,
  putAddFeedback,
} from "../../../redux/slices/feedback-slice";
import { useParams } from "react-router-dom";
const AnswerComment = ({
  answer,
  responseOfReview,
  reviewHover,
  productGrade,
  id,
}) => {
  const [content, setContent] = useState(productGrade);

  const [value, setValue] = useState(answer);

  const [isEditing, setIsEditing] = useState(false);

  const { product } = useParams();

  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();

    dispatch(
      putAddFeedback({
        product,
        data: {
          userReview: value,
          images: [""],
          productGrade: content,
          id,
        },
      })
    );
    setIsEditing(false);
  };

  const deleteHandlerRawiew = (reviewid) => {
    dispatch(deletetFeedback({ reviewid, product }));
  };

  const onChangeHandlerValue = (e) => {
    setValue(e.target.value);
  };

  const onChangeHandlerContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      {isEditing ? (
        <form>
          <Styled_Raring>
            <Typography variant="h5" component="h5">
              Оценка
            </Typography>
            <Rating
              size="small"
              name="productGrade"
              value={content}
              onChange={onChangeHandlerContent}
            />
          </Styled_Raring>
          <Box className="flex between">
            <Styled_texterea
              name="userReview"
              type="text"
              value={value}
              onChange={onChangeHandlerValue}
            ></Styled_texterea>
            <BsCheck2All className="pointer save" onClick={handleSave} />
          </Box>
        </form>
      ) : (
        <>
          <Styled_Raring>
            <Typography variant="h5" component="h5">
              Оценка
            </Typography>
            <Rating size="small" readOnly value={productGrade} />
          </Styled_Raring>
          <Styled_Comment>{value}</Styled_Comment>
        </>
      )}
      {responseOfReview && (
        <Styled_Answer>
          <Typography component="span">Ответ от представителя</Typography>

          <Typography component="p">{responseOfReview}</Typography>
        </Styled_Answer>
      )}

      {reviewHover ? (
        <Box className="display flex-end gap2 top my_reveiw">
          <EditLine className="pointer" onClick={handleEdit} />

          <DeleteBinLine
            className="pointer"
            onClick={() => deleteHandlerRawiew(id)}
          />
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default AnswerComment;
const Styled_Answer = styled("div")(() => ({
  padding: "20px",
  background: "#E8E8E8",
  borderRadius: "6px",
  height: "100%",

  "& span": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
  },
  "& p": {
    color: "#384255",
    paddingTop: "5px",
  },
  "& .save": {
    fontSize: "25px",
  },
  "&:hover": {},
  "& .top": {
    display: "none",
  },
}));
const Styled_Comment = styled("div")(() => ({
  paddingBottom: "20px",
  "& .top": {
    padding: "5px",
  },
}));
const Styled_texterea = styled("textarea")(() => ({
  width: "90%",
  height: "130px",
  border: "none",
  padding: "10px",
}));

const Styled_Raring = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: " 12px  0",
}));
