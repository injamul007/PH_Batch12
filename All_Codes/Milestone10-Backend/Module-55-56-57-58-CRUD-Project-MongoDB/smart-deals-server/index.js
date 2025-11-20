const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const admin = require("firebase-admin");
const port = process.env.PORT || 3000;

//? firebase admin

const serviceAccount = require("./smart-deals-firebase-admin-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//? Middleware for send and receive data
app.use(cors());
app.use(express.json());

const logger = (req,res,next) => {
  console.log('Logging information')
  next();
}

const verifyFireBaseToken = async (req,res,next) => {
  const authorization = req.headers.authorization
  if(!authorization) {
    return res.status(401).send({message: 'unauthorized access'})
  }
  const token = authorization.split(' ')[1]
  if(!token) {
    return res.status(401).send({message: 'unauthorized access'})
  }

  //? firebase adminSDK Verify
  try {
    const decoded = await admin.auth().verifyIdToken(token)
    console.log('inside token', decoded)
    req.token_email = decoded.email;
    next()
  } catch (error) {
    return res.status(403).send({message: 'forbidden access'})
  }

  //? next()
}

// const verifyFireBaseToken = async (req,res,next) => {
//   console.log('in the middleware', req.headers.authorization)
//   if(!req.headers.authorization) {
//     return res.status(401).send({message: 'unauthorized access'})
//   }
//   const token = req.headers.authorization.split(' ')[1]
//   if(!token) {
//     return res.status(401).send({message: 'unauthorized access'})
//   }

//   //? verify adminSDK
//   try {
//     const userInfo = await admin.auth().verifyIdToken(token)
//     req.token_email = userInfo.email;
//     console.log('after token validation', userInfo)
//     next();
//   } catch (error) {
//     console.log('invalid token')
//     return res.status(401).send({message: 'unauthorized access'})
//   }
// }


const uri = `mongodb+srv://${process.env.VITE_DB_USER}:${process.env.VITE_DB_PASS}@cluster0.vc0smjx.mongodb.net/?appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


app.get('/', (req,res) => {
  res.send('Smart Deals Server is Running')
})

async function run() {
  try {
    await client.connect();

    const smartDealsDB = client.db('smartDealsDB');
    const productCollection = smartDealsDB.collection('products');
    const bidCollection = smartDealsDB.collection('bids');
    const usersCollection = smartDealsDB.collection('users');

    //? jwt related apis
    // app.post('/get-token', async(req,res) => {
    //   const token = jwt.sign({email: 'abc'},'secret', {expiresIn: '1hr'})
    //   res.send({token: token})
    // })

    //? UsersInfo related apis 
    app.post('/users', async(req,res) => {
      const newUserInfo = req.body

      const email = newUserInfo.email
      const query = {email: email}

      const existingUser = await usersCollection.findOne(query)

      if(existingUser) {
        res.send({message: "User Already Exits. Don't need same user"})
      } else {
        const result = await usersCollection.insertOne(newUserInfo)
        res.send(result)
      }
    })

    //? Products related apis
    app.get('/products', async (req,res) => {
      // const cursor = productCollection.find().sort({price_min: 1}).skip(2).limit(2).project({title: 1, price_min: 1, price_max: 1});
      
      console.log(req.query)
      const email = req.query.email

      const query = {}
      if(email) {
        query.email = email;
      }

      const cursor = productCollection.find(query)
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/latest-products', async(req,res) => {
      const cursor = productCollection.find().sort({created_at: -1}).limit(6)
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/products/:id', async (req,res) => {
      const userId = req.params.id;
      const query = {_id: new ObjectId(userId)}
      const result = await productCollection.findOne(query);
      res.send(result);
    })

    app.post('/products', verifyFireBaseToken, async (req,res)=> {
      console.log('headers in the post', req.headers)
      const newProduct = req.body;
      const result = await productCollection.insertOne(newProduct)
      res.send(result);
    })

    app.patch('/products/:id', async (req,res) => {
      const userId = req.params.id;
      const updatesProduct = req.body;
      const query = {_id: new ObjectId(userId)}
      const update = {
        $set: {
          name: updatesProduct.name,
          price: updatesProduct.price
        }
      }
      const options = {}
      const result = await productCollection.updateOne(query, update, options);
      res.send(result);
    })

    app.delete('/products/:id', async (req,res)=> {
      const userId = req.params.id;
      const query = {_id: new ObjectId(userId)}
      const result = await productCollection.deleteOne(query)
      res.send(result);
    })

    //? bids related apis.................
    app.get('/bids', verifyFireBaseToken, async(req,res) => {
      const buyerEmail = req.query.buyer_email
      const query = {}
      if(buyerEmail) {
        if(buyerEmail !== req.token_email) {
          return res.status(403).send({message: 'forbidden access'})
        }
        query.buyer_email = buyerEmail
      }

      const cursor = bidCollection.find(query)
      const result = await cursor.toArray()
      res.send(result)
    })

    app.get('/products/bids/:productId', async(req,res) => {
      const productIdField = req.params.productId
      const query = {product: productIdField}
      const cursor = bidCollection.find(query).sort({bid_price: -1})
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/bids/:id', async(req,res) => {
      const biderId = req.params.id
      const query = {_id: new ObjectId(biderId)}
      const result = await bidCollection.findOne(query)
      res.send(result)
    })

    app.get('/bids', async(req,res) => {
      const email = req.query.email
      let query = {}
      if(email) {
        query = {buyer_email: email}
      }

      const cursor = bidCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    })

    app.post('/bids', async(req,res) => {
      const newBid = req.body
      const result = await bidCollection.insertOne(newBid);
      res.send(result)
    })

    app.delete('/bids/:id', async(req,res) => {
      const biderId = req.params.id;
      const query = {_id: new ObjectId(biderId)}
      const result = await bidCollection.deleteOne(query)
      res.send(result)
    })

    await client.db('admin').command({ping: 1});
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  finally {
    //? await client.close()
  }
}
run().catch(console.dir)

app.listen(port, () => {
  console.log(`Smart Deals Server is Running on Port: ${port}`)
})