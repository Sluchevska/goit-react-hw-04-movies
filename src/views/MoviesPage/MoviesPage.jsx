import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as MovieApi from '../../services/movie-api';
import {
  NavLink,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import toast from 'react-hot-toast';
import LoadMoreBtnClick from '../../components/LoadMoreBtn/LoadMoreBtn';
import {
  Container,
  MovieItems,
  Poster,
  Title,
  Ul,
} from '../HomePage/HomePage.styled';
import slugify from '@sindresorhus/slugify';

const makeSlug = string => slugify(string, { lower: true });

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
      if (data.results.length === 0) {
        return toast.error(
          `Sorry, but there are no movie with  ${searchQuery}`,
          setMovies([]),
        );
      }
      if (data.results) {
        return setMovies(prevMovies => [...prevMovies, ...data.results]);
      }

      page > 1 &&
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
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
    <Container>
      <SearchBar onSearch={handleSubmit} />
      {movies && (
        <Ul>
          {movies.map(movie => (
            <MovieItems key={movie.id}>
              <NavLink
                to={{
                  pathname: `${url}/${makeSlug(`${movie.title} ${movie.id}`)}`,
                  state: { from: { location } },
                }}
              >
                <Poster
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title ?? movie.name}
                />
              </NavLink>
              <Title>
                {movie.name && movie.name}
                {movie.original_title}
              </Title>
            </MovieItems>
          ))}
        </Ul>
      )}
      {showButton && <LoadMoreBtnClick onClick={loadMoreBtnClick} />}
    </Container>
  );
}
