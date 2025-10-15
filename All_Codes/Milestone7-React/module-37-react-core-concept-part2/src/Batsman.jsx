import { useState } from "react"


export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const BatsmanStyle = {border: '2px solid orange', borderRadius: '10px', padding: '10px'}

  const handleSixes = () => {
    setRuns(runs + 6)
    setSixes(sixes+1)
  }

  return (
    <div style={BatsmanStyle}>
      <h2>Player: Bangla Batsman</h2>
      {
        runs >= 50 && <p>Congratulations ! You Score: 50+</p>
        // sixes >= 50 && <p><small>OMG! 50 Sixes</small></p>
      }
      <h1>Score: {runs}</h1>
      <p><small>Sixes You Hit: {sixes}</small></p>
      <button onClick={()=> setRuns(runs+1)}>Singles</button>
      <button onClick={()=> setRuns(runs+4)}>Four</button>
      <button onClick={handleSixes}>Six</button>
    </div>
  )
}