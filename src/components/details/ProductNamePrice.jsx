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

    const numRatingStars = Math.floor(wishListData[0].rating);

    // change variant code //
    const [activeItem, setActiveItem] = useState(0);

    const items = [
        { label: "50 ml", offPrice: 499, mainPrice: 399 },
        { label: "100 ml", offPrice: 699, mainPrice: 599 },
        { label: "200 ml", offPrice: 999, mainPrice: 899 },
        { label: "500 ml", offPrice: 1299, mainPrice: 1199 },
    ];

    const toggleActive = (index) => {
        setActiveItem(index);
    };

    //  price data //
    const productPriceData = {
        currentPrice: "4,453",
        discount: "23",
        mrp: "5555",
    };

    return (
        <>
            <h2 className="fs25 fw500">
                SAMSUNG Galaxy S22 Ultra 5G (Phantom Black, 256 GB) (12 GB RAM)
            </h2>

            <div className="mainRating">
                <span>{wishListData[0].rating}</span>
                <div className="stars">
                    {Array.from({ length: numRatingStars }, (_, index) => (
                        <img key={index} src={yellowStar} alt="" />
                    ))}
                    {Array.from({ length: 5 - numRatingStars }, (_, index) => (
                        <img key={numRatingStars + index} src={blankStar} alt="" />
                    ))}
                </div>
                <span>({wishListData[0].totalRatings} ratings)</span>
            </div>

            <div className="variants">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`item ${index === activeItem ? "active" : ""}`}
                        onClick={() => toggleActive(index)}
                    >
                        <h3>{item.label}</h3>
                        <div className="price">
                            <div className="offPrice">
                                <span>&#8377;</span>
                                <span>{item.offPrice}</span>
                            </div>
                            <div className="mainPrice">
                                <span>&#8377;</span>
                                <span>{item.mainPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
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
                <button className="primaryBtn">Buy Now</button>
                <button className="secondaryBtn">
                    <span>+</span> Add to cart
                </button>
                <button className="heartBtn">
                    <span>
                        <img src={HeartIcon} alt="" />
                    </span>
                    Add to wishlist
                </button>
            </div>

            <div className="divHR mtb2"></div>
        </>
    );
};

export default ProductNamePrice;
