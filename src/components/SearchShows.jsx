import React from "react";
import "../styles/SearchShows.css";

function SearchShows() {
  return (
    <>
      <div className="SearchShow__container">
        <form className="SearchShow__form">
          <input
            className="SearchShow__input"
            type="text"
            spellcheck="false"
            placeholder="Search"
          />
        </form>
      </div>
    </>
  );
}

export default SearchShows;
