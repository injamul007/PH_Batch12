const express = require('express');
const cors = require('cors');
const {MongoClient, ServerApiVersion, ObjectId, } = require('mongodb')
const app = express();
const port = process.env.PORT || 3000;

//? Middleware
app.use(cors())
app.use(express.json())


const uri = "";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

app.get('/', (req,res) => {
  res.send('Simple Crud server is running')
})

async function run() {
  try {
    await client.connect();

    const newUsers = client.db('newUsers');
    const myCollection = newUsers.collection('newInfo')

    app.get('/users', async (req,res) => {
      const cursor = myCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/users/:id', async (req,res) => {
      const userId = req.params.id
      console.log('need user with id', userId)
      const query = {_id: new ObjectId(userId)}
      const result = await myCollection.findOne(query)
      res.send(result);
    })

    //? add database related apis here
    app.post('/users', async (req,res) => {
      const newUser = req.body
      console.log('users info', newUser)
      const result = await myCollection.insertOne(newUser)
      res.send(result)
    })

    app.patch('/users/:id', async (req,res)=> {
      const id = req.params.id;
      const updatedUser = req.body;
      console.log('Updated User Hit -- ', id, updatedUser)
      const query = {_id: new ObjectId(id)}
      const update = {
        $set: {
          name: updatedUser.name,
          email: updatedUser.email,
        }
      };
      const options = {};
      const result = await myCollection.updateOne(query, update, options)
      res.send(result)
    })

    app.delete('/users/:id', async (req,res) => {
      const userId = req.params.id
      const query = {_id: new ObjectId(userId)};
      const resultDelete = await myCollection.deleteOne(query)
      res.send(resultDelete);
    })

    await client.db('admin').command({ping: 1})
    console.log("Pinged your deployment. You successfully connected to MongoDB!")
  }
  finally {
    //? await client.close()
  }
}
run().catch(console.dir)

app.listen(port, ()=> {
  console.log(`This server is running on port: ${port}`)
})



/**
 * 1. at least one user
 * 2. set uri with userId and password
 * 3. create a mongodb client
 * 4. add a run function to connect to the database
 * 5. use try finally inside it to connect the client
 * 6. ping the database to see server is alive or not
 */