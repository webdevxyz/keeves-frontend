import { useRef } from "react";
import { useState } from "react";
import dropdownIcon from "/icon/dropdown-icon.svg";

const CommonCardSlider = (props) => {
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

  return (
    <>
      <div className="flexCenterSB mt4 mb1 mobMt2 mobMb0">
        <h3 className="fs20 mobFs16 fw500">{props.heading}</h3>
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
          {props.cardData.map((commonCard) => (
            <div className="commonCard" key={commonCard.id}>
              <div className="image">
                <img src={commonCard.imageSrc} alt={commonCard.alt} />
              </div>
              <div className="text">
                <p className="para">{commonCard.text}</p>
                <span>{commonCard.smallText}</span>
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

export default CommonCardSlider;
