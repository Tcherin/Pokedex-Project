import React from "react";
import "./PokedexList.css";
import PokemonCard from "./PokemonCard";

const PokedexList = ({ pokedex }) => {
  console.log(pokedex);

  const pokedexItems = pokedex.map((pokemon, index) => {
    return (
      <div>
        <PokemonCard pokemon={pokemon} key={index} />
      </div>
    );
  });

  return <div className="list-container">{pokedexItems}</div>;
};

export default PokedexList;
