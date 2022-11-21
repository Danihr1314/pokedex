import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

  const [pokemon,setPokemon] = useState({});

  const {id}= useParams();
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => setPokemon(res.data))
  },[])

  console.log(pokemon)

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
    </div>
  );
};

export default PokemonDetail;