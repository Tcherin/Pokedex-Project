import React from 'react';
import Pokemon from './Pokemon';

const PokedexList = ({pokedex}) => {

    console.log(pokedex)

    const pokedexItems = pokedex.map((pokemon, index) => {
        return <Pokemon pokemon={pokemon} key={index}/>
      })
  
    return (
      <div>
        <ul>
            {pokedexItems}
        </ul>
    </div>
    )
}
 
export default PokedexList;