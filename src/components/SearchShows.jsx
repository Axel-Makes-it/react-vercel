import React from "react";
import "../styles/SearchShows.css";

function SearchShows() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="SearchShow__container">
      <form className="SearchShow__form" onSubmit={handleSubmit}>
        <input
          className="SearchShow__input"
          type="text"
          spellCheck="false"
          placeholder="Search"
        />
        <button className="SearchShow__clear__btn" type="submit">
          Clear
        </button>
      </form>
    </div>
  );
}

export default SearchShows;
