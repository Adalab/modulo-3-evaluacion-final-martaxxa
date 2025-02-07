import {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router';
import LandingPage from './pages/LandingPage';
import MoviesPage from './pages/MoviesPage';

import '../styles/App.scss';

function App() {

  //Variables de estado 
  const [movies, setMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [years, setYears] = useState ([]);
  const [filterYear, setFilterYear] = useState('');

  const navigate = useNavigate();

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

  const handleNavigate = () => {
    navigate('/page');
  };

  const filteredMovies = movies
      .filter(movie => movie.movie.toLowerCase().includes(filterMovie.toLowerCase()))
      .filter(movie => (filterYear === '' ? true : movie.year.toString() === filterYear));

  return (
    <>
      <Routes>
        <Route index element={ <LandingPage handleNavigate={handleNavigate}/> }></Route>
        <Route path='/page' element={
          <MoviesPage 
          filterMovie={filterMovie} 
          handleInputFilterMovie={handleInputFilterMovie}
          filterYear={filterYear}
          handleInputFilterYear={handleInputFilterYear}
          years={years}
          filteredMovies={filteredMovies}
          />
        }>
        </Route>
      </Routes>
    </>
  )
}

export default App;