import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import * as MovieApi from '../../services/movie-api';
import { NavLink, useRouteMatch,useHistory,
  useLocation, } from 'react-router-dom';
import LoadMoreBtnClick from '../LoadMoreBtn/LoadMoreBtn';

export default function MoviesPage() {
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';
 

  useEffect(() => {
    if (!searchQuery) return;

    MovieApi.fetchMovieByName(searchQuery, page).then(data => {
      setMovies(data.results);
      // setMovies(prevMovies=>[...prevMovies, ...data.results]);
      //   page > 1 &&
      //       window.scrollTo({
      //         top: document.documentElement.scrollHeight,
      //         behavior: 'smooth',
      //       });
    });
  }, [page, searchQuery]);

  

  const handleSubmit = searchName => {
       setSearchName(searchName);
    history.push({ ...location, search: `query=${searchName}` });
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
              <NavLink to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: { location } },
                }}>
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
