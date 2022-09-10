import React from "react";
import "./categoryCard.scss";
import { Link } from "react-router-dom";
const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <h3>{category?.name}</h3>
      <Link to={`/products/${category?.slug}`}>{"Məhsullara keçid >"} </Link>

      <div className="category-img">
        <img src={category?.assets[0]?.url} alt="" />
      </div>
    </div>
  );
};

export default CategoryCard;
