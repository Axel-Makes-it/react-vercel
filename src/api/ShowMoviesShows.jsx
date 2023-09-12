import React, { useEffect, useState } from "react";
import ShowCards from "../components/ShowCards";

function ShowMoviesShows({ category }) {
  const API_KEY = "c566f55b172728d7f84abac7efdfa535";

  const [moviePosters, setMoviePosters] = useState([]);
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`
        );

        if (res.ok) {
          const data = await res.json();
          const posters = data.results.map((movie) => movie.backdrop_path);
          const titles = data.results.map((movie) => movie.title);
          setMoviePosters(posters);
          setMovieTitles(titles);
        } else {
          console.error(`Error fetching ${category} movies`);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchMovieData();
  }, [category]);

  return (
    <ShowCards
      posters={moviePosters}
      titles={movieTitles}
      category={category}
    />
  );
}

export default ShowMoviesShows;
