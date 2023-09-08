import React, { useEffect, useState } from "react";
import ShowCards from "../components/ShowCards";

function PopularMovies() {
  const API_KEY = "c566f55b172728d7f84abac7efdfa535";

  const [moviePosters, setMoviePosters] = useState([]);

  useEffect(() => {
    async function fetchMoviePosters() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );

        if (res.ok) {
          const data = await res.json();
          const posters = data.results.map((movie) => movie.backdrop_path);
          setMoviePosters(posters);
        } else {
          console.error("Error fetching popular movies");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchMoviePosters();
  }, [API_KEY]);

  return <ShowCards posters={moviePosters} />;
}

export default PopularMovies;
