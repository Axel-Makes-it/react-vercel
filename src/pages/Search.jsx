import React from "react";
import Nav from "../components/Nav"; // Updated import path
import SearchShows from "../components/SearchShows";
import ShowMoviesShows from "../api/ShowMoviesShows";

function Search() {
  return (
    <div className="app-container">
      <Nav />
      <SearchShows />
      <ShowMoviesShows category="popular" />
      <ShowMoviesShows category="popular" />
      <ShowMoviesShows category="popular" />
    </div>
  );
}

export default Search;
