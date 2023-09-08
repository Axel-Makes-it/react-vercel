import React, { useEffect, useState } from "react";

function PopularMovies() {
  const API_KEY = "c566f55b172728d7f84abac7efdfa535"; // Replace with your TMDb API key

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function PopularMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );

        if (res.ok) {
          const data = await res.json();
          setPopularMovies(data.results);
        } else {
          console.error("Error fetching popular movies");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    PopularMovies();
  }, [API_KEY]);

  return (
    <div>
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PopularMovies;
