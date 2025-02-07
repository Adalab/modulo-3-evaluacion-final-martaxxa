import PropTypes from "prop-types";
import MovieSceneList from '../movies/MovieSceneList';
import FilterMovie from '../movies/FilterMovie';
import FilterYear from '../movies/FilterYear';

function MoviesPage({filterMovie, handleInputFilterMovie, filterYear, handleInputFilterYear, years, filteredMovies }) {
  return (
    <section>
      <header className="header">
        <img
          className="header__img"
          src="src/images/WOW.jpeg"
          alt="Owen Wilson meme"
        />
        <h1 className="header__title">Owen Wilson's "wow"</h1>
      </header>
      <main className="body">
        <div className="presentation">
          <h2 className="presentation__ask">
            How many WOWs has Owen Wilson said?
          </h2>
          <img
            className="presentation__arrow"
            src="src/images/ico-arrow.png"
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
              src="src/images/so-sad.png"
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
