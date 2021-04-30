import React from "react";


const BestPokemon = (props) => {
  
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((item,index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokemon;
