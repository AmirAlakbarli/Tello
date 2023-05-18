import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/product-details/${product?.id}`}>
        <div className="product-info">
          <div className="product-image">
            <img src={product?.image?.url} alt="" />
          </div>
          <div className="product-text">
            <h4>{product?.name}</h4>
            <p>{product?.price?.raw} AZN</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
