import { useEffect, useState } from "react"
import * as MovieApi from '../../services/movie-api'
// import { fetchPopularMovie } from "../../services/movie-api"

export default function HomePage() {
    const [movies, setMovies] = useState(null)
    useEffect(() => {
    MovieApi.fetchPopularMovie().then(setMovies)
},[])

    return (
        <h1>Its home page</h1>
    )
}