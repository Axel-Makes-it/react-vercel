import React from "react";
import Nav from "../components/Nav";
import SearchShows from "../components/SearchShows";
import ShowMoviesShows from "../api/ShowMoviesShows";

function Search() {
  return (
    <div className="app-container">
      <Nav />
      <SearchShows />
      <ShowMoviesShows category="popular" />
      <ShowMoviesShows category="top_rated" />
      <ShowMoviesShows category="upcoming" />
    </div>
  );
}

export default Search;
