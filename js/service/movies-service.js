'use strict';

const STORAGE_KEY_MOVIES = 'movies'
const gCacheMovies = loadFromStorage(STORAGE_KEY_MOVIES) || []

const STORAGE_KEY_MOVIES_DETAILS = 'movies-details'
const gCacheMoviesDetails = loadFromStorage(STORAGE_KEY_MOVIES_DETAILS) || []



function initMovies() {
        if (gCacheMovies.length){
            showGenres(gCacheMovies)
            return
        }
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=eb6c17a5d4e99a8645ef8d325261f6a7'
    get(url, res => {
        const movies = res.genres
        showGenres(movies)
        saveToStorage(STORAGE_KEY_MOVIES, movies)
    })

}
function onShowDetails(id) {
        if (gCacheMoviesDetails.length){
            showDetails(gCacheMoviesDetails)
            return
        }
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=eb6c17a5d4e99a8645ef8d325261f6a7&with_genres=${id}`
    get(url, res => {
        const details = res.results
        showDetails(details)
        saveToStorage(STORAGE_KEY_MOVIES_DETAILS, details)
    })
}
