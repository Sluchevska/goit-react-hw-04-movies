import { useEffect, useState } from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';

export default function HomePage() {
  const { url } = useRouteMatch();

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    MovieApi.fetchPopularMovie().then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h1>Popular movies</h1>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${url}${movie.id}`}>
              {movie.original_title}
            </Link>
          </li>
        ))}
          <NavLink
              exact to="/movies/:movieId"
        className="Navigation_link"
        activeClassName="Active_link"
      >
        Movie Details
      </NavLink>
    </>
  );
}