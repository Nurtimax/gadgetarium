import { Box, styled } from "@mui/material";
import React, { useMemo } from "react";

const ProductData = ({ subproducts, productId }) => {
  const productCategoria = useMemo(() => {
    switch (productId.categoryName) {
      case "Ноутбуки":
        return (
          <Styled_Product>
            <li>
              Экран..................................................
              <span>
                {subproducts?.characteristics?.screenResolutionLaptop}
              </span>
            </li>
            <li>
              Цвет.....................................................
              <span>{subproducts?.colorName}</span>
            </li>
            <li>
              Операционная система..............
              <span>{subproducts?.characteristics?.laptopCPU}</span>
            </li>
            <li>
              Оперативная память....................
              <span>{subproducts?.characteristics?.ramOfLaptop}GB</span>
            </li>
            <li>
              Pазмер экрана ноутбука.............
              <span>{subproducts?.characteristics?.screenSizeLaptop}</span>
            </li>
            <li>
              Память видеокарты......................
              <span>{subproducts?.characteristics?.videoCardMemory}GB</span>
            </li>
          </Styled_Product>
        );
      case "Смартфоны":
        return (
          <Styled_Product>
            <li>
              Память..........................................
              <span>{subproducts?.characteristics?.memoryOfPhone}GB</span>
            </li>
            <li>
              Цвет................................................
              <span>{subproducts?.colorName}</span>
            </li>
            <li>
              Oперативная память..............
              <span>{subproducts?.characteristics?.ramOfPhone}GB</span>
            </li>
            <li>
              SIM-карты....................................
              <span>{subproducts?.characteristics?.simCard}</span>
            </li>
          </Styled_Product>
        );
      case "Планшеты":
        return (
          <Styled_Product>
            <li>
              Pазрешение экрана.........................
              <span>
                {subproducts?.characteristics?.screenResolutionOfTablet}
              </span>
            </li>
            <li>
              Цвет........................................................
              <span>{subproducts?.colorName}</span>
            </li>
            <li>
              Экран диагонал.................................
              <span>
                {subproducts?.characteristics?.screenDiagonalOfTablet}
              </span>
            </li>
            <li>
              Память...................................................
              <span>{subproducts?.characteristics?.memoryOfTablet}GB</span>
            </li>
            <li>
              Oперативная память.......................
              <span>{subproducts?.characteristics?.ramOfTablet}GB</span>
            </li>
            <li>
              Pазмер экрана планшета..............
              <span>{subproducts?.characteristics?.screenSizeOfTablet}</span>
            </li>
          </Styled_Product>
        );
      case "Смарт-часы и браслеты":
        return (
          <Styled_Product>
            <li>
              Цвет.................................................
              <span>{subproducts?.colorName}</span>
            </li>
            <li>
              Материал браслета..................
              <span>{subproducts?.characteristics?.braceletMaterial}</span>
            </li>
            <li>
              Чехол форма...............................
              <span>{subproducts?.characteristics?.caseShape}</span>
            </li>
            <li>
              Пол...................................................
              <span>{subproducts?.characteristics?.gender}</span>
            </li>
            <li>
              Память умных часов...............
              <span>{subproducts?.characteristics?.memoryOfSmartWatch}</span>
            </li>
            <li>
              Диагональ экрана.....................
              <span>
                {subproducts?.characteristics?.screenDiagonalOfSmartWatch}
              </span>
            </li>
            <li>
              Водонепроницаемый..............
              <span>{subproducts?.characteristics?.waterProof}</span>
            </li>
            <li>
              Беспроводной интерфейс.....
              <span>{subproducts?.characteristics?.wirelessInterface}</span>
            </li>
          </Styled_Product>
        );
      default:
        return null;
    }
  }, [subproducts]);
  return (
    <Styled_Ul>
      <p>Коротко о товаре:</p>
      {productCategoria}
    </Styled_Ul>
  );
};

export default ProductData;
const Styled_Ul = styled("ul")(() => ({
  listStyle: "none",
  "& li": {
    color: "grey",
  },
  "& span": {
    color: "black",
  },
}));

const Styled_Product = styled(Box)(() => ({}));
