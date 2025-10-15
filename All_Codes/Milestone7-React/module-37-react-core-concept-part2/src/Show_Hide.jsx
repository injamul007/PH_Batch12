import { useState } from "react"


export default function ShowHide() {
  const [text, setText] = useState(false)
  const handleText = ()=> {
    setText(!text)
  }
  return (
    <div className="card">
      <h2>Text: {text? "Hello! React Learners!": ""}</h2>
      <button onClick={handleText}>Show/Hide</button>
    </div>
  )
}