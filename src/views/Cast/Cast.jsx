import { useEffect, useState } from 'react';
import { Route, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';
import defaultImg from '../../DefaultsImg/PngItem_1503945.png';

export default function Cast({movieId}) {
 
  const [cast, setCast] = useState(null);
  useEffect(() => {
    MovieApi.fetchCastMovie(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);
// console.log(cast)
  
//   const makeImgSrc = (path, defaultImg) => {
//   return cast.poster_path
//     ? `https://image.tmdb.org/t/p/w500/${path}`
//     : defaultImg;
// };

    return (
      
    <>
      {cast && (
        <ul>
          {cast.map(castItem => (
              <li key={castItem.id}>
                  {/* {castItem.profile_path===null&& <img src = '../../DefaultsImg/PngItem_1503945.png' alt='default img'/>} */}
                  {/* <img src={`https://image.tmdb.org/t/p/w500/${castItem.profile_path}`}  alt={castItem.name} height='100px' /> */}
              <img src={castItem.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${castItem.profile_path}`
                    : defaultImg}  alt={castItem.name} height='100px' />    
              <h3>{castItem.name}</h3>
                  <p>Character: { castItem.character}</p>
              
            </li>
          ))}
        </ul>
          )}
         
      </>
      
  );
}
