import { useEffect, useState } from 'react';
import { Route, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';
import { AuthorName, Container } from './Reviews.styled'


export default function Reviews({movieId}) {
 
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    MovieApi.fetchMovieReviews(movieId).then(data => {
      setReviews(data.results);
    });
   
  }, [movieId]);

  return (
    <Container>
      {reviews && (
        <>
          {reviews.map(review => (
              <li key={review.id}>
                 
                  <AuthorName>{review.author}</AuthorName>
              <p>{review.content}</p>
            
              
            </li>
          ))}
        </>
      )}
      {!reviews.length && (
        <p>No reviews yet</p>
      )}
         
      </Container>
      
  );
}
