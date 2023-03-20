import React from "react";
import { Link } from "react-router-dom";
import AddBanner from "../../components/add_banner";
import Button from "../../components/UI/button/Button";
import useVisibility from "../../hooks/useVisibility";

const Goods = () => {
  const [openModal, setOpenModal] = useVisibility();
  return (
    <div>
      <h5>goods</h5>
      <Button onClick={setOpenModal}>Open Banner Modal</Button>
      <AddBanner openModal={openModal} setOpenModal={setOpenModal} />
      <Link to="add-product/part-1">add product</Link>
    </div>
  );
};

export default Goods;
