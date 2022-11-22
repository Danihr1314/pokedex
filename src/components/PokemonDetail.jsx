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

  const getBackground = ()=>{
    const background = colors.filter((e)=>{
      return e.type === pokemon.types?.[0].type.name
    })
    return background[0]?.background
  }

  const type = [pokemon.types]
  const types = ()=>{
    for (let i=0; i <= type.length; i+1){
      if (i===2){
        return(
          <div>
            <p>{pokemon.types?.[0].type.name}</p>
            <p>{pokemon.types?.[1].type.name}</p>
          </div>
        )
      }else{
        return(
          <div>
            <p>{pokemon.types?.[0].type.name}</p>
          </div>
        )
      }
    }
  }

  return (
    <div className='poke-detail'>
      <NavBar/>
      <div style={{backgroundColor: getBackground()}}>
        <img id='image-title' src={image} alt="" />
        <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
        <h3># {pokemon.id}</h3>
        <h1>{pokemon.name}</h1>
        <p><span>Weight: </span>{pokemon.weight}</p>
        <p><span>Height: </span>{pokemon.height}</p>
        <h3>Type</h3>
        <p>
          {types()}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;