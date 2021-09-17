import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom"
import * as MovieApi from '../../services/movie-api';

export default function MovieDetailsPage() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
       MovieApi.fetchMovieById(movieId).then(setMovie) 
    },[movieId])
    console.log(movieId)
    return (
        <>
            <h2>Movie :{movieId}</h2>

             <NavLink to="/movies/:movieId/cast"
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
    )
}