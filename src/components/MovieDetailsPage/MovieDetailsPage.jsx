import { useEffect, useState } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';
import Cast from '../Cast/Cast';
import PageHeading from '../PageHeading/PageHeading';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
 
  const [movie, setMovie] = useState(null);
 

  useEffect(() => {
    MovieApi.fetchMovieById(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);
  // console.log(movie)
  
  return (
    <>
      <PageHeading text={`Movie ${movieId}`} />
      {movie && (
        <>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}width='100px' alt={movie.original_title} />
          <h2>{movie.original_title}</h2>
          <p>Score: <span>{movie.vote_average}</span></p>
          <h3>Overview:  </h3><span>{movie.overview}</span>
          <h3>Genres: </h3><span>{movie.genres.map(genre => (<li key={genre.id}>{genre.name }</li>))}</span>
        </>
      )}

      <nav>
        <h3>Additional information</h3>
      <NavLink
                to={`${url}/cast`}
                className="Navigation_link"
                activeClassName="Active_link"
              >
        Cast
        
        
        </NavLink>
         <NavLink
        to={`${url}/reviews`}
        className="Navigation_link"
        activeClassName="Active_link"
      >
        Reviews
      </NavLink>
      
      </nav>
      <Route path={`${path}:movieId/cast`} >
         <Cast movieId={movieId}/>
       </Route>
    
     
    </>
  );
}
