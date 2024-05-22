import React from "react";
import yellowStar from "/icon/yellow-star.svg";
import blankStar from "/icon/blank-star.svg";

const RatingsReviews = () => {
    const ratingAndReviewsList = [
        {
            id: "1",
            starNumber: "5",
            percentage: "80",
        },
        {
            id: "2",
            starNumber: "4",
            percentage: "10",
        },
        {
            id: "3",
            starNumber: "3",
            percentage: "4",
        },
        {
            id: "4",
            starNumber: "2",
            percentage: "4",
        },
        {
            id: "5",
            starNumber: "1",
            percentage: "2",
        },
    ];

    const wishListData = [
        {
            rating: 4.5,
            totalRatings: 25000,
        },
    ];

    const numRatingStars = Math.floor(wishListData[0].rating);

    return (
        <>
            <div>
                <h3 className="fs22 fw500">Ratings & Reviews</h3>
                <div className="flexCenter gap2 mt1">
                    <div className="flexColumnCenter gap0p5">
                        <span className="fs30 fw500">{wishListData[0].rating}/5</span>
                        <div className="flexCenter gap0p2">
                            {Array.from({ length: numRatingStars }, (_, index) => (
                                <img key={index} src={yellowStar} alt="" width="20px" />
                            ))}
                            {Array.from({ length: 5 - numRatingStars }, (_, index) => (
                                <img key={numRatingStars + index} src={blankStar} alt="" width="20px" />
                            ))}
                        </div>
                        <span className="fs14 fw400 opa0p8">Based on {wishListData[0].totalRatings} ratings</span>
                    </div>

                    <div>
                        {ratingAndReviewsList.map(function (ratingReviews) {
                            return (
                                <div className="ratingReviews" key={ratingReviews.id}>
                                    <span className="fs14 opa0p8">{ratingReviews.starNumber}</span>
                                    <img src={yellowStar} alt="" width="18px" />
                                    <div className="percentage">
                                        <div
                                            style={{ width: `${ratingReviews.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="fs14 opa0p8">{ratingReviews.percentage}%</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="divHR mtb2"></div>
        </>
    );
};

export default RatingsReviews;
