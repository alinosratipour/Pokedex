import React from "react";
import Logo  from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
import "./App.css";


function App(){

  const logWhenClicked = () =>{
 return  console.log("we are in logo component")
}

 const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div  >
      <Logo HandelClick={logWhenClicked} />
      <BestPokemon abilities = {abilities} />
      <CaughtPokemon  />
      <PokemonMovesSelector/>
      <PokemonCity/>

    </div>
  );
  
  }
export default App;
