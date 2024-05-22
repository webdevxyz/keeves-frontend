import React from "react";
import { useState } from "react";
import { customersImages } from "../../lib/data/DetailsPageData";

const SortByReviews = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showButton = customersImages.length > 3;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div>
                <h3 className="fs14 fw500 mb1">Sort reviews by</h3>
                <div className="sortReviewsBtn">
                    <button>Recent</button>
                    <button>Most helpful</button>
                    <button>By positive</button>
                    <button>By negative</button>
                </div>
            </div>

            <div className="mt2">
                <h3 className="fs14 fw500 mb1">Images uploaded by customers</h3>
                <div className="moreImages">
                    {customersImages.slice(0, 3).map((image) => (
                        <div className="image" key={image.id}>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                    {showButton && (
                        <button onClick={openModal}>
                            + {customersImages.length - 3} <br /> More
                        </button>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div
                        className="moreImagesModalContent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <div className="images">
                            {customersImages.slice(3).map((image) => (
                                <div className="image" key={image.id}>
                                    <img src={image.src} alt={image.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SortByReviews;
