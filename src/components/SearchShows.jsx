import React, { useState, useEffect } from "react";
import "../styles/SearchShows.css";

function SearchShows() {
  const API_KEY = "c566f55b172728d7f84abac7efdfa535";

  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  useEffect(() => {
    async function searchMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${API_KEY}`
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    searchMovies();
  }, [searchValue]);

  return (
    <div className="SearchShow__container">
      <form className="SearchShow__form" onSubmit={handleSubmit}>
        <input
          className="SearchShow__input"
          value={searchValue}
          onChange={handleChange}
          type="text"
          spellCheck="false"
          autoComplete="off"
          placeholder="Search"
          name="searchInput"
        />
        <button className="SearchShow__clear__btn" onClick={handleClear}>
          Clear
        </button>
      </form>

      {searchValue.trim() === "" ? (
        <>
          <h1 className="SearchShows__Helper">
            Go ahead and search for movies. For Example, Spider-man, Harry
            Potter...
          </h1>
        </>
      ) : (
        <div className="showcard__container">
          <div className="SearchShows__wrapper">
            {movies.map((movie) => (
              <div className="SearchShows__list" key={movie.id}>
                <img
                  className="SearchShows__card"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <p className="SearchShows__title">{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchShows;
