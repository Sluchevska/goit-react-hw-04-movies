import { useEffect, useState } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';
import PageHeading from '../../components/PageHeading/PageHeading';
import { Container, MovieItems, Poster, Ul } from './HomePage.styled';
import DefaultImg from '../../DefaultsImg/PngItem_1503945.png'

export default function HomePage() {
  const { url } = useRouteMatch();
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    MovieApi.fetchPopularMovie().then(data => {
      setMovies(data.results);
    });
  }, []);
 

  return (
    <Container>
      <PageHeading text="Popular Movies" />
      {movies && (
        <Ul>
          {movies.map(movie => (
            <MovieItems key={movie.id}>
              <Link
                to={{
                  pathname: `${url}movies/${movie.id}`,
                  state: { from: { location } },
                }}
              >
                <Poster src={ movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : DefaultImg} alt = {movie.original_title ?? movie.name}/>
                <p>{movie.name && movie.name}
                {movie.original_title}</p>
              </Link>
            </MovieItems>
          ))}
        </Ul>
      )}
    </Container>
  );
}
