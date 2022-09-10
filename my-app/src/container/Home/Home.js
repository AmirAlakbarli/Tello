import React, { useEffect } from "react";
import "./home.scss";
import { getProductsAsync } from "../../redux/actions/products";
import { getCategoriesAsync } from "../../redux/actions/categories";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../../components/Home/Slider/Slider";
import ProductSlider from "../../components/Home/ProductSlider/ProductSlider";
import CategoryCard from "../../components/Home/CategoryCard/CategoryCard";
import Partners from "../../components/Home/Partners/Partners";
import Loading from "../../images/loading.svg";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const products = state.products;
  const categories = state.categories;
  const cart = state.cart;

  // ! save all product root categories of products in redux when Home page renders firstly
  useEffect(() => {
    dispatch(getProductsAsync(""));
    dispatch(getCategoriesAsync(1));
  }, [dispatch]);

  // ! function to find products for category
  const sliderData = (name) => {
    const resData = [];
    products.products.forEach((product) => {
      if (
        product?.categories.some((category) => {
          return category.name === name;
        })
      )
        resData.push(product);
    });
    return resData;
  };

  // ! function to find catogry for its name
  const categoryCardData = (name) => {
    return categories.categories.find((category) => {
      return category.name === name;
    });
  };

  return !products.loading && !categories.loading && !cart.loading ? (
    <div className="home container">
      <Slider />
      <ProductSlider
        products={sliderData("Telefonlar")}
        heading={"Ən çox satılan məhsullar"}
      />
      <ProductSlider
        products={sliderData("Telefonlar")}
        heading={"Yeni gələn məhsullar"}
      />
      <ProductSlider
        products={sliderData("Aksesuarlar")}
        heading={"Yeni gələn aksesuarlar"}
      />

      <div className="category-cards">
        <div className="category-telephones">
          <CategoryCard category={categoryCardData("Telefonlar")} />
        </div>
        <div className="category-watches">
          <CategoryCard category={categoryCardData("Saatlar")} />
        </div>
        <div className="category-accessours">
          <CategoryCard category={categoryCardData("Aksesuarlar")} />
        </div>
      </div>
      <Partners />
    </div>
  ) : (
    <div className="loading">
      <img src={Loading} alt="" className="loading-img" />
    </div>
  );
};

export default Home;
