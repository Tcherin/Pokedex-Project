import React from "react";
import "./SearchBar.css";

const SearchBar = ({ findPokemon }) => {
  const onSearch = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const searchTerm = event.target.searchPokemon.value;
    findPokemon(searchTerm);
  };

  return (
    <form className="searchbar" onSubmit={onSearch}>
      <input name="searchPokemon" placeholder="Search em all!"></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

// import React from "react";
// import "./SearchBar.css";

// const SearchBar = ({ findPokemon, searchedPokemon }) => {
//   const onSearch = (event) => {
//     findPokemon(event.target.value);
//   };

//   return (
//     <form className="searchbar">
//       <input
//         name="searchPokemon"
//         placeholder="Search em all!"
//         onChange={onSearch}
//       ></input>
//     </form>
//   );
// };

// export default SearchBar;
