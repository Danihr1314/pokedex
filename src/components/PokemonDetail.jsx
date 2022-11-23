import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './Nav';
import colors from '../colors.json';
import image from '../assets/pokedex-title.png';

const PokemonDetail = () => {

  const [pokemon,setPokemon] = useState({});

  const {id}= useParams();
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => setPokemon(res.data))
  },[])

  console.log(pokemon)
  
  return (
    <div className='poke-detail'>
      <NavBar/>
      <div>
        <img id='image-title' src={image} alt="" />
        <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
        <h3># {pokemon.id}</h3>
        <h1>{pokemon.name}</h1>
        <p><span>Weight: </span>{pokemon.weight}</p>
        <p><span>Height: </span>{pokemon.height}</p>
        <h3>Type</h3>
        <p>
          <div>
            <p>{pokemon.types?.[0].type.name}</p>
            <p>{pokemon.types?.[1]?.type.name ? pokemon.types?.[1]?.type.name : ''}</p>
          </div>
        </p>
        <h2>Stats</h2>
        <label htmlFor="HP">HP</label>
        <progress 
          id='HP'
          value={pokemon.stats?.[0].base_stat} 
          max='150'>
        </progress>
        <label htmlFor="attack">Attack</label>
        <progress 
          id='attack'
          value={pokemon.stats?.[1].base_stat} 
          max='150'>
        </progress>
        <label htmlFor="defense">Defense</label>
        <progress 
          id='defense'
          value={pokemon.stats?.[2].base_stat} 
          max='150'>
        </progress>
        <label htmlFor="speed">Speed</label>
        <progress 
          id='speed'
          value={pokemon.stats?.[5].base_stat} 
          max='150'>
        </progress>
      </div>
      <div>
        {}
      </div>
    </div>
  );
};

export default PokemonDetail;