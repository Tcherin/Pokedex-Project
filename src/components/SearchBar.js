import React from 'react';

const SearchBar = ({findPokemon}) => {

    const onSearch = (event) => {
        findPokemon(event.target.value)
    }



    return ( 
        <div className='searchbar'>
        <input name="searchPokemon" onChange={onSearch}></input>
        </div>

     );
}
 
export default SearchBar;