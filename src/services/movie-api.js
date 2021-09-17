

const BASE_URL = 'https://api.themoviedb.org/3'
const Api_key = '400aa3677b406a0de07f540af00d58ef'

async function fetchMovies(url = '', config = {}) {
    const response = await fetch(url, config)
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'))
    
}

export function fetchPopularMovie() {
    return fetchMovies(`${BASE_URL}/trending/get-trending`)

}
