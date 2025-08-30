'use strict';

initMovies()

function showGenres(movies) {
    const elMoviesContainer = getMoviesContainer()
    movies.forEach(movie => {
        elMoviesContainer.innerHTML += `<div class="movie-card" onclick="onShowDetails('${movie.id}')">${movie.name}</div>`
    })
}



function getMoviesContainer() {
    return document.querySelector('.movies-container')
}


function showDetails(details) {
    const elDialog = getDialog()
    const elContent = getDialogContent()
    elContent.innerHTML = '' 
    details.forEach(detail => {
    elContent.innerHTML += `<div class="movie-title">${detail.original_title}</div>`
    elContent.innerHTML += `<div class="movie-overview">${detail.overview}</div>`
    elContent.innerHTML += `<img src="https://image.tmdb.org/t/p/w500${detail.backdrop_path}" />`     
    })
    elDialog.showModal()
    elDialog.scrollTop = 0
}

function getDialogContent() {
    return document.querySelector('.dialog-content')
}
function getDialog() {
    return document.querySelector('dialog')
}
function closeDialog() {
    const elDialog = document.querySelector('dialog')
    elDialog.close()
}


