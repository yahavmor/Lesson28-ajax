'use strict';


function initMovies() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=eb6c17a5d4e99a8645ef8d325261f6a7'
    const elMoviesContainer = getMoviesContainer()
    get(url, res => {
        const movies = res.genres
        showGenres(movies)
    })

}
function onShowDetails(id) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=eb6c17a5d4e99a8645ef8d325261f6a7&with_genres=${id}`
    get(url, res => {
        const details = res.results
        showDetails(details)
    })
}
