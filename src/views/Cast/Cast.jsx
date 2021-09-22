import { useEffect, useState } from 'react';
import { Route, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';
import defaultImg from '../../DefaultsImg/PngItem_1503945.png';
import { Container, ActorCard, Img } from './Cast.styled';

 export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    MovieApi.fetchCastMovie(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <>
      {cast && (
        <Container>
          {cast.map(castItem => (
            <ActorCard key={castItem.id}>
              <Img
                src={
                  castItem.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${castItem.profile_path}`
                    : defaultImg
                }
                alt={castItem.name}
                height="100px"
              />
              <h3>{castItem.name}</h3>
              <p>Character: {castItem.character}</p>
            </ActorCard>
          ))}
        </Container>
      )}
    </>
  );
}


