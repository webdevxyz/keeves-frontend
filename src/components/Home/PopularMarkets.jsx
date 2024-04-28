import { useState, useRef } from "react";
import dropdownIcon from "/icon/dropdown-icon.svg";

const PopularMarkets = () => {
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

  const marketCardDataList = [
    {
      id: "1",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826695/moma/image/markets-img-1.jpg",
      alt: "Image",
      text: "Findlay Market",
      smallText: "Cincinnati, Ohio",
    },
    {
      id: "2",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826695/moma/image/markets-img-2.jpg",
      alt: "Image",
      text: "Milwaukee Public Market",
      smallText: "Milwaukee, Wisconsin",
    },
    {
      id: "3",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826695/moma/image/markets-img-3.jpg",
      alt: "Image",
      text: "Flower Market",
      smallText: "New Delhi, India",
    },
    {
      id: "4",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826695/moma/image/markets-img-4.jpg",
      alt: "Image",
      text: "Kacheri Bazar Market",
      smallText: "Bhadrak, Odisha, India",
    },
    {
      id: "5",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826695/moma/image/markets-img-1.jpg",
      alt: "Image",
      text: "Findlay Market",
      smallText: "Cincinnati, Ohio",
    },
    {
      id: "6",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826695/moma/image/markets-img-2.jpg",
      alt: "Image",
      text: "Milwaukee Public Market",
      smallText: "Milwaukee, Wisconsin",
    },
    {
      id: "7",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826695/moma/image/markets-img-3.jpg",
      alt: "Image",
      text: "Flower Market",
      smallText: "New Delhi, India",
    },
    {
      id: "8",
      image:
        "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826695/moma/image/markets-img-4.jpg",
      alt: "Image",
      text: "Kacheri Bazar Market",
      smallText: "Bhadrak, Odisha, India",
    },
  ];

  return (
    <>
      <div className="flexCenterSB mt4 mb1 mobMt2 mobMb0">
        <h3 className="fs20 mobFs16 fw500">Popular Markets</h3>
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
          {marketCardDataList.map(function (marketCard) {
            return (
              <div className="marketCard" key={marketCard.id}>
                <div className="image">
                  <img src={marketCard.image} alt={marketCard.alt} />
                </div>
                <div className="text">
                  <p>{marketCard.text}</p>
                  <span>{marketCard.smallText}</span>
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

export default PopularMarkets;
