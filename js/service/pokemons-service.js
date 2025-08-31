'use strict';

const STORAGE_KEY_POKEMONS = 'pokemons'
const gCachePokemons = loadFromStorage(STORAGE_KEY_POKEMONS) || {}

function initPokemons() {
    if (gCachePokemons.length) {
        gCachePokemons.forEach(pokemon => {
            showPokemons(pokemon.name, pokemon.weight, pokemon.imageUrl)
        })
        return
    }

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
    get(url, res => {
        const pokemons = []
        res.results.forEach(pokemon => {
            get(pokemon.url, res => {
                const name = res.name
                const weight = res.weight
                const imageUrl = res.sprites.front_default
                const fullPokemon = { name, weight, imageUrl }
                pokemons.push(fullPokemon)
                showPokemons(name, weight, imageUrl)
                saveToStorage(STORAGE_KEY_POKEMONS, pokemons)
                
            })
        })
    })
}

