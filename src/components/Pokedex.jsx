import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import image from '../assets/pokedex-title.png';
import NavBar from './Nav';

const Pokedex = () => {

// -------------------------API request---------------------------------------------

  const userName = useSelector(state => state.name)
  const [pokemons, setPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);

  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154`)
    .then(res => setPokemons(res.data.results))

    axios.get('https://pokeapi.co/api/v2/type/')
      .then(res => setTypes(res.data.results));
  },[])

  const searchPokemon = () => {
    navigate(`/pokedex/${pokemonName.toLowerCase()}`)
  }

  const filterType = (e) => {
    const url = e.target.value;
    axios.get(url)
       .then(res => setPokemons(res.data.pokemon))
  }

// ----------------------Funcionalidad paginacion----------------------------------

  const [page, setPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(20);
  const lastIndex = page * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;
  const pokemonPaginated = pokemons.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(pokemons.length/pokemonsPerPage);

  const [numberOfPokemonsInPage, setNumberOfPokemonsInPage] = useState("");

  const numbers = [];
  for (let i=1; i<= totalPages; i++){
    numbers.push(i);
  }

  const pokemonsPerPageGo = ()=>{
    setPokemonsPerPage(Number(numberOfPokemonsInPage));
  }

  return (
    <div className='pokedex'>
      <NavBar/>
      <img id='image-title' src={image} alt="" />
      <p id='welcome'>
        <b style={{color:'#FE1936'}}>Welcome {userName},</b> here you can find your favourite pokemon
      </p>
{/*--------------------- Inputs ---------------------------------------------------------------------*/}
      <div className='inputs-pokedex'>
        <div className='search-pokemon'>
          <input 
            type="text" 
            placeholder='Search pokemon'
            onChange={e => setPokemonName(e.target.value)}
          />
          <button onClick={searchPokemon}><span></span>Search</button>
          <select onChange={filterType} name="" id="">
            {types.map((type)=>(
              <option 
                value={type.url} 
                key={type.url}
              >
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <div className='pokemons-page'>
          <input 
            type="text" 
            placeholder='Pokemons per page'
            onChange={e=> setNumberOfPokemonsInPage(e.target.value)}
          />
          <button onClick={pokemonsPerPageGo}><span></span>Go</button>
        </div>
      </div>
{/*---------------------------- Tarjetas ----------------------------------------*/}
      <ul>
        {pokemonPaginated.map((pokemon)=>(
            <PokemonCard 
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
        ))}
      </ul>
{/*-----------------------Paginacion ----------------------------*/}
      <div className='pagination'>
        <button 
          className='prev'
          onClick={()=> setPage(page-1)} 
          disabled={page === 1}
        >Prev
        </button>
        {numbers.map(number=> (
          <button key={number} onClick={()=> setPage(number)}>{number}</button>
        ))}
        <button
          className='next'
          onClick={()=> setPage(page+1)} 
          disabled={page === totalPages}
        >Next
        </button>
      </div>
    </div>
  );
};

export default Pokedex;