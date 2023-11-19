import React from "react";
import "./PokedexList.css";
import PokemonCard from "./PokemonCard";

const PokedexList = ({ pokedex }) => {
  return (
    <div className="list-container">
      {pokedex.map((pokemon, index) => (
        <div key={index}>
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokedexList;
