import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dropdownIcon from "/icon/dropdown-icon.svg";

const ProductCardSlider = (props) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const sliderRef = useRef();

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 3;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleNextButtonClick = () => {
    let slider = sliderRef.current;
    const slideAmount = slider.offsetWidth * 0.6;
    slider.scrollLeft += slideAmount;
  };

  const handlePrevButtonClick = () => {
    let slider = sliderRef.current;
    const slideAmount = slider.offsetWidth * 0.6;
    slider.scrollLeft -= slideAmount;
  };

  // navigation code //

  const navigate = useNavigate();

  function handleClick() {
    navigate("/details");
  }

  return (
    <>
      <div className="flexCenterSB mt4 mb1 mobMt2 mobMb0">
        <h3 className="fs20 fw500 mobFs16">{props?.heading}</h3>
        <button className="seeAllBtn">
          See all <img src={dropdownIcon} alt="" />
        </button>
      </div>
      <div className="scrollContainer">
        <div
          ref={sliderRef}
          className="slider"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {props.productData?.map((product) => (
            <div className="productCard" key={product.id}>
              <div className="image" onClick={handleClick}>
                <img src={product.imageSrc} alt={product.alt} />
              </div>

              <div className="text">
                <p className="para">{product.productName}</p>
                <div>
                  <select>
                    {product.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexCenterSB">
                  <div>
                    <h3>
                      <span>&#8377;</span>
                      {product.price}
                    </h3>
                    <p className="fs16 opa0p7 mobFs14">
                      MRP <span className="lineThrough">₹{product.mrp}</span> (
                      {product.discount}%)
                    </p>
                  </div>
                  <button><span className="mobNone">Add</span><span className="none mobBlock">+</span></button>
                </div>
              </div>

              <div className="offPrice">
                <span>{product.offText}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="prevBtn" onClick={handlePrevButtonClick}>
          <img src={dropdownIcon} alt="" />
        </button>

        <button className="nextBtn" onClick={handleNextButtonClick}>
          <img src={dropdownIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default ProductCardSlider;
