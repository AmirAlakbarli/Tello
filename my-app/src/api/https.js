import instance from "./api";

const getAllCategories = (depth) => instance.get(`/categories?depth=${depth}`);
const getProducts = (slug) =>
  instance.get(
    `${slug !== "" ? "/products?category_slug=" + slug : "/products"}`
  );
const getFilteredProducts = ([params, sort, slug]) =>
  instance.get(
    `/products?category_slug=${slug}&${
      sort !== null ? "&sortBy=" + sort : ""
    }${params !== undefined ? "&query=" + params : ""}`
  );
const getProductDetails = (id) => instance.get(`/products/${id}`);
const createCart = () => instance.get("/carts");
const getUserCart = (id) => instance.get(`/carts/${id}`);
const getSearchProducts = (query) =>
  instance.get(`/products?query=${query !== null && query}`);

export {
  getAllCategories,
  getProducts,
  getFilteredProducts,
  getProductDetails,
  createCart,
  getUserCart,
  getSearchProducts,
};
