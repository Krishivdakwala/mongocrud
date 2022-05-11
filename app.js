const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

let url = "mongodb://localhost:27017/";
var dbo;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    dbo = db.db("music")
    app.listen(PORT)
    return dbo
})

const PORT = 5000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/addsong.html")
})

app.post('/', (req, res) => {
    var Songname = req.body.Songname;
    var Film = req.body.Film;
    var Music_director = req.body.Music_director;
    var singer = req.body.singer;

    var myObj = { Songname: Songname, Film: Film, Music_director: Music_director, singer: singer }


    dbo.collection("music").insertOne(myObj, (err, res) => {
        if (err) console.log(err)
        console.log("One Object Inserted")
    })
    res.send("Inserted the song go to /show")

})

app.get('/show', (req, res) => {
    var results;
    dbo.collection("music").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result)
        res.send(JSON.stringify(result))
      });
    
})




