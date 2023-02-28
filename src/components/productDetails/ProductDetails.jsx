import { Container, styled, Rating, Box, Typography } from "@mui/material";
import ImgSlider from "../UI/ImgSlider";
import { img_banner } from "../../assets/images";
import logo from "../../assets/icons/detailTitle.svg";
const ProductDetails = () => {
  return (
    <Styled_Container>
      <Styled_Logo>
        <img src={logo} alt="" className="logo" />
      </Styled_Logo>
      <Styled_Box>
        <Box style={{ width: "50%" }}>
          <ImgSlider images={img_banner} />
        </Box>

        <Box style={{ width: "50%" }}>
          <Styled_Block>
            <Typography variant="h4">Galaxy S21 5G</Typography>
            <Typography variant="div" className="type">
              <span>В наличии (36шт)</span>
              <span>Артикул: 030696</span>
              <span className="flex">
                <Rating readOnly /> (56)
              </span>
              <i></i>
            </Typography>
          </Styled_Block>
        </Box>
      </Styled_Box>
    </Styled_Container>
  );
};

export default ProductDetails;
const Styled_Container = styled(Container)(() => ({}));
const Styled_Logo = styled("div")(() => ({
  width: "100%",
  height: "70px",
  borderBottom: "  1px  solid grey",
  display: "flex",
  alignItems: "center",
}));
const Styled_Box = styled("div")(() => ({
  width: "100%",
  display: "flex",
}));
const Styled_Block = styled("div")(() => ({
  marginTop: "60px",
  height: "530px",
  "& .type": {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "  1px  solid grey",
  },
}));
