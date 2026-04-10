import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (text) => {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${text}&apikey=${API_KEY}`,
    );
    const data = await res.json();
    setMovies(data.Search || []);
  };

  const getDetails = async (id) => {
    const res = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`,
    );
    const data = await res.json();
    setSelectedMovie(data);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>Movie Finder</h1>

      <SearchBar onSearch={searchMovies} />

      <MovieList movies={movies} onSelect={getDetails} />

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
