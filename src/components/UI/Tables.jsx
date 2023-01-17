import { styled } from "@mui/material";
import React, { useState } from "react";
import { DeleteIcon, EditIcon } from "../../assets";
import image from "../../assets/images/imageTest.png";

const Tables = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <MainContainer>
      <ContainerTable>
        <TableHead>
          <TrBox>
            <TitleId>ID</TitleId>
            <TitlePhoto>Фото</TitlePhoto>
            <TitleVendor>Артикул</TitleVendor>
            <TitleNameProduct>Наименование товара</TitleNameProduct>
            <TitleDate>Дата создания</TitleDate>
            <TitleQuantity>Кол-во</TitleQuantity>
            <TitlePrice>Цена товара</TitlePrice>
            <TitleCurrentPrice>Текущая цена</TitleCurrentPrice>
            <TitleAction>Действия</TitleAction>
          </TrBox>
        </TableHead>

        <BoxList
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <BoxListTr>
            {isShown ? (
              <>
                <InputCheckbox type="checkbox" />
              </>
            ) : (
              <TextId>1</TextId>
            )}
            <img src={image} alt="image" />
            <TextVendor>123456789</TextVendor>
            <BoxNameofProduct>
              <TextQuantityProduct>Кол-во товара 105шт.</TextQuantityProduct>
              <TextNameProduct>Samsung Galaxy S21...</TextNameProduct>
            </BoxNameofProduct>
            <BoxDateofCreation>
              <TextDate>05.05.2022</TextDate>
              <TextTime>12:05.</TextTime>
            </BoxDateofCreation>
            <TextQuantity>1</TextQuantity>
            <BoxPriceProduct>
              <TextPrice>50 000с</TextPrice>
              <TextDiscount>15%</TextDiscount>
            </BoxPriceProduct>
            <TextCurrentPrice>45 000c</TextCurrentPrice>
            <BoxIcon>
              <EditIcon />
              <DeleteIcon />
            </BoxIcon>
          </BoxListTr>
        </BoxList>
      </ContainerTable>
    </MainContainer>
  );
};

export default Tables;

const InputCheckbox = styled("input")`
  margin-left: 23px;
  margin-right: 19.5px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  opacity: 0.4;
  &:focus {
    opacity: 1;
  }
`;

const BoxListTr = styled("tr")`
  display: flex;
  align-items: center;
`;

const BoxIcon = styled("div")`
  padding-left: 110px;
  display: flex;
  gap: 24px;
`;

const BoxNameofProduct = styled("tr")`
  display: flex;
  flex-direction: column;
  padding-left: 48px;
`;

const BoxDateofCreation = styled("tr")`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;

const BoxPriceProduct = styled("tr")`
  padding-left: 133px;
  display: flex;
  flex-direction: column;
`;

const BoxList = styled("div")`
  padding: 5px 0;
  margin-top: 10px;
  border: 1px solid #cdcdcd;
  border-radius: 6px;
  &:hover {
    background: rgba(144, 156, 181, 0.2);
  }
`;

const TextId = styled("td")`
  padding-left: 19px;
  padding-right: 36px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  color: #292929;
`;
const TextVendor = styled("td")`
  padding-left: 40px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  color: #292929;
`;
const TextQuantityProduct = styled("td")`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  color: #292929;
`;
const TextDate = styled("td")`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  color: #292929;
`;
const TextQuantity = styled("td")`
  padding-left: 75px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  color: #292929;
`;

const TextTime = styled("td")`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  color: #909cb5;
`;

const TextNameProduct = styled("td")`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  color: #909cb5;
`;

const TextPrice = styled("td")`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  color: #2c68f5;
`;

const TextCurrentPrice = styled("td")`
  padding-left: 87px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  color: #2c68f5;
`;

const TextDiscount = styled("td")`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  color: rgba(241, 0, 0, 1);
`;
//________________________________________________________________________________

const MainContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

const ContainerTable = styled("table")`
  width: 1240px;
`;

const TableHead = styled("div")`
  background: rgba(56, 66, 85, 0.9);
`;

const TrBox = styled("tr")`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;

const TitleId = styled("th")`
  padding-left: 20px;
  padding-right: 31px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
const TitlePhoto = styled("th")`
  padding-right: 67px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
const TitleVendor = styled("th")`
  padding-right: 74px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
const TitleNameProduct = styled("th")`
  padding-right: 65px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
const TitleDate = styled("th")`
  padding-right: 58px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
const TitleQuantity = styled("th")`
  padding-right: 90px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
const TitlePrice = styled("th")`
  padding-right: 59px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
const TitleCurrentPrice = styled("th")`
  padding-right: 79px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
const TitleAction = styled("th")`
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
