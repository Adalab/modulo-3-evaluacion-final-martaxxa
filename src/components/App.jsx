import {useState, useEffect} from 'react';
import MovieSceneList from './MovieSceneList';
import FilterMovie from './FilterMovie';

import '../styles/App.scss';

function App() {

  //Variables de estado
  const [movies, setMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [years, setYears] = useState ([]);
  const [filterYear , setFilterYear] = useState('');

  //
  useEffect( () => {
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
      .then (response => response.json())
      .then (dataJson => {
        setMovies(dataJson);

        /*const uniqueYears = [...new Set(dataJson.map(novia => movie.year))];
        setYears(uniqueYears);*/
      });
  }, []);

  //Eventos
  const handleInputFilterMovie = (ev) => {
    ev.preventDefault();
    setFilterMovie(ev.target.value);
  }

  const filteredMovies = movies.filter(movie => movie.movie.toLocaleLowerCase().includes(filterMovie.toLocaleLowerCase()));

  const handleInputFilterYear = (ev) => {
    ev.preventDefault();
    setFilterYear(ev.target.value);
  }

  //const filteredYear = years.filter(year => year.year.toLowerCase().includes(filterYear.toLowerCase()));

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

          <form className='year'>
            <label className='year__title' htmlFor="Year">Year:</label>
            <select className='year__box' 
              id="Year" 
              name="Years"
              value={filterYear}
              onChange={handleInputFilterYear}>
                <option value="">All years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
            </select>
          </form>  
        </div>

        <MovieSceneList movies={filteredMovies}/>
        
      </main>
      <footer className='footer'>
        <p className='footer__text'>Adalab®2025</p>
        <p className='footer__text'>Módulo 3 - Marta Chacartegui</p>
      </footer>
    </>
  )
}

export default App;