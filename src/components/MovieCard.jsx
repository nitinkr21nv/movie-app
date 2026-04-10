function MovieCard({ movie, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Title}</p>
    </div>
  );
}

export default MovieCard;
