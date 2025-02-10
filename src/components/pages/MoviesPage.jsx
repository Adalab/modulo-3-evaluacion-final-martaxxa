import {Link} from 'react-router';
import PropTypes from "prop-types";
import MovieSceneList from '../movies/MovieSceneList';
import FilterMovie from '../movies/FilterMovie';
import FilterYear from '../movies/FilterYear';
import wowImage from '../../images/WOW.jpeg';
import icoArrow from '../../images/ico-arrow.png';
import noResults from '../../images/so-sad.png';

function MoviesPage({filterMovie, handleInputFilterMovie, filterYear, handleInputFilterYear, years, filteredMovies }) {
  return (
    <section>
      <header className="header">
        <Link to='/'>
          <img
            className="header__img"
            src={wowImage}
            alt="Owen Wilson meme"
          />
        </Link>
        <h1 className="header__title">Owen Wilson's WOW</h1>
      </header>
      <main className="body">
        <div className="presentation">
          <h2 className="presentation__ask">
            How many WOWs has Owen Wilson said?
          </h2>
          <img
            className="presentation__arrow"
            src={icoArrow}
            alt="Icono de una flecha"
          />
        </div>

        <div className="inputs">
          <FilterMovie
            filterMovie={filterMovie}
            handleInputFilterMovie={handleInputFilterMovie}
          />
          <FilterYear
            filterYear={filterYear}
            handleInputFilterYear={handleInputFilterYear}
            years={years}
          />
        </div>

        {filteredMovies.length === 0 ? (
          <div className="no-results">
            <img
              className="no-results__img"
              src={noResults}
              alt="Owen Wilson sad"
            />
          </div>
        ) : (
          <MovieSceneList movies={filteredMovies} />
        )}
      </main>
      <footer className="footer">
        <p className="footer__text">Adalab®2025</p>
        <p className="footer__text">Módulo 3 - Marta Chacartegui</p>
      </footer>
    </section>
  );
}

MoviesPage.propTypes = {
  filterMovie: PropTypes.string.isRequired,
  handleInputFilterMovie: PropTypes.func.isRequired,
  filterYear: PropTypes.string.isRequired,
  handleInputFilterYear: PropTypes.func.isRequired,
  years: PropTypes.array.isRequired,
  filteredMovies: PropTypes.array.isRequired,
};

export default MoviesPage;
