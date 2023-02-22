import { Box, styled } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { DeleteIcon, EditIcon } from "../../assets";

const ShowUploadImage = ({ product, removeImageHandler, editImageHandler }) => {
  const editImageOnDrop = (acceptFiles) => {
    editImageHandler(acceptFiles, product);
  };

  const {
    getInputProps: editGetInputProps,
    getRootProps: editGetRootProps,
    open,
  } = useDropzone({ onDrop: editImageOnDrop });

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
      <Box {...editGetInputProps()}>
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
