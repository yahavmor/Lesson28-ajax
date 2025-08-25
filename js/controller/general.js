'use strict';

function showSection(elSection) {
    const sectionName = elSection.textContent.trim()
    const sections = document.querySelectorAll('section')

    sections.forEach(section => section.classList.add('hidden'))
    switch (sectionName) {
        case 'adress-book':
            document.querySelector('.address-book').classList.remove('hidden')
            initRobots()
            break
        case 'yes-no':
            document.querySelector('.yes-no').classList.remove('hidden')
            break
        case 'movies':
            document.querySelector('.movies').classList.remove('hidden')
            break
        case 'pokemones':
            document.querySelector('.pokemones').classList.remove('hidden')
            break
    }
}
