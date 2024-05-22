import { useRef } from "react";
import { filterList } from "../../lib/data/HomeData";

const FilterList = () => {
  // darg scroll js starts here //
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
  // darg scroll js end here //

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="filterList"
        onMouseDown={handleMouseDown}
        onContextMenu={handleContextMenu}
      >
        {filterList.map(function (data) {
          return (
            <div className="item" key={data.id}>
              <div className="image">
                <img src={data.imageSrc} alt="Image" />
              </div>
              <div className="text">{data.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilterList;
