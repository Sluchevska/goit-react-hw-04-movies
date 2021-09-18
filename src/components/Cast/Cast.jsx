import { useEffect, useState } from 'react';
import { Route, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';

export default function Cast({movieId}) {
  const { url, path } = useRouteMatch();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    MovieApi.fetchCastMovie(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);
console.log(cast)
  return (
    <>
      {cast && (
        <ul>
          {cast.map(castItem => (
              <li key={castItem.id}>
                  <img src={`https://image.tmdb.org/t/p/w500/${castItem.profile_path}`}  alt={castItem.name} height='100px' />
                  <h3>{castItem.name}</h3>
                  <p>Character: { castItem.character}</p>
              
            </li>
          ))}
        </ul>
          )}
         
      </>
      
  );
}
