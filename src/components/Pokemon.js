import React from 'react';

const Pokemon = ({pokemon}) => {

    return ( 
        <div>
        <li>{pokemon.name}</li>
        <img src={pokemon.sprites.front_default}></img>
        </div>

     );

    }

     
 
export default Pokemon;