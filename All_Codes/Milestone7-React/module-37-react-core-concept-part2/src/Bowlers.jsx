import { useState } from "react"


export default function Bowlers({name}) {
  const [ball, setBall] = useState(0);
  const [countBall, setCountBall] = useState(0);
  const handleNoBall1 = () => {
    setBall(1);
    setCountBall(countBall+1)
  }
  const handleNoBall2 = () => {
    setBall(2);
    setCountBall(countBall+1)
  }
  const handleNoBall3 = () => {
    setBall(3);
    setCountBall(countBall+1)
  }
  const handleNoBall4 = () => {
    setBall('No ball');
  }
  const handleNoBall5 = () => {
    setBall(5);
    setCountBall(countBall+1)
  }
  const handleNoBall6 = () => {
    setBall(6);
    setCountBall(countBall+1)
  }
  const handleNoBall7 = () => {
    setBall(7);
    setCountBall(countBall+1)
  }
  const ballingStyle = {
    border:'2px solid green',
    borderRadius:'10px',
    padding:'10px',
  }
  return (
    <div style={ballingStyle}>
      <h3>Bangladeshi Bowler: {name}</h3>
      <p>This Over: Ball-No: {ball}</p>
      <p>Ball Count: {countBall}</p>
      {/* {
        (()=>setBowl(bowl+1)) >= 6 && <p>The Over is Done</p>
      } */}
      {
        countBall >= 6 && <p>The Over is Done</p>
      }
      {/* {
        bowl? <p><small>setBowl(bowl+1)</small></p> : null
      } */}
      {/* {
        ball === 4 || ball >= 6 && <p>The Over is Done</p>
      } */}
      <button onClick={handleNoBall1}>Ball-1</button>
      <button onClick={handleNoBall2}>Ball-2</button>
      <button onClick={handleNoBall3}>Ball-3</button>
      <button onClick={handleNoBall4}>Ball-4</button>
      <button onClick={handleNoBall5}>Ball-5</button>
      <button onClick={handleNoBall6}>Ball-6</button>
      <button onClick={handleNoBall7}>Ball-Extra</button>
    </div>
  )
}