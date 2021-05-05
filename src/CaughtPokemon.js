import React,{useState} from "react";
const CaughtPokemon = () => {


  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const [caught, setCaught] = useState([]);
  const [count, setCount] = useState(0);

  const catchPokemonInput = (event) =>{
    if(pokemonNameInput === ""){
      event.preventDefault();
    }else{
      setCaught(caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    } 
}

const catchPokemon = ()=>{
  
  const pokemon= ["Spearow", "Eevee", "Pikachu","Butterfree"];
  let randomItem = pokemon[Math.floor(Math.random()*pokemon.length)];
  setCaught(caught.concat(randomItem ));
  setCount(count + 1);

}

const handleInputChange = (event) =>{
     setPokemonNameInput(event.target.value);
  
}


  const date = new Date().toLocaleDateString();
    return (
   <div className="container">
  <p>Caught {count} Pokemon on {date}</p>;
<ul className="random" >
    {caught.map((item,index) =>{
      return(
        <li key={index}>{item}</li>
      );
    })}
  </ul>
  <input type="text" value={pokemonNameInput} onChange={handleInputChange}  />
  <button  onClick={catchPokemonInput}>Pokemon Input</button>
  <button  onClick={catchPokemon}>Random Pokemon</button>
  </div>

    );
  
};

export default CaughtPokemon;