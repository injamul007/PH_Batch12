import { useState } from "react"



export default function Counter() {
  const [count, setCount] = useState(0)
  const counterStyle = {
    border: '2px solid green',
    borderRadius: '10px',
    paddingBottom: '10px'
  }

  // const handleAdd = () => {
  //   setCount(count + 1)
  // }
  const newCount = count + 1
  return (
    <div style={counterStyle}>
      <h2>Count: {count}</h2>
      {/* <button onClick={handleAdd}>Add</button> */}
      <button onClick={()=> setCount(newCount)}>Add</button>
    </div>
  )
}