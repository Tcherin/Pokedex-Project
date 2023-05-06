import React from 'react';

const Pokemon = ({pokemon}) => {

    return ( 
        <div className='pokemon'>
        <li>{pokemon.name}</li>
        <div className='pokemon-image'>
        <img src={pokemon.sprites.front_shiny}></img>
        </div>
        <li>Type: {pokemon['types'][0]['type']['name']}</li>
            <div className='move'>
                Top Moves: <li>{pokemon['moves'][0]['move']['name']}</li>
            </div>
        </div>

     );

    }

     
 
export default Pokemon;