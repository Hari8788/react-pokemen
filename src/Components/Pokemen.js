import React from 'react';
import { useState, useEffect } from 'react';

const Pokemen = () => {
  const pokemendata = () => {
    return fetch(
      'https://randohttps://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.jsonmuser.me/api/'
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    pokemendata();
  }, []);
  return <div></div>;
};
export default Pokemen;
