import React from "react";
import { useState } from "react";
import starIcon from "/icon/yellow-star.svg";
import verifiedIcon from "/icon/verified-icon.svg";
import { customerReviews } from "../../lib/data/DetailsPageData";

const CustomerReviews = () => {
    const initialVisibleImages = 2;
    const [visibleImages, setVisibleImages] = useState(initialVisibleImages);

    const handleReadMoreClick = () => {
        setVisibleImages(customerReviews.length);
    };

    const handleShowLessClick = () => {
        setVisibleImages(initialVisibleImages);
    };

    return (
        <>
            <div className="mt2">
                <h3 className="fs14 fw500 mb1">Customer reviews</h3>
                <div>
                    {customerReviews.map(function (data, index) {
                        return (
                            index < visibleImages && (
                                <div className="reviewItem" key={data.id}>
                                    <div className="flexCenterSB">
                                        <div className="flexCenter">
                                            <div className="userImg">
                                                <img src={data.userImage} alt="User Image" />
                                            </div>
                                            <div>
                                                <span className="userName">{data.userName}</span>
                                                <div className="userRating">
                                                    <span>{data.userRating}</span>
                                                    <img src={starIcon} alt="Icon" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="buttonPair">
                                            <div className="flexCenter gap0p5">
                                                <button className="likeButton">
                                                    <i className="far fa-thumbs-up"></i>
                                                </button>
                                                <span>{data.like}</span>
                                            </div>
                                            <div className="flexCenter gap0p5">
                                                <button className="dislikeButton">
                                                    <i className="far fa-thumbs-up"></i>
                                                </button>
                                                <span>{data.dislike}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="fs14 fw500 mtb1">{data.heading}</h3>
                                    <p className="fs14 fw400 lh18 opa0p7">{data.text}</p>

                                    <div className="reviewImages">
                                        {data.reviewImages.length > 0 &&
                                            data.reviewImages.map((reviewImage, index) => (
                                                <div className="image" key={index}>
                                                    <img
                                                        src={reviewImage}
                                                        alt={`Review Image ${index + 1}`}
                                                    />
                                                </div>
                                            ))}
                                    </div>

                                    <div className="verified">
                                        <img src={verifiedIcon} alt="Icon" />
                                        <span>
                                            Verified User | {data.location} | {data.time}
                                        </span>
                                    </div>
                                </div>
                            )
                        );
                    })}
                    {customerReviews.length > initialVisibleImages && (
                        <button
                            className="textBtn"
                            onClick={
                                visibleImages === customerReviews.length
                                    ? handleShowLessClick
                                    : handleReadMoreClick
                            }
                        >
                            {visibleImages === customerReviews.length ? "Show Less Reviews" : "View all reviews"}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default CustomerReviews;
