require("dotenv").config();
const express = require('express');                 
const app = express();                              
const PORT = 3000;                                
const Pokemon = require("./models/pokemon");       
const reactViews = require('express-react-views')
const mongoose = require("mongoose");



mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
    console.log("connected to Server");
});


app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

app.use((req, res, next) => {
    console.log("I'm running for all routes")
    console.log("1. middleware")
    next();
});


app.use(express.urlencoded({extended:false}));


app.get("/", (req, res) => {                     
    res.send('Welcome to the Pokemon App!')        
    console.log("homepage ")
});                                                 



app.get("/pokemon", (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        if (!error) {
            console.log("/pokemon")
            res.status(200).render("Index", {
                pokemon: allPokemon
            });
        } else {
            console.log("/pokemon error")
            res.status(400).send(error);
        }
    });
});


app.get("/pokemon/new", (req, res) => {
    console.log("2. controller")
    res.render("New");
});



app.post("/pokemon", (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        console.log(createdPokemon)
        console.log("creating new pokemon")
        if(!error) {
            res.status(200).redirect("/pokemon");
        } else {
            res.status(400).send(error);
        }
    });
});


app.get("/pokemon/:id", (req, res) => {
    Pokemon.findById(req.params.id, (error, pokemonByID) => {
        if(!error) {
            res.status(200).render("Show", {
                pokemon: pokemonByID
            });
        } else {
            res.status(400).send(error);
        }
    });
});

app.listen(PORT, (req,res)=>{                    
    console.log('Running at port:', PORT)    
})                                          