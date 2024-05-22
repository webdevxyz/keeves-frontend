import { useState, useRef } from "react";
import dropdownIcon from "/icon/dropdown-icon.svg";

const FeaturedBrands = () => {
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

  const featuredBrandsDataList = [
    {
      id: "1",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/brand-img-1.jpg",
      alt: "Iamge",
      text: "Up to 70% off",
    },
    {
      id: "2",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/brand-img-2.jpg",
      alt: "Iamge",
      text: "Up to 50% off",
    },
    {
      id: "3",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/brand-img-3.jpg",
      alt: "Iamge",
      text: "Just ₹999",
    },
    {
      id: "4",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/brand-img-1.jpg",
      alt: "Iamge",
      text: "Up to 70% off",
    },
    {
      id: "5",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/brand-img-2.jpg",
      alt: "Iamge",
      text: "Up to 50% off",
    },
    {
      id: "6",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/brand-img-3.jpg",
      alt: "Iamge",
      text: "Just ₹999",
    },
  ];

  return (
    <>
      <div className="flexCenterSB mt4 mb1 mobMt2 mobMb0">
        <h3 className="fs20 mobFs16 fw500">Featured Brands</h3>
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
          {featuredBrandsDataList.map(function (featuredCard) {
            return (
              <div className="featuredCard" key={featuredCard.id}>
                <div className="image">
                  <img src={featuredCard.image} alt={featuredCard.alt} />
                </div>
                <div className="flexCenterSB p1 mobP0p7">
                  <span className="fs16 fw400 mobFs14">{featuredCard.text}</span>
                  <img src={dropdownIcon} alt="" className="arrowIcon" />
                </div>
              </div>
            );
          })}
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

export default FeaturedBrands;
