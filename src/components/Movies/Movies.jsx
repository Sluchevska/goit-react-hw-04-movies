import { useEffect, useState } from 'react';
import * as MovieApi from '../../services/movie-api';

export default function Movies(searchName) {
 
    const [movies, setMovies] = useState(null);
    
  useEffect(() => {
    MovieApi.fetchMovieByName(searchName).then(data => {
      setMovies(data);
    });
  }, [searchName]);
console.log(movies)
  return (
    <>
      
         
      </>
      
  );
}
