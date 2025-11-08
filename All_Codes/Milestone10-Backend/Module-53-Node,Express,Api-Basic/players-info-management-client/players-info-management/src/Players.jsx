import React, { use, useState } from "react";

const Players = ({ playersPromise }) => {
  const players = use(playersPromise);
  const [newPlayer, setNewPlayer] = useState(players)
  
  const handlePlayers = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.Name.value;
    const playingType = form.playingType.value;
    console.log({name, playingType})
    const newPlayers = {name, playingType}

    //? send new players to the server
    fetch('http://localhost:5000/players', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlayers)
    }).then(res=>res.json()).then(data => {
      console.log('after post data', data)
      setNewPlayer([...players, data])
      e.target.reset();
    })
  }

  return (
    <div>
      <h2>Players Length: {players.length}</h2>
      <div>
        <form onSubmit={handlePlayers}>
          <input type="text" name="Name" />
          <br />
          <input type="text" name="playingType" />
          <br />
          <button type="submit">Add Player</button>
        </form>
      </div>
      <div>
        {newPlayer.map((player) => (
          <p key={player.id}>
            {player.name} -- {player.playingType}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Players;
