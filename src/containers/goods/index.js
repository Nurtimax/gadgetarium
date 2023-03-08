import React from "react";
import { Link } from "react-router-dom";

const Goods = () => {
  return (
    <div>
      <h5>goods</h5>
      <Link to="add-product">add product</Link>
    </div>
  );
};

export default Goods;
