import React, { useState } from "react";
import { manufacturerData } from "../../lib/data/DetailsPageData"

const FromTheManufacturer = () => {
    const initialVisibleImages = 2;
    const [visibleImages, setVisibleImages] = useState(initialVisibleImages);

    const handleReadMoreClick = () => {
        setVisibleImages(manufacturerData.length);
    };

    const handleShowLessClick = () => {
        setVisibleImages(initialVisibleImages);
    };

    return (
        <>
            <div>
                <h3 className="fs22 fw500 mt2 mb1">From the manufacturer</h3>
                {manufacturerData.map(function (Data, index) {
                    return (
                        index < visibleImages && (
                            <div className="manufacturer" key={Data.id}>
                                {Data.src && <img src={Data.src} alt={Data.alt} />}
                                {Data.text && <p>{Data.text}</p>}
                            </div>
                        )
                    );
                })}
                {manufacturerData.length > initialVisibleImages && (
                    <button
                        className="textBtn"
                        onClick={
                            visibleImages === manufacturerData.length
                                ? handleShowLessClick
                                : handleReadMoreClick
                        }
                    >
                        {visibleImages === manufacturerData.length ? "Show Less" : "Read More"}
                    </button>
                )}
            </div>
        </>
    );
};

export default FromTheManufacturer;
