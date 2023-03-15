import { Box, Grid, styled, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { DownloadVideoIcon } from "../../assets";
import { ActionAddProductSlice } from "../../redux/slices/add-product-slice";
import { SWAGGER_API } from "../../utils/constants/fetch";
import GadgetariumSpinnerLoading from "../GadgetariumSpinnerLoading";
import Input from "../UI/input/Input";
import TextEditor from "../UI/TextEditor";

const DescriptionOverview = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    isLoading: isSendDataLoading,
    values,
    errors,
  } = useSelector((state) => state.addProduct);

  const dispatch = useDispatch();

  const getImageLinkHandler = async (file) => {
    if (file.name.length > 1000000) {
      return setError(`pdf file is larger than ${1000000} characters`);
    }
    setIsLoading(true);
    const bodyFormData = new FormData();
    bodyFormData.append("file", file[0]);
    return axios({
      method: "POST",
      url: `${SWAGGER_API}file`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        if (response.data.link) {
          dispatch(
            ActionAddProductSlice.editValuesWithKey({
              key: "pdf",
              value: response.data.link,
            })
          );
          setIsLoading(false);
        }
        setError(null);
      })
      .catch((error) => {
        setError(error?.message || "Something is wrong");
        setIsLoading(false);
      });
  };

  const handleChangeDescription = (payload) => {
    dispatch(ActionAddProductSlice.editValuesWithKey(payload));
  };

  const handleChangeVideoReview = (e) => {
    dispatch(
      ActionAddProductSlice.editValuesWithKey({
        key: e.target.name,
        value: e.target.value,
      })
    );
  };

  const { getInputProps, getRootProps } = useDropzone({
    onDrop: getImageLinkHandler,
    accept: {
      "application/pdf": [],
    },
    maxSize: 1000000,
  });

  return (
    <StyledDescriptionOverview>
      {isSendDataLoading && <GadgetariumSpinnerLoading />}
      {isLoading && <GadgetariumSpinnerLoading />}
      <Grid container spacing={2.5}>
        <Grid item>
          <Typography>Загрузите видеообзор</Typography>
          <StyledInput
            startAdornment={<DownloadVideoIcon />}
            placeholder="Вставьте ссылку на видеообзор"
            value={values.videoReview}
            onChange={handleChangeVideoReview}
            name="videoReview"
          />
          {Boolean(errors?.videoReview) && (
            <Typography component="p" variant="body2" color="error">
              {errors.videoReview}
            </Typography>
          )}
        </Grid>
        <Grid item {...getRootProps()}>
          <input {...getInputProps()} />
          <Typography>Загрузите документ PDF</Typography>
          <StyledInput
            startAdornment={<DownloadVideoIcon />}
            placeholder={
              values.pdf ? values.pdf : "Вставьте документ в PDF файле"
            }
            title={values.pdf}
          />
          {Boolean(error) && (
            <Typography variant="body2" component="p" color="error">
              {error} 1
            </Typography>
          )}
          {Boolean(errors?.pdf) && (
            <Typography component="p" variant="body2" color="error">
              {errors.pdf} 2
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextEditor onChange={handleChangeDescription} />
        </Grid>
      </Grid>
    </StyledDescriptionOverview>
  );
};

export default DescriptionOverview;

const StyledDescriptionOverview = styled(Box)(() => ({}));
const StyledInput = styled(Input)(() => ({
  width: "396px",
  height: "35px",

  display: "flex",
  gap: "12.5px",
}));
