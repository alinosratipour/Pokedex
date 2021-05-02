import React, {useEffect,useState} from "react";

function PokemonMoves(props) {

const [pokemonData, setOurData] = useState(null);
 useEffect(()=>{
 
 fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
 .then(res => res.json())
 .then(data => setOurData(data));
   
 } ,[props.pokemonId]);
  

   return pokemonData ? ( <div>

        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
     

   </div>): null;
  
   
    
  }


export default PokemonMoves;