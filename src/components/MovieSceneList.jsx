import PropTypes from 'prop-types';

function MovieSceneList({movies}) {

  return (
    <ul className="list">
      {movies.map((oneMovie) => (
        <li key={oneMovie.audio} className="cards">
          <img
            className="cards__img"
            src={oneMovie.poster}
            alt="Poster película"/>
          <p className="cards__text">{oneMovie.movie} - {oneMovie.year}</p>
          <p className="cards__wow">{oneMovie.full_line}</p>
        </li>
      ))}
    </ul>
  );
}

MovieSceneList.propTypes = {
  movies: PropTypes.array
};

export default MovieSceneList;