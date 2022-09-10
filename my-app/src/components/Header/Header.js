import React, { useEffect, useState } from "react";
import "./header.scss";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import Logo from "../../images/image-logo.svg";
import Person from "../../images/icon-person.svg";
import Heart from "../../images/icon-heart.svg";
import ShoppingCart from "../../images/icon-shoppingCart.svg";
import { Link } from "react-router-dom";
import { getCreateCart, getUserCartAsync } from "../../redux/actions/cart";
import { useSelector, useDispatch } from "react-redux";
import Menu from "../../images/menu.svg";
import Close from "../../images/close.svg";
import Loading from "../../images/mini_loading.svg";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [navbarStatus, setNavbarStatus] = useState(false);

  useEffect(() => {
    !localStorage.getItem("cartId") && dispatch(getCreateCart());

    dispatch(getUserCartAsync(localStorage.getItem("cartId")));
  }, [dispatch]);

  return (
    <div className="header">
      <div className="header-top">
        <img
          onClick={() => {
            setNavbarStatus(true);
          }}
          src={Menu}
          alt=""
          className="menu"
        />
        <div className="logo">
          <img src={Logo} alt="" />
          <Link to="/">
            <h1>Tello</h1>
          </Link>
        </div>
        <div className="searching">
          <Search />
        </div>
        <div className="info">
          <div className="personalAccount">
            <img src={Person} alt="" />
          </div>
          <div className="liked">
            <img src={Heart} alt="" />
          </div>
          <Link to="/cart">
            <div className="cart" onClick={() => {}}>
              <img src={ShoppingCart} alt="" />
              {cart.loading ? (
                <div className="loading">
                  <img src={Loading} alt="" className="loading-img" />
                </div>
              ) : cart?.cart?.line_items?.length > 0 ? (
                <div className="count">{cart?.cart?.line_items?.length}</div>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      </div>
      <div className={`header-bottom  ${navbarStatus ? "open-navbar" : ""}`}>
        <div
          className="close-navbar"
          onClick={() => {
            setNavbarStatus(false);
          }}
        >
          <img src={Close} alt="" />
        </div>
        <Navbar setNavbarStatus={setNavbarStatus} />
      </div>
    </div>
  );
};

export default Header;
