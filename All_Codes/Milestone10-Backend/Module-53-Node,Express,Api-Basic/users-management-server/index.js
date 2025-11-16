const express = require("express")
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); //? It is a  middleware to send data to client !
app.use(express.json()); //? this middleware to receive data from client


app.get("/", (req,res)=> {
  res.send('User management is ready for your services')
})

const users = [
  {id: 1, name: 'sabana', email: 'sabana@gmail.com'},
  {id: 2, name: 'sabnoor', email: 'sabnoor@gmail.com'},
  {id: 3, name: 'sabila', email: 'sabila@gmail.com'},
]

app.get("/users", (req,res)=> {
  res.send(users)
})

app.post("/users", (req,res)=> {
  console.log('post method called', req.body)
  const newUser = req.body
  newUser.id = users.length + 1
  users.push(newUser)
  res.send(newUser)
})


app.listen(port, ()=>{
  console.log(`user management is running on port ${port}`)
})