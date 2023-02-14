import Banner from "../../components/Banner";
import ProductCard from "../../components/UI/card/ProductCard";
import { product } from "../../assets/images";
import { Container, styled } from "@mui/material";

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <ContainerCard>
          {product.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ContainerCard>
      </Container>
    </>
  );
};

export default Home;

const ContainerCard = styled("section")(() => ({
  marginTop: "50px",
}));
