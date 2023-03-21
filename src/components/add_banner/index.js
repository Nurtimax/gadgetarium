import { Box, CardMedia, styled, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { Fragment, useCallback } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { DeleteIcon, DownloadBannerIcon } from "../../assets";
import { postBannerImagesThunk } from "../../redux/slices/add-banners-slice";
import { addBannerImagesSchema } from "../../utils/constants/add-banner";
import { SWAGGER_API } from "../../utils/constants/fetch";
import GadgetariumSpinnerLoading from "../GadgetariumSpinnerLoading";
import Button from "../UI/button/Button";
import Modal from "../UI/Modal";
import SuccessMessage from "./SuccesMessage";

const AddBanner = ({ setOpenModal, openModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [customError, setCustomError] = useState(false);

  const { isLoading: bannerIsLoading } = useSelector(
    (state) => state.addBanner
  );

  const dispatch = useDispatch();

  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: {
      image: [],
    },
    validationSchema: addBannerImagesSchema,
    onSubmit: (values, action) => {
      dispatch(postBannerImagesThunk(values)).then((response) => {
        if (response.payload.data.status === "ok") {
          setOpenModal();
          action.resetForm();
          if (response.payload.data.message) {
            toast.success(response.payload.data.message);
          }
        } else {
          setCustomError("Что-то не так с сервером или данными");
        }
      });
    },
  });

  const getBrandLinkHandler = async (file) => {
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
        setFieldValue("image", [...values.image, response.data.link]);
      })
      .catch((error) => {
        if (error.message) {
          toast.error(error.message);
          setCustomError(error.message);
        }
        return error;
      });
    setIsLoading(false);
  };

  const onDrop = useCallback(
    (acceptFiles) => {
      getBrandLinkHandler(acceptFiles);
    },
    [values.image]
  );

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg"],
    },
  });

  const removeBrandImageHandler = (image) => {
    setIsLoading(true);

    axios({
      method: "DELETE",
      url: `${SWAGGER_API}file`,
      data: {},
      headers: { "Content-Type": "multipart/form-data" },
      params: {
        fileLink: image,
      },
    })
      .then((response) => {
        const removedImage = response.data.message
          .split(" has been deleted")
          .join("");
        setFieldValue("image", [
          ...values.image.filter((item) => item !== image),
        ]);
        toast.success(<SuccessMessage image={removedImage} />);
      })
      .catch((error) => {
        if (error.message) {
          toast.error(error.message);
          setCustomError(error.message);
        }
        return error;
      });
    setIsLoading(false);
  };

  const imagesLength = useMemo(() => {
    if (values.image.length === 1) {
      return "one_images";
    }
    if (values.image.length === 2) {
      return "two_images gap";
    }
    if (values.image.length === 3) {
      return "three_images wrap between";
    }
    if (values.image.length === 4) {
      return "four_image";
    }
    if (values.image.length === 5) {
      return "five_image";
    }
    if (values.image.length === 6) {
      return "six_image gap2";
    }
    return "";
  }, [values.image]);

  return (
    <>
      {isLoading && <GadgetariumSpinnerLoading />}
      {bannerIsLoading && <GadgetariumSpinnerLoading />}
      <StyledModal open={openModal} handleClose={setOpenModal}>
        <Typography component="h1" variant="h5" className="flex center">
          Загрузить баннер
        </Typography>
        <Box
          component="form"
          className="flex column gap2"
          onSubmit={handleSubmit}
        >
          <StyledUploadBannerImage className={`flex center`}>
            <Box className={`flex images ${imagesLength}`}>
              {[1, ...values.image].map((image) => (
                <Fragment key={image}>
                  {Number(image) === 1 ? (
                    <Box className="banner_default" {...getRootProps()}>
                      <input {...getInputProps()} />
                      <DownloadBannerIcon width={36} height={33} />
                      <Typography
                        variant="body2"
                        component="span"
                        className="text-center"
                        color="grey"
                      >
                        Добавить фото
                      </Typography>
                    </Box>
                  ) : (
                    <StyledImage className="grid image_item" image={image}>
                      <StyledButton
                        variant="outlined"
                        className="branner_button"
                        type="button"
                        onClick={() => removeBrandImageHandler(image)}
                      >
                        <DeleteIcon />
                      </StyledButton>
                      <CardMedia image={image} className="image" />
                    </StyledImage>
                  )}
                </Fragment>
              ))}
            </Box>
          </StyledUploadBannerImage>

          {errors.image && (
            <Typography variant="body2" color="error">
              {errors.image}
            </Typography>
          )}
          {customError && (
            <Typography variant="body2" color="error">
              {customError}
            </Typography>
          )}

          <Box className="flex center gap2 buttons">
            <StyledButton
              variant="outlined"
              className="cancel_button"
              onClick={setOpenModal}
              type="button"
            >
              Отменить
            </StyledButton>
            <StyledButton
              variant="contained"
              className="send_button"
              type="submit"
            >
              Загрузить
            </StyledButton>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddBanner;

const StyledModal = styled(Modal)(() => ({
  "& .MuiDialogContent-root": {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: "544px",
    alignItems: "center",
  },
  "& .buttons": {
    justifyContent: "space-between",
    width: "100%",
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  "&.send_button": {
    background: theme.palette.secondary.main,
    borderRadius: 4,
    width: "230px",
    height: "39px",
    textTransform: "uppercase",
  },
  "&.cancel_button": {
    background: "inherit",
    borderRadius: 4,
    width: "230px",
    height: "39px",
    color: `${theme.palette.secondary.main} !important`,
  },
  "&.branner_button": {
    width: "30px",
    height: "30px",
    position: "absolute",
    justifySelf: "flex-start",
    alignSelf: "flex-start",
  },
}));

const StyledUploadBannerImage = styled(Box)(() => ({
  background: "#909CB533",
  borderRadius: "4px",
  padding: "10px",
  display: "flex",
  "& .banner_default": {
    width: "210px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .one_images .image": {
    width: "210px",
    height: "150px",
  },
  "& .one_images.images .image_item:nth-of-type(2)": {
    justifyContent: "center",
  },
  "& .two_images .banner_default": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .two_images .image": {
    width: "150px",
  },
  "& .two_images.images .image_item:nth-of-type(2)": {
    width: "100%",
  },
  "& .two_images.images .image_item:nth-of-type(3)": {
    width: "100%",
  },
  "& .three_images": {
    width: "400px",
  },
  "& .three_images .banner_default": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .three_images.images .image_item:first-of-type": {
    width: "133px",
  },
  "& .three_images.images .image_item:nth-of-type(2)": {
    width: "33%",
  },
  "& .three_images.images .image_item:nth-of-type(3)": {
    width: "33%",
  },
  "& .three_images.images .image_item:nth-of-type(4)": {
    width: "33%",
  },
  "& .four_image": {
    width: "480px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "1px",
  },
  "& .four_image .banner_default": {
    width: "33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .six_image .banner_default": {
    display: "none",
  },
  "& .five_image .banner_default": {
    width: "30%",
  },
  "& .four_image .image_item:nth-of-type(2) ": {
    width: "33%",
  },
  "& .four_image .image_item:nth-of-type(3) ": {
    width: "33%",
  },
  "& .four_image .image_item:nth-of-type(4) ": {
    width: "49%",
  },
  "& .four_image .image_item:last-child ": {
    width: "49%",
  },

  "& .five_image": {
    width: "480px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "5px",
  },
  "& .five_image .image_item:nth-of-type(2) ": {
    width: "30%",
  },
  "& .five_image .image_item:nth-of-type(3) ": {
    width: "30%",
  },
  "& .five_image .image_item:nth-of-type(4) ": {
    width: "30%",
  },
  "& .five_image .image_item:nth-of-type(5) ": {
    width: "30%",
  },
  "& .five_image .image_item:last-child ": {
    width: "30%",
  },
  "& .six_image": {
    width: "480px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));
const StyledImage = styled(Box)(() => ({
  alignItems: "flex-end",
  borderRadius: "4px",
  position: "relative",
  "& .image": {
    borderRadius: "4px",
    width: "100%",
    height: "150px",
  },
}));
