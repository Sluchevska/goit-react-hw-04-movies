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
               
              
            </li>
          ))}
        </ul>
          )}
          <Route path={`${path}/movieId/cast`}></Route>
      </>
      
  );
}
