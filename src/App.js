import React from "react";
import ShowMoviesShows from "./api/ShowMoviesShows";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Banner />
      <ShowMoviesShows category="popular" />
      <ShowMoviesShows category="top_rated" />
      <ShowMoviesShows category="upcoming" />
      <ShowMoviesShows category="top_rated" />
      <ShowMoviesShows category="popular" />
      <Footer />
    </div>
  );
}

export default App;
