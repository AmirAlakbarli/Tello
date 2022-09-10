import React, { useState, useEffect } from "react";
import "./search.scss";
import { FaSearch } from "react-icons/fa";
import { getSearchProducts } from "../../api/https";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getSearch = async () => {
      try {
        if (inputValue.length > 0) {
          const result = await getSearchProducts(inputValue);
          setProducts(result?.data?.data);
        }
      } catch (error) {
        throw error;
      }
    };
    getSearch();
  }, [inputValue]);

  return (
    <div className="search">
      <form action="">
        <label htmlFor="find">
          <FaSearch />{" "}
        </label>
        <input
          type="text"
          id="find"
          placeholder="Axtarış..."
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
