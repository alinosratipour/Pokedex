import React from "react";

const Logo = ({HandelClick}) =>{
// const logWhenClicked = () =>{
//  return  console.log("we are in logo component")
// }
//onClick ={logWhenClicked} 

  return(
    <header>
        <h1>pokedex App</h1>
      <img onClick={HandelClick} alt="pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
    </header>);
}

export default Logo;
