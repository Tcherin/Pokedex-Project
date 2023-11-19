import React, { useState, useEffect } from "react";
import PokedexList from "../components/PokedexList";
import SearchBar from "../components/SearchBar";

const PokedexContainer = () => {
  const [pokedex, setPokedex] = useState(null);
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  useEffect(() => {
    getPokedexContents();
  }, []);

  const getPokedexContents = async () => {
    const allRequests = [];

    for (let i = 1; i <= 151; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      allRequests.push(data);
    }

    setPokedex(allRequests);
  };

  const findPokemon = (searchTerm) => {
    const foundPokemon = pokedex.filter((pokemon) => {
      return pokemon.name.includes(searchTerm);
    });
    setSearchedPokemon(foundPokemon);
  };

  return (
    <div className="pokedex">
      <h1>Build your own Pokedex!</h1>
      <div className="searchbar">
        <SearchBar
          findPokemon={findPokemon}
          searchedPokemon={searchedPokemon}
        />
      </div>
      {searchedPokemon && searchedPokemon.length > 0 ? (
        <PokedexList pokedex={searchedPokemon} />
      ) : null}
    </div>
  );
};

export default PokedexContainer;
