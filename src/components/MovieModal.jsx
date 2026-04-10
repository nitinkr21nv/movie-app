function MovieModal({ movie, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          X
        </span>

        <img src={movie.Poster} alt={movie.Title} />

        <h2>{movie.Title}</h2>
        <p>
          <b>Year:</b> {movie.Year}
        </p>
        <p>
          <b>Genre:</b> {movie.Genre}
        </p>
        <p>
          <b>Actors:</b> {movie.Actors}
        </p>
        <p>
          <b>Plot:</b> {movie.Plot}
        </p>
      </div>
    </div>
  );
}

export default MovieModal;
