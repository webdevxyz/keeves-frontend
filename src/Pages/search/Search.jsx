import React, { useState, useEffect } from "react";
import useSearchProduct from "./useSearchProduct";
import SearchFilters from "../../components/Search/SearchFilters";
import SearchCardGrid from "../../components/Search/SearchCardGrid";
import SortByDropdown from "../../components/Search/SortByDropdown";
import filterIcon from "/icon/filter-icon.svg"
import SearchCardList from "../../components/Search/SearchCardList ";

const Search = () => {
  const query = "mobile";
  const { data, loading, error } = useSearchProduct(query);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    if (!showFilters) {
      document.body.classList.add('stopBodyScroll');
    } else {
      document.body.classList.remove('stopBodyScroll');
    }
  }, [!showFilters]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      {
        /* <div>
          {error ? (<h3>Error {query}</h3>) : loading ? (<h3>Loading {query}</h3>) : <div className="container mt2 mb5 flex gap2">
            <SearchFilters />
            <div className="resultContainer">
              <SearchCardGrid searchResult={data} q={query} />
            </div>
          </div>}
        </div> */
      }
      <div className="container mt1 none mobFlexCenterSB gap1">
        <button className="openFilterBtn" onClick={toggleFilters}><img src={filterIcon} alt="Filter Icon" /> Filter</button>
        <SortByDropdown />
      </div>
      <div className="container mt2 mb5 flex gap2 mobMb2">
        <SearchFilters otherClass={showFilters ? "" : "mob"} click={toggleFilters} />
        <div className="resultContainer">
          {/* <SearchCardGrid /> */}
          <SearchCardList/>
        </div>
      </div>
    </>
  );
};

export default Search;
