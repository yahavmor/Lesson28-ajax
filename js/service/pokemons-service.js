
function initPokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20'

    get(url, res => {
        const pokemons = res.results
        pokemons.forEach(pokemon => {
            get(pokemon.url, res => {
                const name = res.name
                const weight = res.weight
                const imageUrl = res.sprites.front_default 
                showPokemons(name, weight, imageUrl)       
            })
        })
    })
}