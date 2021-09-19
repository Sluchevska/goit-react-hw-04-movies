import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import * as MovieApi from '../../services/movie-api';
import { NavLink, useRouteMatch } from 'react-router-dom';
import LoadMoreBtnClick from '../LoadMoreBtn/LoadMoreBtn';

export default function MoviesPage() {
  const { url } = useRouteMatch();

  const [movies, setMovies] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!searchName) return;

    MovieApi.fetchMovieByName(searchName, page).then(data => {
      setMovies(data.results);
      // setMovies(prevMovies=>[...prevMovies, ...data.results]);
      //   page > 1 &&
      //       window.scrollTo({
      //         top: document.documentElement.scrollHeight,
      //         behavior: 'smooth',
      //       });
    });
  }, [page, searchName]);

  console.log(movies);

  const handleSubmit = searchName => {
    console.log(searchName);
    setSearchName(searchName);
  };

  const loadMoreBtnClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const showButton = movies.length > 20;

  return (
    <>
      <SearchBar onSearch={handleSubmit} />
      <h1>Its movies Page</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`${url}/${movie.id}`}>
                {movie.original_title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      {showButton && <LoadMoreBtnClick onClick={loadMoreBtnClick} />}
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
