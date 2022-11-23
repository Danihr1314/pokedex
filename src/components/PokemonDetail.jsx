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

  return (
    <div className='poke-detail'>
      <NavBar/>
      <img id='image-title' src={image} alt="" />
      <div className='pokemon'>
        <div className='first-details'>
          <div className='title'>
            <div style={{background: getBackground()}}><img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" /></div>
            <h3># {pokemon.id}</h3>
            <h1>{pokemon.name}</h1>
            <p><span>Weight: </span>{pokemon.weight}</p>
            <p><span>Height: </span>{pokemon.height}</p>
          </div>
          <div className='type-abilities'>
            <div>
              <h3>Type</h3>
                <div className='types'>
                  <p>{pokemon.types?.[0].type.name}</p>
                  <p>{pokemon.types?.[1]?.type.name ? pokemon.types?.[1]?.type.name : ''}</p>
                </div>
            </div>
            <div>
              <h3>Abilities</h3>
              <div className='abilities'>
                <p>{pokemon.abilities?.[0].ability.name}</p>
                <p>{pokemon.abilities?.[1].ability.name}</p>
              </div>
            </div>
          </div>
          <h2>Stats</h2>
          <div className='progress-bar'>
            <label htmlFor="HP">HP: <span>{pokemon.stats?.[0].base_stat}/150</span></label>
            <progress 
              style={{color: getBackground()}}
              id='HP'
              value={pokemon.stats?.[0].base_stat} 
              max='150'>
            </progress>
            <label htmlFor="attack">Attack: <span>{pokemon.stats?.[1].base_stat}/150</span></label>
            <progress 
              id='attack'
              value={pokemon.stats?.[1].base_stat} 
              max='150'>
            </progress>
            <label htmlFor="defense">Defense: <span>{pokemon.stats?.[2].base_stat}/150</span></label>
            <progress 
              id='defense'
              value={pokemon.stats?.[2].base_stat} 
              max='150'>
            </progress>
            <label htmlFor="speed">Speed: <span>{pokemon.stats?.[5].base_stat}/150</span></label>
            <progress 
              id='speed'
              value={pokemon.stats?.[5].base_stat} 
              max='150'>
            </progress>
          </div>
        </div>
        <div className='second-details'>
          <h2>Movements</h2>
          <div className='poke-moves'>
            {pokemon.moves?.map(movements =>(
              <div key={movements.move.url}>
                <p>{movements.move.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;