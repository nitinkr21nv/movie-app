import MovieCard from "./MovieCard";

function MovieList({ movies, onSelect }) {
  return (
    <div className="grid">
      {movies.map((m) => (
        <MovieCard key={m.imdbID} movie={m} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default MovieList;
