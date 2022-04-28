import React from 'react';
import '../style.css';
const Pokedex = (props) => {
  console.log('props card==>', props.poemonData);
  return (
    <div className="cardsection1">
      <div className="card-container1">
        <div className="card1">
          <div className="bg-pokeball"></div>
          <span className="pokemon-id">{props.poemonData.id}</span>

          <div className="card-title">
            <h2>{props.poemonData.name}</h2>
          </div>

          <div className="pokemon-image">
            <img alt="name" src={props.poemonData.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
