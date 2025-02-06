import PropTypes from "prop-types";

function FilterYear({filterYear, handleInputFilterYear, years}) {

  return (
    <form className="year">
      <label className="year__title" htmlFor="Year">
        Year:
      </label>
      <select
        className="year__box"
        id="Year"
        name="Years"
        value={filterYear}
        onChange={handleInputFilterYear}>
        <option value="">All years</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
}

FilterYear.propTypes = {
  filterYear: PropTypes.string.isRequired,
  handleInputFilterYear: PropTypes.func.isRequired,
  years: PropTypes.array.isRequired
};

export default FilterYear;
