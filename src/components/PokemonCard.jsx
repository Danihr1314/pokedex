import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({url}) => {

  const [pokemon, setPokemon] = useState({})

  useEffect(()=>{
    axios.get(url).then((res) => setPokemon(res.data))
  },[])

  console.log(pokemon)
// -----------------Border color------------------------------------------------------------------------------
  /* const type = pokemon.types?.[0].type.name;

  const ChangeBorder = ()=> {
    if (type===)
  } */

  /* switch (type) {
    case 'grass':
      return(
        <Link to={`/pokedex/${pokemon.id}`}>
        <div className='card' style={{border:'2px solid #b4dbb8'}}>
       <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
          <h3>{pokemon.types?.[0].type.name} {pokemon.types?.[1]?.type.name}</h3>
          <p>Type</p>
        </div>
        <div>
          <p>HP</p> 
          <h3>{pokemon.stats?.[0].base_stat}</h3>
          <p>Attack</p>
          <h3>{pokemon.stats?.[1].base_stat}</h3>
        </div>
        <div>
          <p>Defense</p> 
          <h3>{pokemon.stats?.[2].base_stat}</h3>
          <p>Speed</p>
          <h3>{pokemon.stats?.[5].base_stat}</h3>
        </div> 
      </div> 
      </Link>
      )
      break;
    case 'normal':
      return(
        <Link to={`/pokedex/${pokemon.id}`}>
          <div className='card' style={{border:'2px solid #905e69'}}>
           <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
            <h3>{pokemon.types?.[0].type.name} {pokemon.types?.[1]?.type.name}</h3>
            <p>Type</p>
          </div>
          <div>
            <p>HP</p> 
            <h3>{pokemon.stats?.[0].base_stat}</h3>
            <p>Attack</p>
            <h3>{pokemon.stats?.[1].base_stat}</h3>
          </div>
          <div>
            <p>Defense</p> 
            <h3>{pokemon.stats?.[2].base_stat}</h3>
            <p>Speed</p>
            <h3>{pokemon.stats?.[5].base_stat}</h3>
          </div> 
        </div> 
      </Link>
      )
      break;
    case 'fighting':
      return(
        <Link to={`/pokedex/${pokemon.id}`}>
          <div className='card' style={{border:'2px solid #bb4c2f'}}>
           <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
            <h3>{pokemon.types?.[0].type.name} {pokemon.types?.[1]?.type.name}</h3>
            <p>Type</p>
          </div>
          <div>
            <p>HP</p> 
            <h3>{pokemon.stats?.[0].base_stat}</h3>
            <p>Attack</p>
            <h3>{pokemon.stats?.[1].base_stat}</h3>
          </div>
          <div>
            <p>Defense</p> 
            <h3>{pokemon.stats?.[2].base_stat}</h3>
            <p>Speed</p>
            <h3>{pokemon.stats?.[5].base_stat}</h3>
          </div> 
        </div> 
      </Link>
      )
      break;
    case 'flying':
      console.log('flying')
      break;
    case 'poison':
      console.log('poison')
      break;
    case 'ground':
      console.log('ground')
      break;
    case 'rock':
      console.log('rock')
      break;
    case 'bug':
      console.log('bug')
      break;
    case 'ghost':
      console.log('ghost')
      break;
    case 'steel':
      console.log('steel')
      break;
    case 'fire':
      return (
        <div></div>
      )
      break;
    case 'water':
     console.log('water')
      break;
    case 'electric':
      console.log('electric')
      break;
    case 'psychic':
      console.log('psychic')
      break;
    case 'ice':
      console.log('ice')
      break;
    case 'dragon':
      console.log('dragon')
      break;
    case 'dark':
      console.log('dark')
      break;
    case 'fairy':
      console.log('fairy')
      break;
    case 'unknown':
      console.log('unknown')
      break;
    case 'shadow':
      console.log('shadow')
      break;
    } */

  return (
    <Link to={`/pokedex/${pokemon.id}`}>
      <div className='card'>
       <div>
          <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
          <h1>{pokemon.name}</h1>
          <h3>{pokemon.types?.[0].type.name} {pokemon.types?.[1]?.type.name}</h3>
          <p>Type</p>
        </div>
        <div>
          <p>HP</p> 
          <h3>{pokemon.stats?.[0].base_stat}</h3>
          <p>Attack</p>
          <h3>{pokemon.stats?.[1].base_stat}</h3>
        </div>
        <div>
          <p>Defense</p> 
          <h3>{pokemon.stats?.[2].base_stat}</h3>
          <p>Speed</p>
          <h3>{pokemon.stats?.[5].base_stat}</h3>
        </div> 
      </div>  
    </Link>
  );
};

export default PokemonCard;