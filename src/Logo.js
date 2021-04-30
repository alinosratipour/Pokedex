import React from "react";

const Logo = ({HandelClick}) =>{

  return(
    <header>
        <h1 className="title">pokedex App</h1>
      <img onClick={HandelClick} alt="pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
    </header>);
}

export default Logo;
