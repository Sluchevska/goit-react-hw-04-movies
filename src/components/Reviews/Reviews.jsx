import { useEffect, useState } from 'react';
import { Route, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';

export default function Reviews({movieId}) {
 
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
                 
                  <p>{review.author}</p>
                  <p>{ review.content}</p>
              
            </li>
          ))}
        </ul>
          )}
         
      </>
      
  );
}
