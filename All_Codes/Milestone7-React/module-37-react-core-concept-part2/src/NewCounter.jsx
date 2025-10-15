import { useEffect, useState } from "react"


export default function NewCounter() {
    const [count, setCount] = useState(0)

    useEffect(()=> {
      if(count<0) {
        alert('Negative Value not Allowed')
        setCount(0)
      }
    },[count]);

  return (
    <div className="card">
      <h2>Count: {count}</h2>
      <button onClick={()=> setCount(count+1)}>Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}