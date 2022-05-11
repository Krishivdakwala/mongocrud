var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = [
      { Songname: "SongA", Film: "FilmA", Music_director: "musicdirectorA", singer:"SingerA" },
      { Songname: "SongB", Film: "FilmB", Music_director: "musicdirectorB", singer:"SingerB" },
      { Songname: "SongC", Film: "FilmC", Music_director: "musicdirectorC", singer:"SingerC" },
      { Songname: "SongD", Film: "FilmD", Music_director: "musicdirectorD", singer:"SingerD" },
      { Songname: "SongE", Film: "FilmE", Music_director: "musicdirectorE", singer:"SingerE" }];
  dbo.collection("songdetails").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); 