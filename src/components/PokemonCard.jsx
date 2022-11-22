import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import colors from '../colors.json'

const PokemonCard = ({url}) => {

  const [pokemon, setPokemon] = useState({})

  useEffect(()=>{
    axios.get(url).then((res) => setPokemon(res.data))
  },[])

// -----------------Border color------------------------------------------------------------------------------
  const getBackground = ()=>{
    const background = colors.filter((e)=>{
      return e.type === pokemon.types?.[0].type.name
    })
    return background[0]?.background
  }

  const getBorder = ()=>{
    const border = colors.filter((e)=>{
      return e.type === pokemon.types?.[0].type.name
    })
    return border[0]?.border
  }

  const navigate = useNavigate();

  const goDetail = (id)=> {
    navigate(`/pokedex/${id}`)
  }

  return (
    <div onClick={()=> goDetail(pokemon.id)}>
      <div className='card' style={{background:getBackground(), border: `8px solid ${getBorder()}`}}>
        <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
        <div className='info'>
          <div>
            <h3 style={{fontSize:'25px'}}>{pokemon.name}</h3>
            <h3 style={{fontSize:'14px'}}>{pokemon.types?.[0].type.name}  {pokemon.types?.[1]?.type.name}</h3>
            <p style={{fontSize:'10px'}}>Type</p>
          </div>
          <div className='info-char'>
            <p><b>HP: </b><span style={{color: getBorder()}}>{pokemon.stats?.[0].base_stat}</span></p> 
            <p><b>Attack: </b><span style={{color: getBorder()}}>{pokemon.stats?.[1].base_stat}</span></p>
            <p><b>Defense: </b><span style={{color: getBorder()}}>{pokemon.stats?.[2].base_stat}</span></p> 
            <p><b>Speed: </b><span style={{color: getBorder()}}>{pokemon.stats?.[5].base_stat}</span></p>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default PokemonCard;