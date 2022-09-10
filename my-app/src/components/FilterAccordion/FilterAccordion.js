import React, { useEffect, useState } from "react";
import "./filterAccordion.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "react-router-dom";

const FilterAccordion = () => {
  const [query, setQuery] = useState([]);
  const filterData = [
    {
      value: "Apple",
      query: "iphone",
    },
    {
      value: "Samsung",
      query: "samsung",
    },
    {
      value: "Xiaomi",
      query: "xiaomi",
    },
    {
      value: "Huawei",
      query: "huawei",
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    if (query.length > 0) {
      searchParams.set("query", query);
      setSearchParams(searchParams);
    }
  }, [query, searchParams, setSearchParams, query.length]);

  useEffect(() => {
    if (searchParams.get("query") !== null) {
      setQuery(searchParams.get("query").split(","));
    }
  }, [searchParams]);

  const handleChangeUrl = ({ target: { checked, value } }) => {
    if (checked) {
      setQuery([...query, value]);
    } else {
      setQuery(query.filter((e) => e !== value));
      if (query.length === 1) {
        searchParams.delete("query");
        setSearchParams(searchParams);
      }
    }
  };

  return (
    <div className="filter-accordion">
      <div className="filter-sort">
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <p className="brandAll">Brand</p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="filter-brand">
              {filterData.map((item, index) => {
                if (
                  searchParams.get("query") !== null &&
                  searchParams.get("query").split(",").includes(item.query)
                ) {
                  return (
                    <li key={index}>
                      <input
                        onClick={(e) => {
                          handleChangeUrl(e);
                        }}
                        type="checkbox"
                        value={item.query}
                        defaultChecked="checked"
                      />
                      <label>{item.value}</label>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <input
                        onClick={(e) => {
                          handleChangeUrl(e);
                        }}
                        type="checkbox"
                        value={item.query}
                      />
                      <label>{item.value}</label>
                    </li>
                  );
                }
              })}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FilterAccordion;
