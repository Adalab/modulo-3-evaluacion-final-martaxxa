import PropTypes from 'prop-types';
import MovieSceneItem from './MovieSceneItem';

function MovieSceneList({movies}) {

  return (
    <ul className="list">
      {movies.map((oneMovie) => (
        <li key={oneMovie.audio} className="cards">
          <MovieSceneItem oneMovie={oneMovie}/>
        </li>
      ))}
    </ul>
  );
}

MovieSceneList.propTypes = {
  movies: PropTypes.array
};

export default MovieSceneList;