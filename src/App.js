import React from "react";

function Game({name}){
  console.log(name);
  return(
    <h1>Did you play {name}?</h1>
  );
}

const goty=[
  {
    name: "Red Death Redemption",
    rank: 2
  },
  {
    name: "JelDa",
    rank: 1
  },
  {
    name: "Persona 5 scremble",
    rank: 0
  }
];

function renderGame(){
  
}

function App() {
  return (
    <div>
      {goty.map( game => {return <Game name={game.name}></Game>})}
    </div>
  );
}

export default App;
