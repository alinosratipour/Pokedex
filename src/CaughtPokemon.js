import React,{useState} from "react";
const CaughtPokemon = () => {

  const [caught, setCaught] = useState([]);
  let [count, setCount] = useState(0);
const catchPokemon = () =>{
  const months = ["Spearow", "Eevee", "Pikachu", "Butterfree"];
  let randomItem = months[Math.floor(Math.random()*months.length)];
  setCaught(caught.concat(randomItem));
  setCount(count + 1);
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

  <button  onClick={catchPokemon}>click me</button>
  
  </div>

    );
  
};

export default CaughtPokemon;