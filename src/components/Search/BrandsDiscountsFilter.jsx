import React from "react";
import { useState } from "react";

const BrandsDiscountsFilter = (props) => {
  const initialvisibleBrands = 6;
  const [visibleBrands, setvisibleBrands] = useState(initialvisibleBrands);

  const handleReadMoreClick = () => {
    setvisibleBrands(props.dataList.length);
  };

  const handleShowLessClick = () => {
    setvisibleBrands(initialvisibleBrands);
  };

  return (
    <>
      <div className="brands list">
        <h4>{props.heading}</h4>

        <div className="seeMore">
          {props.dataList.map(function (data, index) {
            return (
              index < visibleBrands && (
                <div key={data.id}>
                  <input type="checkbox" />
                  <span>{data.name}</span>
                </div>
              )
            );
          })}
        </div>
        {props.dataList.length > initialvisibleBrands && (
          <button
            className="textBtn"
            onClick={
              visibleBrands === props.dataList.length
                ? handleShowLessClick
                : handleReadMoreClick
            }
          >
            {visibleBrands === props.dataList.length ? "-See Less" : "+See More"}
          </button>
        )}
      </div>
    </>
  );
};

export default BrandsDiscountsFilter;
