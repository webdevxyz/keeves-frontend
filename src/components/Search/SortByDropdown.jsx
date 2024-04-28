import React, { useState, useRef, useEffect } from "react";
import { SortByDropdownList } from "../../lib/data/SearchData";
import dropdownIcon from "/icon/dropdown-icon.svg";

const SortByDropdown = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("New Arrivals");
    const dropdownContentRef = useRef();

    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownContentRef.current &&
            !dropdownContentRef.current.contains(event.target) &&
            event.target.className !== "dropdownButton"
        ) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className={"dropdown " + (props.otherClass ? props.otherClass : "")}>
            <button className="dropdownButton" onClick={toggleDropdown}>
                <span>Sort By</span>
                <span className="select">{selectedOption}</span>
                <img src={dropdownIcon} alt="" />
            </button>
            {dropdownOpen && (
                <div className="dropdownContent" ref={dropdownContentRef}>
                    {SortByDropdownList.map((data) => (
                        <button
                            key={data.id}
                            className="dropdownItem"
                            onClick={() => selectOption(data.text)}
                        >
                            {data.text}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SortByDropdown;
