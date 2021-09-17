import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <Link to='/'>Home Page</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/movies/:movieId'>Movie Details</Link>
            <Link to='/movies/:movieId/cast'>Cast</Link>
            <Link to='/movies/:movieId/reviews'>Reviews</Link>

           
        </nav>
    )
}

export default Navigation