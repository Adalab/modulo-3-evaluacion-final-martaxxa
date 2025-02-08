import { Link, useParams } from "react-router";
import PropTypes from "prop-types";

function DetailPage({ movies }) {
  const {movieId} = useParams();
  const [movieName, timestamp] = movieId.split("-");


  const selectedMovie = movies.find(
    (movie) =>
      movie.movie.trim().toLowerCase() === decodeURIComponent(movieName).trim().toLowerCase() &&
      movie.timestamp.trim() === decodeURIComponent(timestamp).trim()
  );

  console.log("🎬 Selected Movie:", selectedMovie);

  if (!selectedMovie) {
    return (
      <div className="not-found">
        <p className="not-found__text">Error!</p>
        <p className="not-found__text">Movie not found</p>
        <img
          className="not-found__img"
          src="src/images/so-sad.png"
          alt="Owen Wilson sad"
        />
        <button className="detailpage__btn">
          <Link to="/page" style={{ textDecoration: "none" }}>
            Volver
          </Link>
        </button>
      </div>
  )};

  return (
    <section className="detailbody">
      <div className="detailpage">
        <img
          className="detailpage__img"
          src={selectedMovie.poster}
          alt={selectedMovie.movie}
        />
        <div className="detailpage__info">
          <h2 className="detailpage__title">{selectedMovie.movie}</h2>
          <h3 className="detailpage__line">{selectedMovie.full_line}</h3>
          <p className="detailpage__year">
            <strong>Año: </strong>
            {selectedMovie.year}
          </p>
          <p className="detailpage__director">
            <strong>Director/es: </strong>
            {selectedMovie.director}
          </p>
          <a className="detailpage__audio" href={selectedMovie.audio}>
            🔊 Escuchar WOW
          </a>
        </div>
      </div>
      <button className="detailpage__btn">
        <Link to="/page" style={{ textDecoration: "none" }}>
          Volver
        </Link>
      </button>
    </section>
  );
}

DetailPage.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default DetailPage;