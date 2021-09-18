import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';
import PageHeading from '../PageHeading/PageHeading';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
 
  const [movie, setMovie] = useState(null);
 

  useEffect(() => {
    MovieApi.fetchMovieById(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);
  console.log(movie)
  
  return (
    <>
      <PageHeading text={`Movie ${movieId}`} />
      {movie && (
        <>
          <img src={movie.poster_path} alt={movie.original_title} />
          <h2>{movie.original_title}</h2>
          <p>Score: <span>{movie.vote_average}</span></p>
          <h3>Overview:  </h3><span>{movie.overview}</span>
          <h3>Genres: </h3><span>{movie.genres.map(genre => (<li key={genre.id}>{genre.name }</li>))}</span>
        </>
      )}

      <NavLink
        to="/movies/:movieId/cast"
        className="Navigation_link"
        activeClassName="Active_link"
      >
        Cast
      </NavLink>
      <NavLink
        to="/movies/:movieId/reviews"
        className="Navigation_link"
        activeClassName="Active_link"
      >
        Reviews
      </NavLink>
    </>
  );
}
