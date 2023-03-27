import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import GadgetariumSpinnerLoading from "../../components/GadgetariumSpinnerLoading";
import Tabs from "../../components/UI/Tabs";
import { SEARCH_PARAMS, TAB_ITEMS } from "../../utils/constants";
import ProductDetails from "./ProductDetails";
import { animateScroll as Scroll } from "react-scroll";
import { useEffect } from "react";
import { motion } from "framer-motion";

const MainProductDetails = () => {
  const { data, isLoading, chooseItem, count, images } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    Scroll.scrollTo(0);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      component={motion.div}
    >
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
