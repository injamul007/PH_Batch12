const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); //? this middleware is for send data to client
app.use(express.json()); //? this middleware is to receive data from client

const players = [
  {id:1,name:'hayden', "playingType": 'left hand bat'},
  {id:2,name:'ponting', "playingType": 'right hand bat'},
  {id:3,name:'starc', "playingType": 'left hand ball'}
]

app.get('/', (req,res) => {
  res.send('Players info server is ready')
})

app.get('/players', (req,res) => {
  res.send(players)
})

app.post('/players', (req,res)=> {
  console.log('Post is called', req.body);
  const newPlayer = req.body;
  newPlayer.id = players.length + 1;
  players.push(newPlayer)
  res.send(newPlayer)
})

app.listen(port, ()=> {
  console.log(`This server is running on port: ${port}`)
})