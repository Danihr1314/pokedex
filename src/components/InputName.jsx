import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';

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
      <h1>Input name</h1>
      <input 
        type="text"
        onChange={e => setUserName(e.target.value)}
        value={userName}
      />
      <button onClick={enterName}>Name</button>
    </div>
  );
};

export default InputName;