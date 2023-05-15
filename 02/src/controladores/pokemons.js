const {listarPokemons, detalharPokemon} = require('utils-playground')

const pokemons = async(req, res)=>{
    const {pagina} = req.query;

const listaPokemons = await listarPokemons(pagina ?? 1)

return res.json(listaPokemons)


}



const pokemon = async(req, res)=>{
    const {idOuNome} = req.params;

    const pokemonEncontrado = await detalharPokemon(idOuNome);

    const {id, name, height, weight, base_experience, forms, abilities, specie} = pokemonEncontrado;

    return res.json({id, name, height, weight, base_experience, forms, abilities, specie})

    
}

module.exports = {
    pokemon,
    pokemons
}