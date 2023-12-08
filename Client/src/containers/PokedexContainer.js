import React, { useState, useEffect } from "react";
import EvolutionSelector from "../components/EvolutionSelector";
import PokedexList from "../components/PokedexList";
import SearchBar from "../components/SearchBar";
import TypeSelector from "../components/TypeSelector";

const PokedexContainer = () => {
  const [pokedex, setPokedex] = useState(null);
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokedexContents();
  }, [selectedType]);

  const getPokedexContents = async () => {
    try {
      const allRequests = [];

      for (let i = 1; i <= 151; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        allRequests.push(data);
      }

      setPokedex(allRequests);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const findPokemon = (searchTerm) => {
    const foundPokemon = pokedex.filter((pokemon) => {
      if (selectedType) {
        return (
          pokemon.name.includes(searchTerm) &&
          (!selectedType ||
            pokemon.types.some((type) => type.type.name === selectedType))
        );
      }
      return pokemon.name.includes(searchTerm);
    });
    setSearchedPokemon(foundPokemon);
    console.log(foundPokemon);
  };

  // const findPokemonByType = () => {
  //   const newType = pokedex.filter((pokemon) => {
  //     return (
  //       !selectedType ||
  //       pokemon.types.some((type) => type.type.name === selectedType)
  //     );
  //   });

  //   setSearchedPokemon(newType);
  //   console.log(newType);
  // };

  return (
    <div>
      <h1>Build your own Pokedex!</h1>
      <div className="pokedex-content">
        {isLoading ? (
          <p className="loader">Loading...</p>
        ) : error ? (
          <p className="error-message">Error: {error.message}</p>
        ) : (
          <div className="pokedex">
            <div className="criteria-selectors">
              <div className="searchbar">
                <SearchBar
                  findPokemon={findPokemon}
                  searchedPokemon={searchedPokemon}
                />
              </div>
              <div className="type-selector">
                <div>
                  <TypeSelector
                    findPokemon={findPokemon}
                    types={types}
                    setTypes={setTypes}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                  />
                </div>
                <div>
                  <EvolutionSelector />
                </div>
              </div>
            </div>
            {searchedPokemon ? <PokedexList pokedex={searchedPokemon} /> : null}
          </div>
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
