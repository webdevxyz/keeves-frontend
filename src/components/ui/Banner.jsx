import { useState, useEffect, useRef, useCallback } from "react";

const BannerImg = [
  {
    id: "1",
    imgUrl:
      "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/banner-2.jpg",
  },
  {
    id: "2",
    imgUrl:
      "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/banner-1.jpg",
  },
  {
    id: "3",
    imgUrl:
      "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/banner-2.jpg",
  },
  {
    id: "4",
    imgUrl:
      "https://res.cloudinary.com/dzqzuumor/image/upload/v1703826691/moma/image/banner-1.jpg",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const showSlide = useCallback((index) => {
    const bannerSlider = sliderRef.current;
    const slideWidth = bannerSlider.querySelector(".slide").offsetWidth;
    const newTransformValue = -index * slideWidth + "px";
    bannerSlider.style.transform = "translateX(" + newTransformValue + ")";
    setCurrentSlide(index);
    updateIndicators(index);
  }, []);

  const nextSlide = useCallback(() => {
    const numSlides = sliderRef.current.querySelectorAll(".slide").length;
    setCurrentSlide((currentSlide + 1) % numSlides);
  }, [currentSlide]);

  const prevSlide = () => {
    const numSlides = sliderRef.current.querySelectorAll(".slide").length;
    setCurrentSlide((currentSlide - 1 + numSlides) % numSlides);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createIndicators = () => {
    const bannerSlider = sliderRef.current;
    const indicatorsContainer =
      bannerSlider.parentNode.querySelector(".indicators");

    indicatorsContainer.innerHTML = "";

    const numSlides = bannerSlider.querySelectorAll(".slide").length;

    for (let i = 0; i < numSlides; i++) {
      const indicator = document.createElement("div");
      indicator.className = "indicator";
      indicator.onclick = () => showSlide(i);
      indicatorsContainer.appendChild(indicator);
    }

    updateIndicators(0);
  };

  const updateIndicators = (index) => {
    const indicators =
      sliderRef.current.parentNode.querySelectorAll(".indicator");
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  };

  useEffect(() => {
    createIndicators();
  }, [createIndicators]);

  useEffect(() => {
    showSlide(currentSlide);
  }, [currentSlide, showSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <>
      <div className="bannerSliderContainer">
        <div className="bannerSlider" ref={sliderRef}>
          {BannerImg.map(function (url) {
            return (
              <div className="slide" key={url.id}>
                <img src={url.imgUrl} alt="Banner" />
              </div>
            );
          })}
        </div>

        <button className="prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="next" onClick={nextSlide}>
          ❯
        </button>

        <div className="indicators"></div>
      </div>
    </>
  );
};

export default Banner;
