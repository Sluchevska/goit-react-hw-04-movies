import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import * as MovieApi from '../../services/movie-api'


export default function HomePage() {
    const [movies, setMovies] = useState(null)
    useEffect(() => {
        MovieApi.fetchPopularMovie().then(data => { setMovies(data.results) })
},[])

    return (
        <>
            <h1>Popular movies</h1>
            {movies && movies.map(movie =>
                <li key={movie.id}>
                    <Link to={`/movies/${movie.original_title}`}>
                    {movie.original_title}
                    </Link>
                    </li>

            )}
            </>
    )
}