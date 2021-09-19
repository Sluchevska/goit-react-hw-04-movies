
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import * as MovieApi from '../../services/movie-api';

export default function MoviesPage() {
 
  const [movies, setMovies] = useState(null);
 const [searchName, setSearchName] = useState('');
 
  useEffect(() => {
    if (!searchName) return
    
    MovieApi.fetchMovieByName(searchName).then(data => {
      setMovies(data.results);
    });
  }, [searchName]);

  console.log(movies);
  console.log(searchName)
 
  const handleSubmit = searchName => {
    setSearchName(searchName)
  }
    

   
  
  return (
    <>
      <SearchBar  onSearch={handleSubmit} />
      <h1>Its movies Page</h1>
    </>
  );
}




// export default function MoviesPage() {
 
//   const [movies, setMovies] = useState(null);

//   const SearchMovie = (query) => {
//   useEffect(() => {
//     // if (!searchName) return
    
//     MovieApi.fetchMovieByName(query).then(data => {
//       setMovies(data.results);
//     });
//   }, [query]);

//   console.log(movies);
//   console.log(query)
    
// }
   
  
//   return (
//     <>
//       <SearchBar  onSubmit={SearchMovie} />
//       <h1>Its movies Page</h1>
//     </>
//   );
// }
