import { useEffect, useState } from 'react';
import { Route, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';

export default function Reviews({movieId}) {
  const { url, path } = useRouteMatch();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    MovieApi.fetchMovieReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);
console.log(reviews)
  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => (
              <li key={review.id}>
                  {/* <img src={`https://image.tmdb.org/t/p/w500/${castItem.profile_path}`}  alt={castItem.name} height='100px' />
                  <h3>{castItem.name}</h3>
                  <p>Character: { castItem.character}</p> */}
              
            </li>
          ))}
        </ul>
          )}
         
      </>
      
  );
}
