import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import { getMovie } from './services/omdbapi';

function App() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovie("idk");
      // console.log(data);
      setMovie(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Form getMovie={getMovie} setMovie={setMovie}/>
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
