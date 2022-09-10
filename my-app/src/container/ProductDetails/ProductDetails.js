import React, { useEffect, useState } from "react";
import "./productDetails.scss";
import { useParams } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import { getProductDetails } from "../../api/https";
import uuid from "react-uuid";
import { getAddToCartAsync } from "../../redux/actions/cart";
import { useDispatch } from "react-redux";
import Cart from "../../images/cart.svg";
import Loading from "../../images/loading.svg";

const ProductDetails = () => {
  const [productData, setProductData] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [count, setCount] = useState(1);
  const productId = useParams().id;
  const dispatch = useDispatch();

  // console.log(productData);
  useEffect(() => {
    async function getData() {
      const resData = await getProductDetails(productId);
      setProductData(resData.data);
    }
    getData();
  }, [productId]);

  useEffect(() => {
    const photos = productData?.assets.filter((asset) =>
      activeColor?.assets.includes(asset.id)
    );
    setPhotos(photos);
  }, [activeColor?.assets, productData?.assets]);

  useEffect(() => {
    setActiveColor(productData?.variant_groups[0]?.options[0]);
    setActiveSize(productData?.variant_groups[1]?.options[0]);
  }, [productData?.variant_groups]);

  const addToCart = () => {
    dispatch(
      getAddToCartAsync({
        cart_id: localStorage.getItem("cartId"),
        product_id: productId,
        variant_color_id: productData?.variant_groups[0]?.id,
        variant_size_id: productData?.variant_groups[1]?.id,
        count,
        activeColor,
        activeSize,
      })
    );
  };

  return (
    <>
      {!productData && (
        <div className="loading">
          <img src={Loading} alt="loading" className="loading-img" />
        </div>
      )}
      <div className="product-details container">
        <div className="product-photos">
          <Gallery photos={photos} />
        </div>
        <div className="product-info">
          <div className="product_name">
            <h1>
              {productData?.name ? productData.name + ", " : ""}
              {activeSize?.name ? activeSize.name + ", " : ""}
              {activeColor?.name ? activeColor.name : ""}
            </h1>
          </div>
          <div className="product_price">
            <h1>Qiymət: </h1>
            <p>
              {productData?.price && activeSize?.price
                ? productData?.price?.raw + activeSize?.price?.raw
                : ""}{" "}
              AZN
            </p>
            <button
              className="add"
              onClick={() => {
                addToCart();
              }}
            >
              <img src={Cart} alt="" /> Səbətə at
            </button>
          </div>
          <div className="product_colors">
            <h1>Rəng: </h1>
            <div className="colors">
              {productData?.variant_groups[0]?.options?.map((option) => (
                <div
                  key={uuid()}
                  className={`color ${
                    option?.name === activeColor?.name ? "activeColor" : ""
                  }`}
                  style={{
                    backgroundColor:
                      option?.name === activeColor?.name
                        ? "white"
                        : option.name,
                    borderColor: option.name,
                  }}
                  onClick={() => {
                    setActiveColor(option);
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="product_sizes">
            <h1>Yaddaş: </h1>
            <div className="sizes">
              {productData?.variant_groups[1]?.options?.map((option) => (
                <div
                  key={uuid()}
                  className={`size ${
                    option?.name === activeSize?.name ? "activeSize" : ""
                  }`}
                  onClick={() => {
                    setActiveSize(option);
                  }}
                >
                  {option?.name}
                </div>
              ))}
            </div>
          </div>
          <div className="product_count">
            <button
              onClick={() => {
                setCount((count) => count - 1);
              }}
              disabled={count === 1}
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={() => {
                setCount((count) => count + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="add_to_cart">
            <button
              className="add"
              onClick={() => {
                addToCart();
              }}
            >
              <img src={Cart} alt="" /> Səbətə at
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
