import PropTypes from 'prop-types';

function MovieSceneItem({oneMovie}) {
  return(
    <>
      <img className="cards__img" src={oneMovie.poster} alt="Poster película"/>
      <p className="cards__text">{oneMovie.movie} - {oneMovie.year}</p>
      <p className="cards__wow">{oneMovie.full_line}</p>
    </>
  );
}

MovieSceneItem.PropTypes = {
  oneMovie: PropTypes.object
}

export default MovieSceneItem;