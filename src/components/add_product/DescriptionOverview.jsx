import { Box, Grid, styled, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { DownloadVideoIcon } from "../../assets";
import { SWAGGER_API } from "../../utils/constants/fetch";
import GadgetariumSpinnerLoading from "../GadgetariumSpinnerLoading";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import TextEditor from "../UI/TextEditor";

const DescriptionOverview = ({
  setFieldValue,
  values,
  handleChange,
  handleSubmit,
}) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { isLoading: isSendDataLoading } = useSelector(
    (state) => state.addProduct
  );

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
        if (response.data.link) {
          setFieldValue("pdf", response.data.link);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setError(error?.message || "Something is wrong");
        setIsLoading(false);
      });
  };

  const { getInputProps, getRootProps } = useDropzone({
    onDrop: getImageLinkHandler,
  });

  return (
    <StyledDescriptionOverview onSubmit={handleSubmit} component="form">
      {isSendDataLoading && <GadgetariumSpinnerLoading />}
      {isLoading && <GadgetariumSpinnerLoading />}
      <Grid container spacing={2.5}>
        <Grid item>
          <Typography>Загрузите видеообзор</Typography>
          <StyledInput
            startAdornment={<DownloadVideoIcon />}
            placeholder="Вставьте ссылку на видеообзор"
            value={values.videoReview}
            onChange={handleChange}
            name="videoReview"
          />
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
            <Typography variant="body2" component="p">
              {error}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextEditor onChange={setFieldValue} values={values} />
        </Grid>
        <Grid item xs={6.365} className="flex gap2 flex-end">
          <StyledButton className="cancel_button" type="button">
            Отменить
          </StyledButton>
          <StyledButton className="add_button" type="submit">
            Добавить
          </StyledButton>
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
const StyledButton = styled(Button)(({ theme }) => ({
  width: "134px",
  height: "43px",
  fontSize: "1rem",
  fontWeight: 600,
  "&.cancel_button": {
    border: `1px solid ${theme.palette.secondary.main}`,
    "&:hover": {
      background: "white",
      color: theme.palette.secondary.main,
    },
  },
  "&.add_button": {
    background: theme.palette.secondary.main,
    color: "white",
  },
}));
