import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import FilterAccordion from "../../components/FilterAccordion/FilterAccordion";
import { useDispatch } from "react-redux";
import { getProductsAsync } from "../../redux/actions/products";
import * as api from "../../api/https";
import Product from "../../components/Product/Product";
import "./productList.scss";
import Loading from "../../images/loading.svg";

const ProductList = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    dispatch(getProductsAsync(params.slug));
  }, [dispatch, params]);

  const [datas, setDatas] = useState({ loading: false, error: null, data: {} });
  const query = searchParams.get("query");
  const sort = searchParams.get("sortBy");

  useEffect(() => {
    if (query !== null || sort !== null || params.slug !== null) {
      async function getLastData() {
        try {
          setDatas((datas) => {
            return { ...datas, loading: true };
          });
          const result = await api.getFilteredProducts([
            query?.split(","),
            sort,
            params.slug,
          ]);
          setDatas((datas) => {
            return { ...datas, data: result.data };
          });
        } catch (error) {
          if (error) {
            setDatas((datas) => {
              return { ...datas, error: error };
            });
          }
        }
        setDatas((datas) => {
          return { ...datas, loading: false };
        });
      }
      getLastData();
    }
  }, [searchParams, params.slug, query, sort]);

  const handleSelect = (e) => {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };

  console.log(datas);

  return datas.loading ? (
    <div className="loading">
      <img src={Loading} alt="" className="loading-img" />
    </div>
  ) : (
    <div className="container">
      <div className="product-list">
        <div className="product-filter">
          <FilterAccordion />
        </div>
        <div className="product-list-wrapper">
          <div className="product-list-details">
            {datas?.data?.length ? (
              datas?.data?.length || 0 ? (
                <h1>{datas?.data?.length} məhsul tapıldı</h1>
              ) : (
                "Məhsul tapılmadı"
              )
            ) : (
              ""
            )}
            <select
              defaultValue={searchParams.get("sortBy")}
              onChange={(e) => {
                handleSelect(e);
              }}
            >
              <option value="created_at">Ən yenilər</option>
              <option value="name">Ada görə</option>
              <option value="price">Qiymətə görə</option>
            </select>
          </div>
          <div className="product-list-block">
            {datas?.data?.data?.map((item) => {
              return <Product key={item.id} product={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
