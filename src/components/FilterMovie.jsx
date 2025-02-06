import PropTypes from "prop-types";

function FilterMovie({filterMovie , handleInputFilterMovie}) {

  return (
    <form className="movie">
      <label className="movie__title" htmlFor="Movie">
        Movie:
      </label>
      <input
        className="movie__box"
        autoComplete="off"
        type="search"
        name="search"
        placeholder="Search the movie"
        onInput={handleInputFilterMovie}
        value={filterMovie}
      />
    </form>
  );
}

FilterMovie.propTypes = {
  filterMovie: PropTypes.string.isRequired,
  handleInputFilterMovie: PropTypes.func.isRequired
};

export default FilterMovie;