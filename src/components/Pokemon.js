import React from 'react';

const Pokemon = ({pokemon}) => {

    return ( 
        <div className='pokemon'>
        <li>{pokemon.name}</li>
        <img src={pokemon.sprites.front_shiny}></img>
            <div className='move'>
                <li>{pokemon['moves'][0]['move']['name']}</li>
            </div>
        </div>

     );

    }

     
 
export default Pokemon;