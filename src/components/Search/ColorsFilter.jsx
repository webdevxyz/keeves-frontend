import React from "react";
import { useState } from "react";
import { colorsList } from "../../lib/data/SearchData"

const ColorsFilter = () => {
    const initialvisibleColors = 6;
    const [visibleColors, setvisibleColors] = useState(initialvisibleColors);

    const handleReadMoreClick = () => {
        setvisibleColors(colorsList.length);
    };

    const handleShowLessClick = () => {
        setvisibleColors(initialvisibleColors);
    };

    return (
        <>
            <div className="colors list">
                <h4>Color</h4>

                <div className="seeMore">
                    {colorsList.map(function (data, index) {
                        return (
                            index < visibleColors && (
                                <div className="item" key={data.id}>
                                    <input type="checkbox" />
                                    <div className="color" style={{ backgroundColor: data.color }}></div>
                                    <span>{data.text}</span>
                                </div>
                            )
                        );
                    })}
                </div>
                {colorsList.length > initialvisibleColors && (
                    <button
                        className="textBtn"
                        onClick={
                            visibleColors === colorsList.length
                                ? handleShowLessClick
                                : handleReadMoreClick
                        }
                    >
                        {visibleColors === colorsList.length
                            ? "-See Less"
                            : "+See More"}
                    </button>
                )}
            </div>
        </>
    );
};

export default ColorsFilter;
