'use strict';

function showAnswer() {
    eraseAnswer()
    const url = 'https://yesno.wtf/api'
    const elAnswer = getAnswer()
    const elText = getText()
    const elJoke = getJoke()
    const elDog = getDog()
    get(url, res => {
        const answer = res.answer
        checkAnswer(answer,elText)
    })
}



function joke() {
    const elJoke = getJoke()
    get('https://official-joke-api.appspot.com/random_joke', joke => {
        const jokeSetup = joke.setup
        const jokePunchline = joke.punchline
        showJoke(elJoke, jokeSetup, jokePunchline)
    })
}

function dog() {
    const elDog = getDog()
    get('https://dog.ceo/api/breeds/image/random', dog => {
        const dogImage = dog.message
        showDog(elDog,dogImage)
    })
}

