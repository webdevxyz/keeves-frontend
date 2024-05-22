import { useRef } from "react";

const ShopByStore = (props) => {
  const scrollContainerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    scrollContainerRef.current.style.cursor = "grabbing";
    const startX = e.pageX - scrollContainerRef.current.offsetLeft;
    const scrollLeft = scrollContainerRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = x - startX;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      scrollContainerRef.current.style.cursor = "grab";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className={`shopByStore ${props.otherClass}`}
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onContextMenu={handleContextMenu}
      >
        {props.shopData.map((shopByStoreSrc) => (
          <div className="item" key={shopByStoreSrc.id}>
            <div className="image">
              <div className="img">
                <img src={shopByStoreSrc.imageSrc} alt={shopByStoreSrc.alt} />
              </div>
            </div>
            <span>{shopByStoreSrc.text}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopByStore;
