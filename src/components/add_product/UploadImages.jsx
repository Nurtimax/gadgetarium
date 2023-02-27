import { Box, CircularProgress, Grid, styled, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { DownloadBannerIcon } from "../../assets";
import { SWAGGER_API } from "../../utils/constants/fetch";
import ShowUploadImage from "./ShowUploadImage";

const UploadImages = ({
  setFieldValue,
  values,
  getProductIdParam,
  findedSubProductData,
  errors,
}) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getImageLinkHandler = async (file) => {
    setIsLoading(true);
    const bodyFormData = new FormData();
    bodyFormData.append("file", file[0]);
    axios({
      method: "POST",
      url: "${SWAGGER_API}file",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        setFieldValue(
          "subProductRequests",
          values.subProductRequests.map((subproduct, index) => {
            if (index === Number(getProductIdParam)) {
              const newData = {
                ...subproduct,
                images: [...subproduct.images, response.data.link],
              };
              return newData;
            }
            return subproduct;
          })
        );
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error?.message || "Something is wrong");
        setIsLoading(false);
      });
  };

  const editImageHandler = useCallback(
    async (file, product) => {
      setIsLoading(true);
      removeImageHandler(product);
      const bodyFormData = new FormData();
      bodyFormData.append("file", file[0]);
      axios({
        method: "POST",
        url: `${SWAGGER_API}file`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          setFieldValue(
            "subProductRequests",
            values.subProductRequests.map((subproduct, index) => {
              if (index === Number(getProductIdParam)) {
                const result = subproduct.images.map((image) => {
                  if (product === image) {
                    return response.data.link;
                  }
                  return image;
                });
                return { ...subproduct, images: result };
              }
              return subproduct;
            })
          );
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error?.message || "Something is wrong");
          setIsLoading(false);
        });
    },
    [values.subProductRequests]
  );

  const onDrop = useCallback(
    (file) => {
      getImageLinkHandler(file);
    },
    [values.subProductRequests]
  );

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
  });

  const isSubProductData = useMemo(() => {
    if (findedSubProductData.images?.length === 0) {
      return true;
    }
    return false;
  });

  const uploadImageError = useMemo(() => {
    if (Array.isArray(errors.subProductRequests)) {
      return errors.subProductRequests[Number(getProductIdParam)].images;
    }
    return null;
  }, []);
  const removeImageHandler = (item) => {
    setIsLoading(true);
    axios({
      method: "DELETE",
      url: `${SWAGGER_API}file`,
      data: {},
      headers: { "Content-Type": "multipart/form-data" },
      params: {
        fileLink: item,
      },
    })
      .then(() => {
        setFieldValue(
          "subProductRequests",
          values.subProductRequests.map((subproduct, index) => {
            if (Number(getProductIdParam) === index) {
              const newSubProductImages = subproduct.images.filter(
                (image) => image !== item
              );
              const newSubProductData = {
                ...subproduct,
                images: newSubProductImages,
              };
              return newSubProductData;
            }
            return subproduct;
          })
        );
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        return error;
      });
  };

  return (
    <>
      <Typography component="p" variant="body1">
        Добавьте фото
      </Typography>
      <StyledUploadImages
        className={`${uploadImageError || error ? "error" : ""}`}
      >
        <Grid {...getRootProps()} container className="flex center" margin={0}>
          <input {...getInputProps()} />
          {findedSubProductData.images?.length !== 10 && (
            <Grid item xs={2} className="flex center upload_icon">
              <DownloadBannerIcon width={36} height={33} />
            </Grid>
          )}
          {isSubProductData && (
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
          )}
        </Grid>
        <Box
          className={`flex function_icon scroll scroll_tab ${
            findedSubProductData.images?.length === 10 ? "image_fullheight" : ""
          }`}
        >
          {findedSubProductData?.images?.map((product_img, index) => (
            <ShowUploadImage
              key={index}
              product={product_img}
              removeImageHandler={removeImageHandler}
              setError={setError}
              values={values}
              setFieldValue={setFieldValue}
              editImageHandler={editImageHandler}
            />
          ))}
          {findedSubProductData.images?.length !== 0 && isLoading && (
            <CircularProgress size={30} color="grey" />
          )}
        </Box>
      </StyledUploadImages>
      {error && (
        <Typography variant="body2" component="p" color="error">
          {error}
        </Typography>
      )}
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
  "&.error": {
    border: "1px dashed red",
  },
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
  "& .function_icon": {
    width: "380px",
    padding: "0 20px",
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    height: "110px",
  },
  "& .image_fullheight": {
    height: "100%",
  },
  "& .function_icon::-webkit-scrollbar": {
    width: "30px",
  },
}));
