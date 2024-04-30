import React from "react";
import { useState } from "react";
import yellowStar from "/icon/yellow-star.svg";
import blankStar from "/icon/blank-star.svg";
import HeartIcon from "/icon/heart-icon.svg";

const ProductNamePrice = () => {
  const wishListData = [
    {
      rating: 4.7,
      totalRatings: 12,
    },
  ];

  //  price data //
  const productPriceData = {
    currentPrice: "4,453",
    discount: "23",
    mrp: "5555",
  };

  return (
    <>
      <h2 className="fs25 fw500">
        OnePlus Phone (Phantom Black, 256 GB) (12 GB RAM)
      </h2>

      <div className="mt1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        atque, porro vel amet non soluta temporibus! Consectetur maiores
        deserunt a, maxime ad esse perferendis ipsum voluptatem cupiditate autem
        pariatur porro!
      </div>

      <div className="mtb1">
        <div className="flexCenter gap1">
          <div className="flex">
            <span className="fs16 fw400 opa0p7">&#8377;</span>
            <h2 className="fs32 fw500">{productPriceData.currentPrice}</h2>
          </div>
          <span className="SemanticRedClr fs16 fw500">{`-${productPriceData.discount}% OFF`}</span>
        </div>
        <div className="fs14 fw400 opa0p7 mtb0p2">
          <span>M.R.P.:</span>
          <span>&#8377;</span>
          <span>{productPriceData.mrp}</span>
        </div>
        <span className="fs14 fw400 opa0p9">Inclusive of all taxes</span>
      </div>

      <div className="mainButtons">
        <button className="primaryBtn">Get a Quote</button>
        {/* <button className="secondaryBtn">
                    <span>+</span> Add to cart
                </button>
                <button className="heartBtn">
                    <span>
                        <img src={HeartIcon} alt="" />
                    </span>
                    Add to wishlist
                </button> */}
      </div>

      <div className="divHR mtb2"></div>
    </>
  );
};

export default ProductNamePrice;
