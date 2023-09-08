import "./App.css";
import PopularMovies from "./api/PopularMovies";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import ShowCards from "./components/ShowCards";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Banner />
      <ShowCards />
      <ShowCards />
      <ShowCards />
      <PopularMovies />
    </div>
  );
}

export default App;
