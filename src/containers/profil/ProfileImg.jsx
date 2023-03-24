import { Box, styled, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AddImage } from "../../assets";
import { SWAGGER_API } from "../../utils/constants/fetch";

const ProfileImg = ({ setFieldValue, values }) => {
  const getImageLinkHandler = async (file) => {
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
      })
      .catch(() => {
        // setIsLoading(false);
      });
  };

  const onDrop = useCallback((files) => {
    getImageLinkHandler(files);
  }, []);
  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
  });
  return (
    <StyledImage {...getRootProps()}>
      <Typography variant="input" {...getInputProps()} />
      <AddImage className="img" />
      <p>Нажмите для добавления фотографии</p>
    </StyledImage>
  );
};

export default ProfileImg;
const StyledImage = styled(Box)(() => ({
  textAlign: "center",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  "& p": {
    color: " #91969E",
    cursor: "pointer",
  },
  "& .img": {
    cursor: "pointer",
  },
}));
