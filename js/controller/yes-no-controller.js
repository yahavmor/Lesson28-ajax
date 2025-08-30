'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const elInput = document.querySelector('.ask-input')
    elInput.addEventListener('input', () => {
        const question = elInput.value
        if (question.length >= 3 && question.endsWith('?')) {
            showAnswer()
        }
    })
})





function eraseAnswer() {    
    const elAnswer = getAnswer()
    const elText = getText()
    const elJoke = getJoke()
    const elDog = getDog()

    elText.innerText = ''
    elJoke.innerHTML = ''
    elDog.innerHTML = ''

    elJoke.style.display = 'none'
    elDog.style.display = 'none'
}
function focusInput() {
    const elInput = document.querySelector('.ask-input')
    elInput.value = ''
    elInput.focus()
}
function getAnswer() {
    return document.querySelector('.answer-container')
}
function getText() {
    return document.querySelector('.answer-text')
}
function getJoke() {
    return document.querySelector('.jokes-container')
}
function getDog() {
    return document.querySelector('.dogs-container')
}   

function checkAnswer(answer,elText) {
    elText.innerText = answer
    if (answer.toLowerCase() === 'yes') {
            joke()
    } else if (answer.toLowerCase() === 'no') {
            dog()
    }
}
function showJoke(joke, setup, punchline) {
    joke.innerHTML = `<p>${setup}</p><p><strong>${punchline}</strong></p>`
    joke.style.display = 'block'
}
function showDog(dog,dogImage) {
    dog.innerHTML = `<img src="${dogImage}" alt="Cute dog">`
    dog.style.display = 'block'
}