import React, { useState, useEffect } from "react";
import EvolutionSelector from "../components/EvolutionSelector";
import PokedexList from "../components/PokedexList";
import SearchBar from "../components/SearchBar";
import TypeSelector from "../components/TypeSelector";

const PokedexContainer = () => {
  const [pokedex, setPokedex] = useState(null);
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New state for loading
  const [error, setError] = useState(null); // New state for error handling

  useEffect(() => {
    getPokedexContents();
  }, []);

  const getPokedexContents = async () => {
    try {
      const allRequests = [];

      for (let i = 1; i <= 151; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        allRequests.push(data);
      }

      setPokedex(allRequests);
      setIsLoading(false); // Set loading to false when data is loaded
    } catch (error) {
      setError(error); // Set error if there is an issue fetching data
      setIsLoading(false); // Set loading to false in case of an error
    }
  };

  const findPokemon = (searchTerm) => {
    const foundPokemon = pokedex.filter((pokemon) => {
      return pokemon.name.includes(searchTerm);
    });
    setSearchedPokemon(foundPokemon);
    console.log(foundPokemon);
  };

  return (
    <div className="pokedex">
      <h1>Build your own Pokedex!</h1>
      <div className="criteria-selectors">
        <div className="searchbar">
          <SearchBar
            findPokemon={findPokemon}
            searchedPokemon={searchedPokemon}
          />
        </div>
        <div className="type-selector">
          <div>
            <TypeSelector />
          </div>
          <div>
            <EvolutionSelector />
          </div>
        </div>
      </div>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <>
            {searchedPokemon ? <PokedexList pokedex={searchedPokemon} /> : null}
          </>
        )}
      </div>
    </div>
  );
};

export default PokedexContainer;

// import React, { useState, useEffect } from "react";
// import PokedexList from "../components/PokedexList";
// import SearchBar from "../components/SearchBar";

// const PokedexContainer = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [pokedex, setPokedex] = useState(null);
//   const [searchedPokemon, setSearchedPokemon] = useState(null);

//   useEffect(() => {
//     getPokedexContents();
//   }, []);

//   const getPokedexContents = async () => {
//     const allRequests = [];

//     for (let i = 1; i <= 151; i++) {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//       const data = await response.json();
//       allRequests.push(data);
//     }

//     setPokedex(allRequests);
//   };

//   const findPokemon = (searchTerm) => {
//     const foundPokemon = pokedex.filter((pokemon) => {
//       return pokemon.name.includes(searchTerm);
//     });
//     setSearchedPokemon(foundPokemon);
//     console.log(foundPokemon);
//   };

//   return (
//     <div className="pokedex">
//       <h1>Build your own Pokedex!</h1>
//       <div className="searchbar">
//         <SearchBar
//           findPokemon={findPokemon}
//           searchedPokemon={searchedPokemon}
//         />
//       </div>
//       {isLoading ? <div>Loading...</div> : null}
//       {error ? <div>The pokemon could not be fetched</div> : null}
//       {searchedPokemon ? <PokedexList pokedex={searchedPokemon} /> : null}
//     </div>
//   );
// };

// export default PokedexContainer;
