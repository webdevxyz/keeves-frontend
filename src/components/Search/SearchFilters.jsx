import React, { useState } from "react";
import {
  categoryList,
  brandsList,
  ratingList,
  discountsList,
  fitList,
  fabricList,
} from "../../lib/data/SearchData";
import yellowStar from "/icon/yellow-star.svg";
import blankStar from "/icon/blank-star.svg";
import ColorsFilter from "./ColorsFilter";
import FitFabricFilter from "./FitFabricFilter";
import BrandsDiscountsFilter from "./BrandsDiscountsFilter";


const SearchFilters = (props) => {
  return (
    <>
      <div className={"filterContainer " + (props.otherClass ? props.otherClass : "")}>
        <h3 className="fs16 fw500 mb1">Filters</h3>
        <button className="closeFilterBtn none" onClick={props.click}>&#10006;</button>
        <div className="category list">
          <h4>Category</h4>
          {categoryList.map((category, index) => (
            <div key={index}>
              <span>{category.name}</span>
              <ul>
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex}>{subcategory}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <BrandsDiscountsFilter heading="Brand" dataList={brandsList} />

        <div className="ratings list">
          <h4>Ratings</h4>
          {ratingList.map((rating) => (
            <div className="item" key={rating.id}>
              <input type="checkbox" />
              <div className="stars">
                {Array.from({ length: rating.ratingStars }, (_, index) => (
                  <img key={index} src={yellowStar} alt="" />
                ))}
                {Array.from(
                  { length: 5 - rating.ratingStars },
                  (_, index) => (
                    <img
                      key={rating.ratingStars + index}
                      src={blankStar}
                      alt=""
                    />
                  )
                )}
              </div>
              <span>& up</span>
            </div>
          ))}
        </div>
        <ColorsFilter />
        <BrandsDiscountsFilter
          heading="Discounts"
          dataList={discountsList}
        />
        <FitFabricFilter heading="Fit" dataList={fitList} />
        <FitFabricFilter heading="Fabric" dataList={fabricList} />
      </div>
    </>
  );
};

export default SearchFilters;
