import React from "react";
import yellowStar from "/icon/yellow-star.svg";
import blankStar from "/icon/blank-star.svg";

const CartOtherProducts = (props) => {
    return (
        <>
            <div className="bgWhite mb1 br10 veryLightBorder">
                <h3 className="fs20 fw400 p1 lightBorderBottom2 mobFs18 ">
                    {props.heading}
                </h3>

                <div className="grid4 gap1 p1 mt1 mobGrid1">
                    {props.CartOtherProductsData.map((wishlist) => (
                        <div className="resultCard" key={wishlist.id}>
                            <div className="image">
                                <img src={wishlist.image} alt={wishlist.alt} />
                            </div>
                            <div className="text">
                                <h6>{wishlist.name}</h6>
                                <p className="para">{wishlist.text}</p>
                                <div className="ratingStars">
                                    {Array.from({ length: wishlist.ratingStars }, (_, index) => (
                                        <img key={index} src={yellowStar} alt="" />
                                    ))}
                                    {Array.from(
                                        { length: 5 - wishlist.ratingStars },
                                        (_, index) => (
                                            <img
                                                key={wishlist.ratingStars + index}
                                                src={blankStar}
                                                alt=""
                                            />
                                        )
                                    )}
                                    <span>{wishlist.ratingCount}</span>
                                </div>
                                <div>
                                    <h3>
                                        <span>&#8377;</span>
                                        {wishlist.price}
                                    </h3>
                                    <p className="fs14 opa0p7">
                                        MRP <span className="lineThrough">₹{wishlist.mrp}</span> (
                                        {wishlist.mrpPercentage}%)
                                    </p>
                                </div>
                            </div>
                            <div className="offPrice">
                                <span>{wishlist.offPercentage}% OFF</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CartOtherProducts;
