import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';
import image from '../assets/pokedex-title.png'

const InputName = () => {

  const [userName, setUserName]= useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enterName=()=>{
    dispatch(changeName(userName));
    navigate('/pokedex');
  }

  return (
    <div className='input-name'>
      <img src={image} alt="" />
      <h1>Hi trainer!</h1>
      <h3>Give me your name to start</h3>
      <div>
        <input 
          placeholder='your name here...'
          type="text"
          onChange={e => setUserName(e.target.value)}
          value={userName}
        />
        <button onClick={enterName}>Start</button>
      </div>
    </div>
  );
};

export default InputName;