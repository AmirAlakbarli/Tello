import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./container/Home/Home";
import ProductDetails from "./container/ProductDetails/ProductDetails";
import Cart from "./container/Cart/Cart";
import ProductList from "./container/ProductList/ProductList";

function App() {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  },[pathname])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:slug" element={<ProductList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
