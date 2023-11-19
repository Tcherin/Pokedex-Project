import React from "react";
import "./SearchBar.css";

const SearchBar = ({ findPokemon, searchedPokemon }) => {
  const onSearch = (event) => {
    findPokemon(event.target.value);
  };

  return (
    <form className="searchbar">
      <input
        name="searchPokemon"
        placeholder="Search em all!"
        onChange={onSearch}
      ></input>
    </form>
  );
};

export default SearchBar;
