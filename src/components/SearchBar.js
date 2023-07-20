import React from 'react';

const SearchBar = ({findPokemon}) => {

    const onSearch = (event) => {
            findPokemon(event.target.value)
    }



    return ( 
        <form className='searchbar'>
        <input name="searchPokemon" placeholder='Search em all!' onChange={onSearch}></input>
        </form>

     );
}
 
export default SearchBar;