import { Container, styled } from "@mui/material";
import { DeleteIcon, EditIcon } from "../../assets";
import imageTable from "../../assets/images/imageTest.png";

const Tables = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>ID</HeaderTitle>
        <HeaderTitle>Фото</HeaderTitle>
        <HeaderTitle>Артикул</HeaderTitle>
        <HeaderTitle>Наименование товара</HeaderTitle>
        <HeaderTitle>Дата создания</HeaderTitle>
        <HeaderTitle>Кол-во</HeaderTitle>
        <HeaderTitle>Цена товара</HeaderTitle>
        <HeaderTitle>Текущая цена</HeaderTitle>
        <HeaderTitle>Действия</HeaderTitle>
      </Header>

      <TableListContainer>
        <div>1</div>
        <img src={imageTable} alt="image" />
        <div>154665884</div>
        <div>
          <div>Кол-во товара 105шт.</div>
          <div>Samsung Galaxy S21...</div>
        </div>
        <div>
          <div>05.05.2022</div>
          <div> 12:05</div>
        </div>
        <div>1</div>
        <div>
          <div>50 000c</div>
          <div>15%</div>
        </div>
        <div>45 000c</div>
        <div>
          <EditIcon />
          <DeleteIcon />
        </div>
      </TableListContainer>
    </Container>
  );
};

export default Tables;

const Header = styled("header")`
  margin-top: 10px;
  background: rgba(56, 66, 85, 0.9);
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderTitle = styled("div")`
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;

const TableListContainer = styled("div")`
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #cdcdcd;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
`;
