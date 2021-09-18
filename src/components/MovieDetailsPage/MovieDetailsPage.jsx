import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';
import PageHeading from '../PageHeading/PageHeading';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  // const params = useParams();
  // console.log({params});
  const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     MovieApi.fetchMovieById(movieId).then(data => {
//       setMovie(data);
//     });
//   }, [movieId]);
//   console.log(movieId);
  return (
    <>
      <PageHeading text={`Movie ${movieId}`}/>

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
