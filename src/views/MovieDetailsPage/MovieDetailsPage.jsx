import { useEffect, useState, lazy, Suspense } from 'react';
import {
  Route,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router';
import { NavLink } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';
import Loader from '../../components/Loader/Loader';

import PageHeading from '../../components/PageHeading/PageHeading';
import DefaultImg from '../../DefaultsImg/PngItem_1503945.png'

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast" */));

const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    MovieApi.fetchMovieById(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  // console.log(movie)
  const goBack = () => {
    history.push(location?.state?.from?.location ?? '/movies');
  };

  return (
    <>
      <PageHeading text={`Movie ${movieId}`} />
      {movie && (
        <>
          <button type="button" onClick={goBack}>
            Go back
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`?? DefaultImg}
            width="100px"
            alt={movie.original_title}
          />
          <h2>{movie.original_title}</h2>
          <p>
            Score: <span>{movie.vote_average}</span>
          </p>
          <h3>Overview: </h3>
          <span>{movie.overview}</span>
          <h3>Genres: </h3>
          <span>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </span>
        </>
      )}

      <nav>
        <h3>Additional information</h3>

        <NavLink
          to={{
            pathname: `${url}/cast`,
            state: { from: { location } },
          }}
          className="Navigation_link"
          activeClassName="Active_link"
        >
          Cast
        </NavLink>
        <NavLink
          to={{
            pathname: `${url}/reviews`,
            state: { from: { location } },
          }}
          className="Navigation_link"
          activeClassName="Active_link"
        >
          Reviews
        </NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Route path={`${path}:movieId/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}:movieId/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </>
  );
}
