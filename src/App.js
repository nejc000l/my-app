import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Button from './components/Button';
function App() {
  const BASE_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);

  const getApi = async () => {
    const {
      data: { results },
    } = await axios.get(`${BASE_URL}/discover/movie`, {
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
      <main>
        <div className="container-wrapper">
          <div className="title">Popular Movies</div>
          <div className="container-content">
            <div className="filter">
              <Filter />
            </div>
            <div>
              <div className="container">{showMovies()}</div>
              <Button/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
