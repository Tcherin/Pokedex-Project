const express = require("express");
const cors = require("cors");

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./routes/create_router.js");

// express app
const app = express();

// overriding CORS policy
app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("pokemon-list");
    const pokemonCollection = db.collection("pokemons");
    const pokemonRoutes = createRouter(pokemonCollection);
    app.use("/api/pokemons", pokemonRoutes);
  })
  .catch(console.err);

// listen for requests
app.listen(4000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
