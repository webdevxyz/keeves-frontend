import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { searchRessult } from "../../lib/data/SearchData";
import yellowStar from "/icon/yellow-star.svg";
import blankStar from "/icon/blank-star.svg";
import SortByDropdown from "./SortByDropdown";


const SearchCardGrid = () => {

    const CardsPerPage = 21;

    const navigate = useNavigate();
    const location = useLocation();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [displayedCards, setDisplayedCards] = useState([]);

    useEffect(() => {
        setTotalPages(Math.ceil(searchRessult.length / CardsPerPage));
        updateDisplayedCards(currentPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pageParam = parseInt(params.get("page")) || 1;
        setCurrentPage(pageParam);
    }, [location.search]);

    const updateDisplayedCards = (page) => {
        const startIndex = (page - 1) * CardsPerPage;
        const endIndex = startIndex + CardsPerPage;
        setDisplayedCards(searchRessult.slice(startIndex, endIndex));
    };

    const handlePageClick = (page) => {
        if (page !== currentPage) {
            setCurrentPage(page);
            navigate(`/search?page=${page}`);
        }
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            navigate(`/search?page=${currentPage - 1}`);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            navigate(`/search?page=${currentPage + 1}`);
        }
    };

    const goToDetailPage = () => {
        navigate("/details");
    };

    const startResult = (currentPage - 1) * CardsPerPage + 1;
    const endResult =
        currentPage * CardsPerPage > searchRessult.length
            ? searchRessult.length
            : currentPage * CardsPerPage;

    return (
        <>
            <div className="flexCenterSB mobColumnReverse">
                <p className="fs14 fw600">
                    Showing {startResult}-{endResult} of over {searchRessult.length}{" "}
                    results for ""
                </p>
                {/* <p>{JSON.stringify(searchResult)}</p> */}
                <SortByDropdown otherClass="mobNone"/>
            </div>
            <div className="cardContainer mt2">
                {displayedCards.map((data, index) => (
                    <div className="resultCard" key={data.id} onClick={goToDetailPage}>
                        <div className="image">
                            <img src={data.image} alt={data.alt} />
                        </div>
                        <div className="text">
                            <h6>{data.brand}</h6>
                            <p className="para">{data.text}</p>
                            <div className="ratingStars">
                                {Array.from({ length: data.ratingStars }, (_, index) => (
                                    <img key={index} src={yellowStar} alt="" />
                                ))}
                                {Array.from({ length: 5 - data.ratingStars }, (_, index) => (
                                    <img key={data.ratingStars + index} src={blankStar} alt="" />
                                ))}
                                <span>{data.ratingCount}</span>
                            </div>
                            <div>
                                <h3>
                                    <span>&#8377;</span>
                                    {data.price}
                                </h3>
                                <p className="fs14 opa0p7">
                                    MRP <span className="lineThrough">₹{data.mrp}</span> (
                                    {data.mrpPercentage}%)
                                </p>
                            </div>
                        </div>
                        <div className="offPrice">
                            <span>{data.offPercentage}% OFF</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="paginaButtons">
                <div className="pagination">
                    {currentPage > 1 && (
                        <button
                            id="PreviousBtn"
                            onClick={handlePrevClick}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                    )}
                    <div className="pagiNumber">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`pageLink ${index + 1 === currentPage ? "active" : ""
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageClick(index + 1);
                                }}
                            >
                                {index + 1}
                            </a>
                        ))}
                    </div>
                    <button
                        id="NextBtn"
                        onClick={handleNextClick}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
                <p id="pageNumbers">
                    Page {currentPage} of {totalPages}
                </p>
            </div>
        </>
    );
};

export default SearchCardGrid;
