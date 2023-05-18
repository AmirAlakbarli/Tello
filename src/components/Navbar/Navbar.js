import React, { useEffect } from "react";
import "./navbar.scss";
import { getCategoriesAsync } from "../../redux/actions/categories";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({setNavbarStatus}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getCategoriesAsync(1));
  }, [dispatch]);
  return (
    <nav className="navbar">
      <ul className="categories">
        {categories?.categories.map((category, index, array) => {
          return (
            <Link
              to={`products/${array[array.length - index - 1].slug}`}
              key={array[array.length - index - 1].id}
            >
              <li onClick={() =>{setNavbarStatus(false)}}>{array[array.length - index - 1].name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
