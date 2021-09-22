import { useEffect, useState } from 'react';
import * as MovieApi from '../../services/movie-api';
import { AuthorName, Container } from './Reviews.styled'


export default function Reviews({movieId}) {
 
  const [reviews, setReviews] = useState([]);
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
      {reviews.length===0 && (
        <p>No reviews yet</p>
      )}
         
      </Container>
      
  );
}
