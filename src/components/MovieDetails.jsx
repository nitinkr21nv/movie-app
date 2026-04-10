function MovieDetails({ movie }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />

      <p>Year: {movie.Year}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Plot: {movie.Plot}</p>
    </div>
  );
}

export default MovieDetails;
