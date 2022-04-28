import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pokedex from './Components/Pokedex';
// import Topheader from './Components/Topheader';
import './style.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
      )
      .then((res) => {
        // console.log('data', JSON.stringify(res.data));
        let listData = res.data.pokemon;
        setPokemonList(listData);
      })
      .then((error) => {
        console.log('error', error);
      });
  }, []);
  return (
    <div>
      {pokemonList &&
        pokemonList.length > 0 &&
        pokemonList.map((list) => {
          return <Pokedex key={list.id} poemonData={list} />;
        })}
    </div>
  );
};

export default App;
