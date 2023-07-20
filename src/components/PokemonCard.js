import React from "react";
import "./PokemonCard.css";

const Pokemon = ({ pokemon }) => {
  return (
    <div className="card-container">
      <div className="card">
        <li>{pokemon.name}</li>
        <div className="pokemon-image">
          <img src={pokemon.sprites.front_shiny} alt="pokemon"></img>
        </div>
        <li>Type: {pokemon["types"][0]["type"]["name"]}</li>
        <div>
          Top Moves: <li>{pokemon["moves"][0]["move"]["name"]}</li>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
