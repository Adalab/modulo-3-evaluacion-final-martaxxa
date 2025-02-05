import {useState} from 'react';

import '../styles/App.scss';

import dataJson from '../data/data.json';

function App() {

  const [movies, setMovies] = useState([dataJson]);

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
        <ul className='list'>
          <li className='cards'>
            <img className='cards__img' src='./src/images/cars-3.png' alt='Poster Cars 3'/>
            <p className='cards__text'>Cars 3 - 2017</p>
            <p className='cards__wow'>Wow.</p>
          </li>
          <li className='cards'>
            <img className='cards__img' src='./src/images/cars-3.png' alt='Poster Cars 3'/>
            <p className='cards__text'>Cars 3 - 2017</p>
            <p className='cards__wow'>Wow.</p>
          </li>
          <li className='cards'>
            <img className='cards__img' src='./src/images/cars-3.png' alt='Poster Cars 3'/>
            <p className='cards__text'>Cars 3 - 2017</p>
            <p className='cards__wow'>Wow.</p>
          </li>
        </ul>
      </main>
    </>
  )
}

export default App;
