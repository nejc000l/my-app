import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
function App() {
  const API_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);
  const getApi = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    });
    setMovies(results);
    console.log(movies);

  };
  useEffect(() => {
    getApi();
  }, []);

  const showMovies = () =>
    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  return (
    <div className="App">
      <Navbar />
      <header>
        <h1 className="title">Hello World</h1>
        <div className="container-content">
        <div className="filter">
            <Filter />
          </div>

          <div className="container">{showMovies()}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
