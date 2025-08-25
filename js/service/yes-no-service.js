'use strict';


function getJoke() {
    get('https://official-joke-api.appspot.com/random_joke', joke => {
        const elJoke = document.querySelector('.jokes-container')
        elJoke.innerHTML = `<p>${joke.setup}</p><p><strong>${joke.punchline}</strong></p>`
        elJoke.style.display = 'block'
    })
}

function getDog() {
    get('https://dog.ceo/api/breeds/image/random', dog => {
        const elDog = document.querySelector('.dogs-container')
        elDog.innerHTML = `<img src="${dog.message}" alt="Cute dog" style="max-width: 100%;">`
        elDog.style.display = 'block'
    })
}