import { useEffect, useState } from "react"
import Player from "./Player";


export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setPlayers(data))
  },[])
  return (
    <div className="card">
      <h3>Players: {players.length}</h3>
      {
        players.map(player=> <Player key={player.id} player={player}></Player>)
      }
    </div>
  )
}