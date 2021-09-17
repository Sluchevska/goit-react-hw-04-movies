import { useParams } from "react-router"
import { NavLink } from "react-router-dom"

export default function MovieDetailsPage() {
    const {movieId} = useParams()
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