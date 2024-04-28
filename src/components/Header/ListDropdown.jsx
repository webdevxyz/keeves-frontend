import React, { useState, useEffect, useRef } from 'react';

const ListDropdown = () => {
    const items = [
        { imgSrc: "/icon/product-icon.svg", text: "product" },
        { imgSrc: "/icon/services-icon.svg", text: "services" },
        { imgSrc: "/icon/markets-icon.svg", text: "markets" },
        { imgSrc: "/icon/motor-icon.svg", text: "motor" },
    ];

    const [isListVisible, setListVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({
        imgSrc: "/icon/product-icon.svg",
        text: "product",
    });

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setListVisible(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const toggleList = () => {
        setListVisible(!isListVisible);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setListVisible(false);
    };

    return (
        <div className="dropDown" ref={dropdownRef} onClick={toggleList}>
            <div className="wrapper">
                <img
                    src={selectedItem.imgSrc}
                    alt="Icon"
                    className="selectedImg"
                />
                <div className="selected">{selectedItem.text}</div>
            </div>
            <img
                src="/icon/dropdown-icon.svg"
                alt="Dropdown Icon"
                className={`arrow ${isListVisible ? "rotate" : ""}`}
            />

            {isListVisible && (
                <div className="list">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${selectedItem.text === item.text ? "active" : ""
                                }`}
                            onClick={() => handleItemClick(item)}
                        >
                            <img src={item.imgSrc} alt="Icon" />
                            <div className="text">{item.text}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListDropdown;
