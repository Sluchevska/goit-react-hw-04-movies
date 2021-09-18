import { useEffect, useState } from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';
import PageHeading from '../PageHeading/PageHeading'

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
      <PageHeading text = "Popular Movies"/>
      {movies &&(
        <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${url}movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
        </ul>)
      }
      
    </>
  );
}
