import {
  Box,
  FormLabel,
  IconButton,
  MenuItem,
  Select,
  styled,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useCallback } from "react";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import {
  ArrowDownIcon,
  DeleteIcon,
  DownloadBannerIcon,
  PlusIcon,
} from "../../../assets";
import useVisibility from "../../../hooks/useVisibility";
import {
  getBrandThunkApi,
  postBrandThunkApi,
} from "../../../redux/slices/add-product";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import Modal from "../../UI/Modal";

const Brand = ({ handleChange, values, errors, Productbrand }) => {
  const [openModal, setOpenModal] = useVisibility();

  const dispatch = useDispatch();

  const {
    handleSubmit,
    setFieldValue,
    handleChange: changeBrandImage,
    values: brandValues,
  } = useFormik({
    initialValues: {
      image: "",
      brandName: "",
    },
    onSubmit: (values) => {
      dispatch(postBrandThunkApi(values)).then((res) => {
        if (res.payload.name !== "AxiosError") {
          setOpenModal();
        }
      });
    },
  });

  useEffect(() => {
    dispatch(getBrandThunkApi());
  }, []);

  const onDrop = useCallback((acceptFiles) => {
    const file = acceptFiles[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFieldValue("image", fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, []);

  const { getInputProps, getRootProps } = useDropzone({ onDrop });

  const findedPRODUCTBRAND = Productbrand?.find(
    (brand) => brand.id === Number(values?.brandId)
  );

  const removeBrandImageHandler = () => {
    setFieldValue("image", "");
  };

  return (
    <>
      <StyledModal open={openModal} handleClose={setOpenModal}>
        <Typography component="h1" variant="h5" className="flex center">
          Добавление бренда
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="flex column gap2"
        >
          {brandValues.image ? (
            <StyledImage className="flex column">
              <img src={brandValues.image} alt="" />
              <StyledButton
                variant="outlined"
                className="brand_button"
                onClick={removeBrandImageHandler}
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

          <StyledFieldNameBrand>
            <Typography
              component="h3"
              variant="body1"
              className="flex flex-start"
            >
              Название бренда
            </Typography>
            <StyledInput
              placeholder="Введите название бренда"
              onChange={changeBrandImage}
              name="brandName"
            />
          </StyledFieldNameBrand>
          <Box className="flex center gap2 buttons">
            <StyledButton
              variant="outlined"
              className="cancel_button"
              onClick={setOpenModal}
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
      <FormLabel required>Бренд</FormLabel>
      <StyledSelect
        displayEmpty
        onChange={handleChange}
        value={values?.brandId}
        name="brandId"
        IconComponent={() => <ArrowDownIcon width={18} height={18} />}
        input={<Input error={Boolean(errors.brandId)} />}
        startAdornment={
          findedPRODUCTBRAND?.image ? (
            <img src={findedPRODUCTBRAND.image} className="brand_icons" />
          ) : (
            <DownloadBannerIcon width={18} height={18} />
          )
        }
        renderValue={() => (
          <>
            {findedPRODUCTBRAND?.brandName ? (
              <Typography variant="body1" component="span">
                {findedPRODUCTBRAND.brandName}
              </Typography>
            ) : (
              <Typography
                variant="body1"
                component="span"
                className="placeholder"
              >
                Выберите бренд товара
              </Typography>
            )}
          </>
        )}
      >
        {Productbrand?.map((catalog) => (
          <StyledMenuItem key={catalog.brandName} value={catalog.id}>
            <IconButton size="small" className="brand_icons">
              <img src={catalog?.image} alt="" />
            </IconButton>
            {catalog.brandName}
          </StyledMenuItem>
        ))}
        <StyledMenuItem className="none_hover" onClick={setOpenModal}>
          <StyledButton className="create_product create_brand" variant="text">
            <PlusIcon />
            Создать новый бренд
          </StyledButton>
        </StyledMenuItem>
      </StyledSelect>
      {errors.brandId && (
        <Typography component="p" variant="body2" color="error">
          {errors.brandId}
        </Typography>
      )}
    </>
  );
};

export default Brand;

const StyledButton = styled(Button)(({ theme }) => ({
  "&.next_button": {
    background: theme.palette.secondary.main,
    color: "#fff !important",
    width: "99px",
    height: "43px",
    justifySelf: "flex-end",
  },
  "&.product_button": {
    padding: ".5rem",
    width: "107px",
    height: "35px",
    color: `${theme.palette.grey[800]} !important`,
    borderColor: `${theme.palette.grey[800]} !important`,
    "&:hover": {
      background: "none",
    },
  },
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

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: "97%",
  margin: "0 auto",
  color: "black",
  padding: "6px 0",
  display: "flex",
  gap: "10px",
  mixBlendMode: "revert-layer",
  "&.MuiMenuItem-root:hover": {
    background: theme.palette.secondary.main,
    borderRadius: "11px",
    color: theme.palette.grey[200],
  },
  "& .brand_icons img": {
    maxWidth: "30px",
    maxHeight: "30px",
    aspectRatio: "9/9",
    objectFit: "contain",
    mixBlendMode: "revert-layer",
    fload: "left",
    borderRadius: "4px",
  },
  "&.none_hover:hover": {
    background: "inherit",
  },
}));

const StyledSelect = styled(Select)(() => ({
  justifyContent: "space-between !important",
  gap: "10px",
  "& .MuiTypography-root": {
    padding: "0 25px !important",
  },
  "& .brand_icons svg": {
    width: "24px",
    height: "24px",
  },
  "& img": {
    width: "20px",
    height: "20px",
    aspectRatio: "1/1",
    objectFit: "contain",
  },
}));

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

const StyledUploadBrandImage = styled(Box)(() => ({
  width: "217px",
  height: "217px",
  background: "rgba(144, 156, 181, 0.2)",
  borderRadius: "4px",
}));

const StyledInput = styled(Input)(() => ({
  width: "100%",
}));

const StyledFieldNameBrand = styled(Box)(() => ({
  width: "100%",
  "& h3": {
    textAlign: "left",
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
