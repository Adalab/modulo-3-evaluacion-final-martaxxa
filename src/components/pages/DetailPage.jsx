import {Link, useParams} from 'react-router';
import PropTypes from 'prop-types';

function DetailPage({movies}) {
  const params = useParams();

  const movieName = params.movie;
  if (!movieName) {
    return <p>Película no encontrada</p>;
  }

  const selectedMovie = movies.find((m) => m.movie === decodeURIComponent(movieName));

  if (!selectedMovie) {
    return <p>Película no encontrada</p>;
  }
  
  return (
  <section className='detailbody'>
    <div className='detailpage'>
      <img 
        className='detailpage__img' 
        src={selectedMovie.poster} 
        alt={selectedMovie.movie} 
      />
      <div className='detailpage__info'>
        <h2 className='detailpage__title'>{selectedMovie.movie}</h2>
        <h3 className='detailpage__line'>{selectedMovie.full_line}</h3>
        <p className='detailpage__year'><strong>Año: </strong>{selectedMovie.year}</p>
        <p className='detailpage__director'><strong>Director/es: </strong>{selectedMovie.director}</p>
        <a className='detailpage__audio' href={selectedMovie.audio}>🔊 Escuchar WOW</a>
      </div>
    </div>
    <button className='detailpage__btn'>
      <Link to='/page' style={{ textDecoration: 'none' }} >
      Volver
      </Link>
    </button>
  </section>
)}

DetailPage.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default DetailPage;