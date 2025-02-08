import {Link} from 'react-router';
import PropTypes from 'prop-types';

function MovieSceneItem({oneMovie}) {
  return(
      <Link to={`/detail/${oneMovie.movie}-${oneMovie.timestamp}`} style={{ textDecoration: 'none' }} >
        <img className="cards__img" src={oneMovie.poster} alt="Poster película"/>
        <p className="cards__text">{oneMovie.movie} - {oneMovie.year}</p>
        <p className="cards__wow">{oneMovie.full_line}</p>
      </Link>
  );
}

MovieSceneItem.propTypes = {
  oneMovie: PropTypes.shape({
    movie: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    full_line: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
    //current_wow_in_movie: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }).isRequired
};

export default MovieSceneItem;