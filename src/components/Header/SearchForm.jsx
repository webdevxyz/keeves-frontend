import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [discoverList, setDiscoverList] = useState([]);
  const [isListVisible, setListVisible] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setListVisible(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (!location.pathname.includes("/search")) {
      setQuery("");
    }
  }, [location.pathname]);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);

    const allSuggestions = [
      { mainText: "Apple", subText: "In Fruit" },
      { mainText: "Banana", subText: "" },
      { mainText: "s23 ultra mobile", subText: "In Mobile" },
      { mainText: "Mango", subText: "In Fruit" },
      { mainText: "Grapes", subText: "In Fruit" },
    ];

    const filteredSuggestions = allSuggestions.filter((suggestion) =>
      suggestion.mainText.toLowerCase().includes(userInput.toLowerCase())
    );

    setSuggestions(filteredSuggestions);

    if (userInput) {
      const discoverMoreList = [
        { mainText: "Laptops" },
        { mainText: "Pineapple" },
        { mainText: "Strawberry" },
        { mainText: "Watermelon" },
      ].filter((data) =>
        data.mainText.toLowerCase().includes(userInput.toLowerCase())
      );

      setDiscoverList(discoverMoreList);

      setListVisible(
        filteredSuggestions.length > 0 || discoverMoreList.length > 0
      );
    } else {
      setDiscoverList([]);
      setListVisible(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.mainText);
    setListVisible(false);
    navigate(`/search?q=${encodeURIComponent(suggestion.mainText)}`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <form action="" id="searchContainer" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          ref={inputRef}
          placeholder="Search for products, Brands, Markets & more"
        />
        <button type="submit">
          <img src="/icon/search-icon.svg" alt="search-icon" />
        </button>
        <div
          id="suggestionList"
          style={{ display: isListVisible ? "block" : "none" }}
        >
          {isListVisible && (
            <ul className="allSuggestions">
              {suggestions.map((suggestion, index) => (
                <div className="item" key={`suggestion-${index}`}>
                  <img src="/icon/watch-icon.svg" alt="" />
                  <li onClick={() => handleSuggestionClick(suggestion)}>
                    <span className="mainText">{suggestion.mainText}</span>{" "}
                    <span className="subText">{suggestion.subText}</span>
                  </li>
                </div>
              ))}
            </ul>
          )}
          {isListVisible && discoverList.length > 0 && (
            <ul className="discoverMoreList">
              <li className="heading">Discover More</li>
              {discoverList.map((data, index) => (
                <li
                  className="item"
                  key={`discover-${index}`}
                  onClick={() => handleSuggestionClick(data)}
                >
                  <img src="/icon/search-icon.svg" alt="Icon" />
                  <span>{data.mainText}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </>
  );
};

export default SearchForm;
