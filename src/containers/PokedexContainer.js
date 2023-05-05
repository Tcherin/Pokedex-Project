import React, {useState, useEffect} from 'react';
import PokedexList from '../components/PokedexList';


const PokedexContainer = () => {

    const [pokedex, setPokedex] = useState(null)

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

    return ( 

        <>
        <h1>PokedexContainer</h1>
        {pokedex ? <PokedexList pokedex={pokedex}/> : null}
        </>

     );
}
 
export default PokedexContainer;