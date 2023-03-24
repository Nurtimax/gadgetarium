import { styled, Rating, Box, Typography, Grid } from "@mui/material";
import ImgSlider from "../../components/UI/ImgSlider";
import IconButton from "./../../components/UI/IconButton";
import { CartIcon, HeartActiveIcon, Favorites } from "../../assets";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionProductDetails } from "../../redux/slices/product-details-slice";
import ChooseColor from "../../components/UI/ChooseColor";
import ProductData from "../../components/product-details/ProductData";
import { getDicountPrice } from "./../../utils/helpers/get-discount-price";
import { postProductToBasket } from "../../redux/slices/basket-slice";
import PopUp from "../../components/UI/PopUp";
import { postFavoriteProducts } from "../../redux/slices/favorite-slice";
import { useParams } from "react-router-dom";
const ProductDetails = ({ data, chooseItem, count, images }) => {
  const { subproducts = [] } = data;

  const { catalogItem, product } = useParams();

  const [text, setText] = useState(["", "", ""]);

  const [dropDown, setDropDown] = useState(false);

  const basketData = useSelector((state) => state.basket.data);

  const dispatch = useDispatch();

  const findedSubProduct = useMemo(() => {
    return subproducts.find((product) => product.id === chooseItem);
  }, [chooseItem]);

  const chooseColorHandler = (colorId, images) => {
    dispatch(ActionProductDetails.setChooseItem(colorId));
    dispatch(ActionProductDetails.addImages(images));
  };

  useEffect(() => {
    dispatch(ActionProductDetails.addImages(subproducts[0]?.images));
    dispatch(ActionProductDetails.setChooseItem(subproducts[0]?.id));
  }, [data?.subproducts]);

  useEffect(() => {
    dispatch(ActionProductDetails.setDetails(findedSubProduct));
    window.scroll(0, 150);
  }, [findedSubProduct]);

  const plusHandler = () => {
    dispatch(ActionProductDetails.plusCount());
  };
  const minusHandler = () => {
    dispatch(ActionProductDetails.minusCount());
  };

  const onClickCartHandler = () => {
    if (basketData?.some((item) => item.id === findedSubProduct.id)) {
      alert("Товар уже добавлен!");
    } else {
      dispatch(
        postProductToBasket({
          orderCount: findedSubProduct.countOfSubproduct,
          productId: findedSubProduct.id,
        })
      ).then(() => {
        setText([
          "Товар успешно добавлен в корзину!",
          "Перейти в корзину",
          "/cart",
        ]);
        setDropDown(true);
      });
    }
  };
  const closeDropDown = () => {
    setDropDown(false);
  };

  const attribute = location.pathname
    .split(`/item/${catalogItem}/${product}/`)
    .join("");

  const addToFavoriteHandler = () => {
    dispatch(postFavoriteProducts({ productId: data.id, attribute })).then(
      () => {
        data.favorite
          ? setText([
              "Товар удалён из избранных!",
              "Перейти в избранное",
              "/favorite",
            ])
          : setText([
              "Товар добавлен в избранное!",
              "Перейти в избранное",
              "/favorite",
            ]);

        setDropDown(true);
      }
    );
  };

  return (
    <>
      <PopUp
        open={dropDown}
        handleClose={closeDropDown}
        addedTitle={text[0]}
        transitionTitle={text[1]}
        to={text[2]}
        durationSnackbar={2000}
        icon={true}
        vertical="top"
        horizontal="right"
      />

      <Styled_Container>
        <Grid container>
          <Grid className="logo" item xs={12}>
            <h1>{data.subCategoryName}</h1>
          </Grid>
          <Grid container className="paddingTop">
            <Grid item xs={6}>
              <ImgSlider images={images} />
            </Grid>

            <Grid item xs={6} className="content">
              <Styled_Block>
                <Grid container className="type">
                  <Grid item xs={12}>
                    <Typography variant="h4">{data.productName}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <span className="green">
                      в наличии (
                      {findedSubProduct?.countOfSubproduct.toString()}
                      шт)
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <span>Артикул: {data?.productVendorCode?.toString()}</span>
                  </Grid>

                  <Grid item xs={4}>
                    <span className="flex grey">
                      <Rating
                        size="small"
                        readOnly
                        value={data?.productRating || 0}
                      />
                      ({data?.countOfReviews})
                    </span>
                  </Grid>
                </Grid>

                <Grid container className="colors">
                  <Grid item xs={12} className="flex data">
                    <Container_Color>
                      <p>Цвет товара:</p>
                      <Stled_Box>
                        {subproducts?.map((item) => (
                          <Box
                            key={item.id}
                            onClick={() =>
                              chooseColorHandler(item.id, item.images)
                            }
                          >
                            <ChooseColor
                              key={item.id}
                              checked={item.id}
                              choosed={chooseItem}
                              color={item?.colorName}
                            />
                          </Box>
                        ))}
                      </Stled_Box>
                    </Container_Color>
                    <Grid container className="text-center count">
                      <Grid item xs={12} className="btn">
                        <p>Количество:</p>
                      </Grid>
                      <Grid item xs={5}>
                        <Styled_Button
                          onClick={minusHandler}
                          disabled={count === 1}
                        >
                          -
                        </Styled_Button>
                      </Grid>
                      <Grid item xs={2}>
                        {count}
                      </Grid>
                      <Grid item xs={5}>
                        <Styled_Button onClick={plusHandler}>+</Styled_Button>
                      </Grid>
                    </Grid>

                    <Grid item xs={5} className=" center">
                      <div>
                        {data.amountOfDiscount > 0 ? (
                          <Styled_Price>
                            <Discount_Styled>
                              -{data.amountOfDiscount}%
                            </Discount_Styled>
                            <Discount_Price>
                              {findedSubProduct?.price.toString()}c
                            </Discount_Price>
                            <Price>
                              {getDicountPrice(
                                data.amountOfDiscount,
                                findedSubProduct?.price.toString()
                              )}
                            </Price>
                          </Styled_Price>
                        ) : (
                          <Styled_Price>
                            <Discount_Price>
                              {findedSubProduct?.price.toString()}c
                            </Discount_Price>
                          </Styled_Price>
                        )}

                        <div className="between">
                          <Component_Button
                            variant="outlined"
                            onClick={addToFavoriteHandler}
                          >
                            {data.favorite ? (
                              <HeartActiveIcon />
                            ) : (
                              <Favorites />
                            )}
                          </Component_Button>
                          <IconButton
                            onClick={onClickCartHandler}
                            width="195px"
                            icon={<CartIcon />}
                          >
                            В корзину
                          </IconButton>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <ProductData subproducts={findedSubProduct} productId={data} />
              </Styled_Block>
            </Grid>
          </Grid>
        </Grid>
      </Styled_Container>
    </>
  );
};

export default ProductDetails;
const Styled_Container = styled("div")(() => ({
  minHeight: "500px",
  "& p": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
  },
  "& .paddingTop": {
    paddingTop: "60px",
  },

  "& .logo": {
    width: "100%",
    height: "70px",
    borderBottom: "  1px  solid grey",
    display: "flex",
    alignItems: "center",
    "& h1": {
      color: "darkblue",
      textTransform: "uppercase",
    },
    "& .content": {
      width: "100%",
      display: "flex",
      "& h4": {
        fontFamily: "Ubuntu",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "30px",
      },
    },
  },
  "& .colors": {
    paddingTop: "30px",
  },
  "& .count": {
    width: "102px",
    margin: "0 auto",
    height: "100%",
    alignItems: "flex-start",
  },
}));

const Styled_Block = styled("div")(() => ({
  "& .type": {
    height: "80px",
    borderBottom: "  1px  solid grey",
  },
  "& .green": {
    color: "#2FC509",
  },
  "& .grey": {
    color: "grey",
  },
}));
const Styled_Price = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100%",
  borderBottom: "1px solid grey",
  marginBottom: "20px",
  paddingBottom: "10px",
}));

const Discount_Price = styled("span")(() => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  alignItems: "center",
}));

const Price = styled("span")(() => ({
  fontSize: "16px",
  color: "grey",
  textAlign: "center",
  textDecoration: "line-through",
}));

const Container_Color = styled(Box)(() => ({
  height: "100%",
  width: "150px",
}));
const Stled_Box = styled(Box)(() => ({
  display: "flex",
  width: "178px",
  gap: 10,
  paddingTop: "20px",
}));
const Discount_Styled = styled("div")(() => ({
  color: "white",
  width: "2vw",
  height: "2vw",
  fontWeight: "900",
  borderRadius: "50%",
  background: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.5rem",
}));
const Styled_Button = styled("button")(() => ({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  cursor: "pointer",
  border: "1px solid grey",

  "&:hover": {
    background: "#292929",
    color: "white",
  },
}));

const Component_Button = styled("div")(() => ({
  width: "65px",
  border: "1px solid grey",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "10px",
}));
