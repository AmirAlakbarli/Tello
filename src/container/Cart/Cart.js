import React from "react";
import "./cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItem, updateCart } from "../../redux/actions/cart";
import { Link } from "react-router-dom";
import Delete from "../../images/delete.svg";
import ShoppingCart from "../../images/shopping-cart.svg";
import Loading from "../../images/loading.svg";

const Cart = () => {
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  const updateCount = (type, count, line_item_id) => {
    if (type === "INC") count += 1;
    else if (type === "DEC") count -= 1;
    else return false;

    dispatch(
      updateCart({
        count,
        cart_id: localStorage.getItem("cartId"),
        line_item_id,
      })
    );
  };

  return (
    <div className="cart-body">
      {cart.loading ? (
        <div className="loading">
          <img src={Loading} alt="" className="loading-img" />
        </div>
      ) : (
        <div className="container">
          <div className="cart-count">
            Səbət ({cart?.cart?.line_items?.length} məhsul)
          </div>

          {cart?.cart?.line_items?.length !== 0 ? (
            <div className="cart-wrapper">
              <div className="cart-items">
                {cart?.cart?.line_items?.map((item) => {
                  return (
                    <div key={item.id} className="item">
                      <div className="image">
                        <img src={item?.image?.url} alt="icon" />
                      </div>
                      <div className="details">
                        <h3>{item.name}</h3>
                        <div className="variants">
                          <p>Rəng: {item?.selected_options[0]?.option_name}</p>
                          <p>{item?.price?.raw} AZN</p>
                        </div>
                      </div>
                      <div className="count">
                        <button
                          onClick={() => {
                            updateCount("DEC", item.quantity, item.id);
                          }}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => {
                            updateCount("INC", item.quantity, item.id);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button className="delete">
                        <img
                          src={Delete}
                          alt="delete"
                          onClick={() => {
                            dispatch(
                              deleteCartItem({
                                cart_id: localStorage.getItem("cartId"),
                                line_item_id: item.id,
                              })
                            );
                          }}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="cart-details">
                <h1>Ümumi</h1>
                <ul>
                  <li>
                    <span>Məbləğ </span>
                    <span>{cart?.cart?.subtotal?.raw}</span>
                  </li>
                  <li>
                    <span>Çatdırılma </span>
                    <span>0.00 </span>
                  </li>
                  <li>
                    <span>Hədiyyə paketi </span>
                    <span>0.00 </span>
                  </li>
                  <li>
                    <span>Promo kod </span>
                    <span>0.00 </span>
                  </li>
                </ul>
                <h3 className="total-price">
                  <span>Cəmi</span>
                  <span>{cart?.cart?.subtotal?.raw} AZN</span>
                </h3>
              </div>
            </div>
          ) : (
            <div className="empty-cart">
              <div className="cart-image">
                <img src={ShoppingCart} alt="" />
              </div>
              <div className="cart-info">Səbətiniz hal hazırda boşdur</div>
              <Link to="/">
                <button className="go-shopping">Alış-verişə davam et</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
