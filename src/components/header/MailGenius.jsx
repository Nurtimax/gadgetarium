import { Box, FormLabel, styled, Typography } from "@mui/material";
import axios from "axios";
import { format } from "date-fns";
import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { DeleteIcon, DownloadBannerIcon } from "../../assets";
import { sendMailingThunk } from "../../redux/slices/mailing-slice";
import { SWAGGER_API } from "../../utils/constants/fetch";
import DatePicker from "../orders/DatePicker";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Modal from "../UI/Modal";

const MailGenius = ({ openModal, setOpenModal }) => {
  const [dates, setDates] = useState([null, null]);

  const dispatch = useDispatch();

  const { values, setFieldValue, handleChange, handleSubmit } = useFormik({
    initialValues: {
      mailingName: "",
      description: "",
      image: "",
      mailingDateOfStart: "",
      mailingDateOfEnd: "",
    },
    onSubmit: (value, action) => {
      dispatch(sendMailingThunk(value)).then((res) => {
        if (res.payload.status === "ok") {
          action.resetForm();
          setDates([null, null]);
          setOpenModal();
          toast.success(res.payload.message);
        }
      });
    },
  });

  useEffect(() => {
    if (dates[0]) {
      const dateFormat = format(new Date(dates[0]), "yyyy-MM-dd");
      setFieldValue("mailingDateOfStart", dateFormat);
    }
  }, [dates]);

  useEffect(() => {
    if (dates[1]) {
      const dateFormat = format(new Date(dates[1]), "yyyy-MM-dd");
      setFieldValue("mailingDateOfEnd", dateFormat);
    }
  }, [dates]);

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
        setFieldValue("image", response.data.link);
      })
      .catch((error) => {
        return error;
      });
  };

  const onDrop = useCallback((acceptFiles) => {
    getBrandLinkHandler(acceptFiles);
  }, []);

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
        setFieldValue("image", "");
      })
      .catch((error) => {
        return error;
      });
  };

  return (
    <StyledMailGenius>
      <StyledModal open={openModal} handleClose={setOpenModal}>
        <Typography component="h1" variant="h5" className="flex center">
          Создать рассылку
        </Typography>
        <Box
          component="form"
          className="flex column gap2"
          onSubmit={handleSubmit}
        >
          {values.image ? (
            <StyledImage className="flex column">
              <img src={values.image} alt="" />
              <StyledButton
                variant="outlined"
                className="brand_button"
                onClick={() => removeBrandImageHandler(values.image)}
              >
                <DeleteIcon />
              </StyledButton>
            </StyledImage>
          ) : (
            <StyledUploadBrandImage
              className="flex center column"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <DownloadBannerIcon width={36} height={33} />
              <Typography
                variant="body2"
                component="span"
                className="text-center"
                color="grey"
              >
                Нажмите для добавления фотографии
              </Typography>
            </StyledUploadBrandImage>
          )}

          <StyledFieldName className="column align-start  gap">
            <FormLabel required className="flex flex-start">
              Название рассылки
            </FormLabel>
            <StyledInput
              placeholder="Введите название бренда"
              value={values.mailingName}
              onChange={handleChange}
              name="mailingName"
            />
            <FormLabel required className="flex flex-start">
              Описание рассылки
            </FormLabel>
            <StyledInput
              placeholder="Введите название бренда"
              value={values.description}
              onChange={handleChange}
              name="description"
            />
          </StyledFieldName>
          <StyledDatePicker
            date={dates}
            setDate={setDates}
            FormLabelTitle={["Дата начала акции ", "Дата окончания акции"]}
          />
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
              отправить
            </StyledButton>
          </Box>
        </Box>
      </StyledModal>
    </StyledMailGenius>
  );
};

export default MailGenius;

const StyledMailGenius = styled(Box)(() => ({}));

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
  "&.create_product": {
    width: "201px",
    height: "35px",
    color: `${theme.palette.secondary.main} !important`,
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    gap: 6,
    background: "inherit",
  },
  "&.create_brand": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    padding: 0,
  },
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
  "&.brand_button": {
    width: "30px",
    height: "30px",
  },
}));

const StyledImage = styled(Box)(() => ({
  alignItems: "flex-end",
  "& img": {
    width: "217px",
    height: "217px",
    objectFit: "contain",
  },
}));

const StyledFieldName = styled(Box)(() => ({
  width: "100%",
  "& h3": {
    textAlign: "left",
  },
}));

const StyledInput = styled(Input)(() => ({
  width: "100%",
}));

const StyledUploadBrandImage = styled(Box)(() => ({
  width: "217px",
  height: "217px",
  background: "rgba(144, 156, 181, 0.2)",
  borderRadius: "4px",
}));

const StyledDatePicker = styled(DatePicker)(() => ({
  padding: "0 0 30px",
  "& .MuiInputBase-root": {
    width: "230px",
  },
}));
