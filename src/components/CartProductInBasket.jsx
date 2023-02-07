import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import { DeleteIconInCart, HeartActiveIcon, HeartIcon } from "../assets";
import { priceProductSeparate } from "../utils/helpers/general";

const CartProductInBasket = ({
  onFavorite,
  onDelete,
  name,
  seriesNumber,
  image,
  reviewCount,
  rating,
  availableCount,
  code,
  price,
  onMinus,
  onPlus,
  count,
  isMinusDisabled,
  isPlusDisabled,
}) => {
  const priceProduct = price * count;

  return (
    <Container>
      <StyledMainContainer>
        <StyledCard>
          <StyledCardMedia
            component="img"
            image={image}
            alt="product image in basket"
          />
          <StyledCardContent>
            <div>
              <NameProduct>{name}</NameProduct>

              <NameProduct>{seriesNumber}</NameProduct>

              <BoxRating>
                <TextRating>Рейтинг</TextRating>

                <Rating readOnly value={rating} />

                <TextRating>({reviewCount})</TextRating>
              </BoxRating>

              <TextInStock>В наличии ({availableCount}шт)</TextInStock>

              <TextProductCode>Код товара: {code}</TextProductCode>
            </div>

            <div>
              <BoxCounterAndPrice>
                <BoxCounter>
                  <ButtonCounter onClick={onMinus} disabled={isMinusDisabled}>
                    -
                  </ButtonCounter>

                  <TextCount>{count}</TextCount>

                  <ButtonCounter onClick={onPlus} disabled={isPlusDisabled}>
                    +
                  </ButtonCounter>
                </BoxCounter>

                <TextPrice>{priceProductSeparate(priceProduct)}c</TextPrice>
              </BoxCounterAndPrice>

              <BoxIcons>
                <IconsTexts onClick={onFavorite}>
                  <Checkbox
                    icon={<IconHeart className="heart" />}
                    checkedIcon={<ActiveHeartIcon />}
                  />
                  В избранное
                </IconsTexts>

                <IconsTexts onClick={onDelete}>
                  <DeleteIconInCart />
                  Удалить
                </IconsTexts>
              </BoxIcons>
            </div>
          </StyledCardContent>
        </StyledCard>
      </StyledMainContainer>
    </Container>
  );
};

export default CartProductInBasket;

const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "24px",
  width: "100%",

  "& .MuiButtonBase-root": {
    padding: "0",
    width: "16px",
    height: "16px",
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: "0",
  },
  "& .MuiButtonBase-root:hover": {
    backgroundColor: theme.palette.primary.contrastText,
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "170px",
  width: "929px",
  padding: "20px",
  borderRadius: "0",
  color: "none",
  boxShadow: "none",
  background: theme.palette.primary.contrastText,
  display: "flex",
  gap: "47px",

  "& .MuiCardContent-root:last-child": {
    paddingBottom: "0",
  },

  "& .MuiCardContent-root": {
    padding: "0",
  },
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  width: "106px",
  height: "121px",
}));

const NameProduct = styled(Typography)(({ theme }) => ({
  width: "390px",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "18px",
  color: theme.palette.primary.dark,
}));

const BoxRating = styled("div")(() => ({
  paddingTop: "8px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  "& .MuiSvgIcon-root": {
    width: "0.7em",
    height: "0.7em",
  },
}));

const TextRating = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "12px",
  color: theme.palette.grey[900],
}));

const TextInStock = styled(Typography)(({ theme }) => ({
  paddingTop: "8px",
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "12px",
  color: theme.palette.success.light,
}));

const TextProductCode = styled(Typography)(({ theme }) => ({
  paddingTop: "10px",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "14px",
  color: theme.palette.primary.light,
}));

const StyledCardContent = styled(CardContent)(() => ({
  display: "flex",
  gap: "30px",
}));

const ButtonCounter = styled("button")(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "16px",
  textTransform: "lowercase",
  color: theme.palette.primary.light,
  border: `1px solid ${theme.palette.grey[900]}`,
  backgroundColor: theme.palette.primary.contrastText,
  width: "28px",
  height: "28px",
  borderRadius: "50px",
  cursor: "pointer",
}));

const TextCount = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "18px",
  color: theme.palette.grey[900],
}));

const TextPrice = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: "700",
  fontSize: "18px",
  color: theme.palette.primary.dark,
}));

const BoxCounterAndPrice = styled("div")(() => ({
  paddingTop: "30px",
  display: "flex",
  gap: "30px",
}));

const BoxCounter = styled("div")(() => ({
  display: "flex",
  gap: "12px",
}));

const IconsTexts = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  color: theme.palette.grey[900],
  "& .heart path": {
    stroke: theme.palette.grey[900],
  },
}));

const IconHeart = styled(HeartIcon)(() => ({
  height: "13.31px",
  width: "16px",
}));

const ActiveHeartIcon = styled(HeartActiveIcon)(() => ({
  height: "13.31px",
  width: "16px",
}));

const BoxIcons = styled("div")(() => ({
  display: "flex",
  gap: "14px",
  paddingTop: "46px",
  paddingLeft: "120px",
}));
