import { Box, CardMedia, styled, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useCallback } from "react";
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { DeleteIcon, DownloadBannerIcon } from "../../assets";
import { SWAGGER_API } from "../../utils/constants/fetch";
import Button from "../UI/button/Button";
import Modal from "../UI/Modal";

const AddBanner = ({ setOpenModal, openModal }) => {
  const { values, setFieldValue } = useFormik({
    initialValues: {
      images: [],
    },
  });

  const getBrandLinkHandler = async (file) => {
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
      .catch((error) => {
        return error;
      });
  };

  const onDrop = useCallback(
    (acceptFiles) => {
      getBrandLinkHandler(acceptFiles);
    },
    [values.images]
  );

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg"],
    },
  });

  const removeBrandImageHandler = (image) => {
    axios({
      method: "DELETE",
      url: `${SWAGGER_API}file`,
      data: {},
      headers: { "Content-Type": "multipart/form-data" },
      params: {
        fileLink: image,
      },
    })
      .then(() => {
        setFieldValue("images", [
          ...values.images.filter((item) => item !== image),
        ]);
      })
      .catch((error) => {
        return error;
      });
  };

  const imagesLength = useMemo(() => {
    if (values.images.length === 1) {
      return "one_images";
    }
    if (values.images.length === 2) {
      return "two_images gap";
    }
    if (values.images.length === 3) {
      return "three_images wrap between";
    }
    if (values.images.length === 4) {
      return "four_image";
    }
    if (values.images.length === 5) {
      return "five_image";
    }
    if (values.images.length === 6) {
      return "six_image gap2";
    }
    return "";
  }, [values.images]);

  return (
    <>
      <StyledModal open={openModal} handleClose={setOpenModal}>
        <Typography component="h1" variant="h5" className="flex center">
          Загрузить баннер
        </Typography>
        <Box component="form" className="flex column gap2">
          <StyledUploadBannerImage className={`flex center`}>
            <Box className={`flex images ${imagesLength}`}>
              {[1, ...values.images].map((image) => (
                <>
                  {Number(image) === 1 ? (
                    <Box
                      className="banner_default"
                      {...getRootProps()}
                      key={image + 2}
                    >
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
                    <StyledImage
                      className="flex image_item"
                      key={image + 1}
                      image={image}
                    >
                      <StyledButton
                        variant="outlined"
                        className="branner_button"
                        type="button"
                        onClick={() => removeBrandImageHandler(image)}
                      >
                        <DeleteIcon />
                      </StyledButton>
                      {/* <img src={image} alt="" /> */}
                      <CardMedia image={image} className="image" />
                      {/* <Box className="image" /> */}
                    </StyledImage>
                  )}
                </>
              ))}
            </Box>
          </StyledUploadBannerImage>

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
    width: "90%",
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
