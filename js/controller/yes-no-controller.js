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

function showAnswer() {
    const url = 'https://yesno.wtf/api'
    eraseAnswer()
    const elAnswer = document.querySelector('.answer-container')
    const elText = document.querySelector('.answer-text')
    const elJoke = document.querySelector('.jokes-container')
    const elDog = document.querySelector('.dogs-container')
    get(url, res => {
        elText.innerText = res.answer
        elAnswer.style.display = 'block'

        if (res.answer.toLowerCase() === 'yes') {
            getJoke()
        } else if (res.answer.toLowerCase() === 'no') {
            getDog()
        }
    })
}



function eraseAnswer() {    
    const elAnswer = document.querySelector('.answer-container')
    const elText = document.querySelector('.answer-text')
    const elJoke = document.querySelector('.jokes-container')
    const elDog = document.querySelector('.dogs-container')

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