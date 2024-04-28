import React, { useRef, useState } from "react";

const CartItem = ({ cartItem }) => {
    const [count, setCount] = useState(1);
    const quantityRef = useRef();

    const increaseNumber = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decreaseNumber = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    };

    return (
        <div className="item">
            <div className="image">
                <img src={cartItem.image} alt={cartItem.alt} />
            </div>
            <div className="flexCenter gap3">
                <div className="text">
                    <p className="fs18 fw400 mobFs16 mobLh25">{cartItem.text}</p>
                    <div className="flexCenter gap0p4 mtb0p5 fs14">
                        <span className="fw400 opa0p7">Colour:</span>
                        <span className="fw500">{cartItem.colour}</span>
                    </div>
                    <div className="flexCenter gap0p4 fs14">
                        <span className="fw400 opa0p7">{cartItem.otherVariant}:</span>
                        <span className="fw500">{cartItem.otherVariantText}</span>
                    </div>
                    <div className="mobPrice">
                        <span className="fs14 opa0p8">&#8377;</span>
                        <span className="fs20 fw500">{cartItem.price}</span>
                    </div>
                    <div className="flexCenter gap1 mt1 mobColumn mobGap1p5">
                        <div className="quantity" ref={quantityRef}>
                            <button onClick={decreaseNumber}>-</button>
                            <span className="count">{count}</span>
                            <button onClick={increaseNumber}>+</button>
                        </div>
                        <div className="buttons">
                            <button>Delete</button>
                            <span></span>
                            <button>Save for later</button>
                            <span></span>
                            <button>See more like this</button>
                            <span></span>
                            <button>Share</button>
                        </div>
                    </div>
                </div>
                <div className="price">
                    <span className="fs14 opa0p8">&#8377;</span>
                    <span className="fs20 fw500">{cartItem.price}</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
