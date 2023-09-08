import "./App.css";
import PopularMovies from "./api/PopularMovies";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Banner />
      <PopularMovies />
    </div>
  );
}

export default App;
