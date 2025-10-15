import { useState, useEffect } from "react"


export default function SetCounter() {
  const [count, setCount] = useState(0);
  // let countMsg = '';
  // if(count < 0) {
  //   countMsg = 'Negative Number Not Allowed';
  // }

  useEffect(()=> {
    if(count<0) {
      alert('Negative Number Not Allowed')
      setCount(0);
    }
  },[count]); //? Dependency array
  return (
    <div style={{border: '2px solid green', borderRadius: '10px', padding: '10px'}}>
      <h2>Count: {count}</h2>
      {/* <p><small>{countMsg}</small></p> */}
      {
        // count < 0 ? <p>Negative</p>: <p>{}</p>
      }
      <button onClick={()=> setCount(count+1)}>Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}