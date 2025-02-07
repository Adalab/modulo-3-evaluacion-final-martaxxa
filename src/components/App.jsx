import {useState, useEffect} from 'react';
import MovieSceneList from './MovieSceneList';
import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

import '../styles/App.scss';

function App() {

  //Variables de estado 
  const [movies, setMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [years, setYears] = useState ([]);
  const [filterYear, setFilterYear] = useState('');

  //Llamada a la API
  useEffect( () => {
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
      .then (response => response.json())
      .then (dataJson => {
        setMovies(dataJson);

        const uniqueYears = [...new Set(dataJson.map(movie => movie.year))].sort((a, b) => b - a);
        setYears(uniqueYears);
      });
  }, []);

  //Eventos
  const handleInputFilterMovie = (ev) => {
    ev.preventDefault();
    setFilterMovie(ev.target.value);
  }

  const handleInputFilterYear = (ev) => {
    ev.preventDefault();
    setFilterYear(ev.target.value);
  }

  const filteredMovies = movies
      .filter(movie => movie.movie.toLowerCase().includes(filterMovie.toLowerCase()))
      .filter(movie => (filterYear === '' ? true : movie.year.toString() === filterYear));

  return (
    <>
      <header className='header'>
        <img className='header__img' src='src/images/WOW.jpeg' alt='Owen Wilson meme'/>
        <h1 className='header__title'>Owen Wilson's "wow"</h1>
      </header>
      <main className='body'>
        <div className='presentation'>
          <h2 className='presentation__ask'>How many WOWs has Owen Wilson said?</h2>
          <img className='presentation__arrow' src='src/images/ico-arrow.png' alt='Icono de una flecha'/>
        </div>

        <div className='inputs'>
          <FilterMovie filterMovie={filterMovie} handleInputFilterMovie={handleInputFilterMovie}/>
          <FilterYear filterYear={filterYear} handleInputFilterYear={handleInputFilterYear} years={years}/>
        </div>

        {filteredMovies.length === 0 ? (
          <div className='no-results'>
            <img className='no-results__img' src='src/images/so-sad.png' alt='Owen Wilson sad'/>
          </div>
        ):(
          <MovieSceneList movies={filteredMovies}/>
        )}

      </main>
      <footer className='footer'>
        <p className='footer__text'>Adalab®2025</p>
        <p className='footer__text'>Módulo 3 - Marta Chacartegui</p>
      </footer>
    </>
  )
}

export default App;