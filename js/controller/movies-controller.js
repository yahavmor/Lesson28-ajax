'use strict';
showMovies()


function showMovies(count) {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=eb6c17a5d4e99a8645ef8d325261f6a7'
    const elMoviesContainer = document.querySelector('.movies-container')
    get(url, res => {
        const movies = res.genres
        movies.forEach(movie => {
        elMoviesContainer.innerHTML += `<div class="movie-card" onclick="onShowDetails('${movie.id}')">${movie.name}</div>`
        })
    })

}

function onShowDetails(id) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=eb6c17a5d4e99a8645ef8d325261f6a7&with_genres=${id}`
    const elDialog = document.querySelector('dialog')
    const elContent = document.querySelector('.dialog-content')
    elContent.innerHTML = '' 
    get(url, res => {
        const details = res.results
        details.forEach(detail => {
            elContent.innerHTML += `<div class="movie-title">${detail.original_title}</div>`
            elContent.innerHTML += `<div class="movie-overview">${detail.overview}</div>`
            elContent.innerHTML += `<img src="https://image.tmdb.org/t/p/w500${detail.backdrop_path}" />`     
        })
    })
    elDialog.showModal()
}


function closeDialog() {
    const elDialog = document.querySelector('dialog')
    elDialog.close()
}


