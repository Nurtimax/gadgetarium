import { Box, styled } from "@mui/material";
import React, { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { DeleteIcon, EditIcon } from "../../assets";

const ShowUploadImage = ({
  setFieldValue,
  values,
  product,
  index,
  removeImageHandler,
}) => {
  const editImageOnDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setFieldValue(
          "subProductRequests",
          values.subProductRequests.map((subproduct) => {
            const imageIndex =
              dropZoneRef.current.attributes.getNamedItem("name").value;

            const imageId =
              dropZoneRef.current.attributes.getNamedItem("id").value;

            subproduct.images.splice(
              imageId === "first" ? 0 : Number(imageIndex),
              1,
              reader.result
            );
            return subproduct;
          })
        );
      };
      reader.readAsDataURL(file);
    },
    [values.subProductRequests]
  );

  const {
    getInputProps: editGetInputProps,
    getRootProps: editGetRootProps,
    open,
  } = useDropzone({ onDrop: editImageOnDrop });

  const dropZoneRef = useRef(null);

  return (
    <StyledImg>
      <img src={product} alt="" />
      <Box className="change_image gap">
        <DeleteIcon
          className="icon delete_icon"
          onClick={() => removeImageHandler(product)}
        />
        <EditIcon className="icon edit_icon" onClick={open} />
      </Box>
      <Box
        {...editGetInputProps({
          name: index,
          id: index === 0 ? "first" : "",
        })}
        ref={dropZoneRef}
      >
        <input {...editGetRootProps()} />
      </Box>
    </StyledImg>
  );
};

export default ShowUploadImage;

const StyledImg = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "75px",
  borderRadius: "4px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  "& img": {
    height: "100%",
    objectFit: "contain",
    mixBlendMode: "color-burn",
    borderRadius: 5,
    aspectRatio: "1/1",
  },
  "& .change_image": {
    position: "absolute",
    display: "flex",
    width: "100px",
    height: "75px",
    alignItems: "flex-end",
  },
  "& .change_image .edit_icon:hover path, & .change_image .delete_icon:hover path":
    {
      fill: `${theme.palette.secondary.main} !important`,
    },
}));
