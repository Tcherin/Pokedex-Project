import React, {useState, useEffect} from 'react';
import PokedexList from '../components/PokedexList';
import SearchBar from '../components/SearchBar';


const PokedexContainer = () => {

    const [pokedex, setPokedex] = useState(null)
    const [searchedPokemon, setSearchedPokemon] = useState(null)

    useEffect(() => {
        getPokedexContents()
    }, [])
  
    const getPokedexContents = () => {
        const allRequests = []
        for(let i = 1; i <= 151; i++){
            const newFetch = fetch("https://pokeapi.co/api/v2/pokemon/" + i)
            .then((response) => response.json())
            allRequests.push(newFetch)
        }
        console.log(allRequests);
        Promise.all(allRequests)
        .then((data) => setPokedex(data))
        
    }

    const findPokemon = (searchTerm) => {
        const foundPokemon = [];
        for (let pokemon of pokedex) {
            if (pokemon.name.includes(searchTerm)) {
                foundPokemon.push(pokemon)
            }
        }
        setSearchedPokemon(foundPokemon)
    }

    return ( 
        <div>
            <h1>Pokemon Generator</h1>
            <div className='pokedex-container'>
            <SearchBar findPokemon={findPokemon}/>
            {searchedPokemon ? <PokedexList pokedex={searchedPokemon}/> : null}
            </div>
        </div>

     );
}
 
export default PokedexContainer;