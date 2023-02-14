import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { DownloadBannerIcon } from "../../assets";

const UploadImages = ({
  setFieldValue,
  values,
  getProductIdParam,
  findedSubProductData,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setFieldValue(
          "subProductRequests",
          values.subProductRequests.map((subproduct, index) => {
            if (index === Number(getProductIdParam)) {
              const newData = {
                ...subproduct,
                images: [...findedSubProductData.images, reader.result],
              };
              return newData;
            }
            return subproduct;
          })
        );
      };
      reader.readAsDataURL(file);
    },
    [values.subProductRequests, findedSubProductData]
  );
  const { getInputProps, getRootProps } = useDropzone({ onDrop });

  const isSubProductData = useMemo(() => {
    if (findedSubProductData.images?.length === 0) {
      return true;
    }
    return false;
  });

  return (
    <>
      <Typography component="p" variant="body1">
        Добавьте фото
      </Typography>
      <StyledUploadImages>
        <Grid
          container
          className={`flex ${isSubProductData && "center"}`}
          margin={0}
        >
          {findedSubProductData.images?.length !== 10 && (
            <Grid
              {...getRootProps()}
              item
              xs={2}
              className="flex center upload_icon"
            >
              <input {...getInputProps()} />
              <DownloadBannerIcon width={36} height={33} />
            </Grid>
          )}
          {isSubProductData ? (
            <Grid item xs={11} className="upload_img">
              <Typography
                component="div"
                variant="body1"
                className="flex center"
              >
                Нажмите или перетащите сюда файл
              </Typography>
              <Typography
                className="flex center column flex-end lists"
                component="ul"
                variant="body1"
              >
                <Typography component="li">
                  Минимальное разрешение - 450x600
                </Typography>
                <Typography component="li">
                  максимальное количество - 10 фото
                </Typography>
              </Typography>
            </Grid>
          ) : (
            <>
              {findedSubProductData.images?.map((product_img) => (
                <Grid item key={product_img} xs={2.1}>
                  <StyledImg>
                    <img src={product_img} alt="" />
                  </StyledImg>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </StyledUploadImages>
    </>
  );
};

export default UploadImages;

const StyledUploadImages = styled(Box)(({ theme }) => ({
  width: "396px",
  height: "200px",
  background: "#D2D4D880",
  border: "1px dashed",
  borderRadius: "4px",
  padding: ".5rem",
  color: theme.palette.primary.dark,
  "& .upload_icon": {
    height: "75px",
    color: "inherit",
  },
  "& .lists": {
    fontSize: "12px",
    width: "90%",
    justifySelf: "flex-end",
    color: "inherit",
  },
  "& .upload_img": {
    display: "grid",
    color: "inherit",
  },
  "& .MuiGrid-root": {
    padding: "0 !important",
  },
}));

const StyledImg = styled(Box)(() => ({
  width: "66px",
  height: "75px",
  borderRadius: "4px",
  "& img": {
    height: "100%",
    aspectRatio: "4/5",
    objectFit: "contain",
    mixBlendMode: "color-burn",
  },
}));
