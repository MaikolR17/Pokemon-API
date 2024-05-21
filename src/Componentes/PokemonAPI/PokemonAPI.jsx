import React, { useState } from 'react';
import "./PokemonAPI.css"

const PokemonAPI = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const FetchPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(data => {
                const results = data.results;
                const pokemonDetails = results.map((pokemon, index) => ({
                    name: pokemon.name,
                    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                }));
                setPokemonList(pokemonDetails);
            })
            .catch(error => {
                console.error('Error fetching Pokemón', error);
            });
    };

    return (
        <div>
            <button onClick={FetchPokemon}> Fetch Pokemon </button>
            <ul>
                {pokemonList.map((pokemon, index) => (
                    <li key={index}>
                        <span> {pokemon.name} </span>
                        <img src={pokemon.imageUrl} alt={pokemon.name} />
                    </li>
                ))}
            </ul>
        </div>
    ) 
}

export default PokemonAPI;