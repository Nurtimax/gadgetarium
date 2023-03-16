import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import GadgetariumSpinnerLoading from "../../components/GadgetariumSpinnerLoading";
import Tabs from "../../components/UI/Tabs";
import { SEARCH_PARAMS, TAB_ITEMS } from "../../utils/constants";
import ProductDetails from "./ProductDetails";
const MainProductDetails = () => {
  const { data, isLoading, chooseItem, count, images } = useSelector(
    (state) => state.productDetails
  );

  return (
    <Container>
      {isLoading && <GadgetariumSpinnerLoading />}
      <ProductDetails
        data={data}
        chooseItem={chooseItem}
        count={count}
        images={images}
      />
      <Tabs tabs={TAB_ITEMS} param={SEARCH_PARAMS.CONTENT} />
      <Outlet />
    </Container>
  );
};

export default MainProductDetails;
