import {useState, useEffect} from 'react';
import MovieSceneList from './MovieSceneList';

import '../styles/App.scss';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect( () => {
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=5')
      .then (response => response.json())
      .then (dataJson => {
        setMovies(dataJson);
      });
  }, []);


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
          <div className='movie'>
            <label className='movie__title' for="Movie">Movie:</label>
            <input className='movie__box' type="text" id="movie" name="movie" placeholder="Search the movie here" />
          </div>
          <div className='year'>
            <label className='year__title' for="Year">Year:</label>
            <select className='year__box' id="Year" name="Years">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>  
        </div>
        <MovieSceneList movies={movies}/>
      </main>
      <footer className='footer'>
        <p className='footer__text'>Adalab®2025</p>
        <p className='footer__text'>Módulo 3 - Marta Chacartegui</p>
      </footer>
    </>
  )
}

export default App;
