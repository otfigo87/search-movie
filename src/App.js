import {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {

  const[movie, setMovie] = useState(null);

  // fetch data from API
  const getMovie = async(searchTerm) => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=36eb841d&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data)
  }

   useEffect(() => {
     getMovie("idk");
   }, []);

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      {movie && <MovieDisplay movie={movie} />}
    </div>
  );
}

export default App;
