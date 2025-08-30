'use strict'
initPokemons()

function showPokemons(name, weight, imageUrl) {
    const elPokemonsContainer = document.querySelector('.pokemons-container')
     elPokemonsContainer.innerHTML += `
                    <div class="pokemon-card">
                        <h2>${name}</h2>
                        <h4>Weight: ${weight}</h4>
                        <img src="${imageUrl}" alt="${name}" />
                    </div>`

}

