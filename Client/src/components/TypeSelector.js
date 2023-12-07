import React, { useEffect } from "react";
import "./TypeSelector.css";

const TypeSelector = ({
  findPokemon,
  types,
  setTypes,
  selectedType,
  setSelectedType,
}) => {
  useEffect(() => {
    fetchTypes();
  }, []);

  const fetchTypes = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/type/");
      const data = await response.json();
      setTypes(data.results.map((type) => type.name));
    } catch (error) {
      console.error("Error fetching Pokémon types", error);
    }
  };

  const handleTypeChange = (event) => {
    const newType = event.target.value;
    setSelectedType(newType);
    findPokemon(newType);
  };

  console.log(types);

  return (
    <>
      <select id="typeSelect" value={selectedType} onChange={handleTypeChange}>
        <option value="">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </>
  );
};

export default TypeSelector;
