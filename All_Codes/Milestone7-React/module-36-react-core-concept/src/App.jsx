import "./App.css";
import Library from "./Library";
// import Vote from "./ToDo";
// import ToDo from "./ToDo";
// import Actor from "./actor";
// import Singer from "./Singer";

function App() {
  // const time = 50;
  // const actors = ['Bappa raj', 'Omar sunny', 'Salman Shah','jasim bhai']
  // const singers = [
  //   {id: 1, name: 'Dr. Mahfuz', age: 68},
  //   {id: 2, name: 'Tahsan', age: 42},
  //   {id: 3, name: 'shuvro Deb', age: 58},
  // ]

  const books = [
    {id: 1, name: 'Physics', price: 250},
    {id: 2, name: 'Chemistry', price: 350},
    {id: 3, name: 'Math', price: 270},
    {id: 4, name: 'Biology', price: 290},
  ]
  return (
    <> { /* <> this is a fragment */}
      <h2>React Core Concept</h2>

      {/* {
        books
      } */}

      <Library books={books}></Library>

      {
      // actors.map(actor => <Actor nayok={actor}></Actor>)
      }

      {
        // singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }




      {/* <Vote name="Rahim" age={20}></Vote>
      <Vote name="Karim" age={17}></Vote> */}
      {/* <ToDo task="Learning React" isDone={true} time={time}></ToDo>
      <ToDo task="Learning C++" isDone={true} time={time}></ToDo>
      <ToDo task="Revise JS" isDone={true}></ToDo>
      <ToDo task="Take a shower" isDone={true} time={null}></ToDo> */}
      {/* <Student></Student> */}
      {/* <Developer name="Boss" tech="Python"></Developer>
      <Developer name="BossBD" tech="React"></Developer> */}
      {/* <TvList name="Sony" size="43 inch"></TvList>
      <TvList name="Samsung" size="32 inch"></TvList>
      <TvList name="LG" size="22 inch"></TvList> */}
      {/* <Player name="Tamim Iqbal" runs="5000"></Player>
      <Player name="Virat Kohli" runs="15000"></Player> */}
      {/* <Salami event="Roja Eid" name='Boss' amount="2000"></Salami>
      <Salami event="Qurbani Eid" name='Boss2' amount="300"></Salami>
      <Salami event="Graduation" name='Rohim'></Salami> */}
    </>
  );
}

function Salami({event,name,amount=0}) {
  return (
    <div className="student">
      <p>Salami for: {event}</p>
      <p>Salami to: {name}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}


function Player({name,runs}) {
  return (
    <div className="student">
      <h3>PName: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

function TvList(props) {
  const {name, size} = props
  return (
    <div style={{border: '2px solid green', borderRadius: '20px', paddingInline: '20px'}}>
      <h3>TV Name: {name}</h3>
      <p>TV Size: {size}</p>
    </div>
  )
}

function Developer(props) {
  // console.log(props)
  const {name, tech} = props;
  return (
    <div style={{border: '2px solid green',borderRadius: '20px',textAlign: 'left', paddingInline: '10px',}}>
      <h3>Developer: {name}</h3>
      <p>Technology: {tech}</p>
    </div>
  )
}

function Student() {
  return (
    <div className="student">
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  )
}

function MyCard() {
  const myName = 'Injamul Hoque';
  const age = 30;
  const currentActivity = 'Starting React from today';
  return (
    <div>
      <h3>{myName}</h3>
      <h4>{age}</h4>
      <p>{currentActivity}</p>
    </div>
  )
}

function Person() {
  const age = 18;
  const name = 'Injamul Hoque';
  const personStyle = {
    color: 'black',
    fontSize: '20px',
    backgroundColor: '#fdcdad',
    borderRadius: '10px',
  }
  return (
    <>
    <p style={personStyle}>My Name is {name} and i am {age} years old</p>
    </>
  )
}

function Pet() {
  const catName = 'bebi muci'
  return (
    <p>My Cat name is {catName}</p>
  )
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and losing</p>
      <ul>
        <li>Kola</li>
        <li>Komola</li>
      </ul>
    </div>
  )
}

export default App;
