import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({url}) => {

  const [pokemon, setPokemon] = useState({})

  useEffect(()=>{
    axios.get(url).then((res) => setPokemon(res.data))
  },[])

  //console.log(pokemon)

  const pokemonName = pokemon.name;

  //console.log(pokemonName)
  

  return (
    <Link to={`/pokedex/${pokemon.id}`}>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
      <h3>{pokemon.types?.[0].type.name} {pokemon.types?.[1]?.type.name}</h3>
      <p>Tipo</p>
    </Link>
  );
};

export default PokemonCard;