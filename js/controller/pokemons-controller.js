'use strict'

showPokemons()

function showPokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
    const elPokemonsContainer = document.querySelector('.pokemons-container')

    get(url, res => {
        const pokemons = res.results
        pokemons.forEach(pokemon => {
            get(pokemon.url, res => {
                const name = res.name
                const weight = res.weight
                const imageUrl = res.sprites.front_default 

                elPokemonsContainer.innerHTML += `
                    <div class="pokemon-card">
                        <h2>${name}</h2>
                        <h4>Weight: ${weight}</h4>
                        <img src="${imageUrl}" alt="${name}" />
                    </div>`
            })
        })
    })
}

