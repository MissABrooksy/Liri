require("dotenv").config();
  
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

inquirer.prompt([
    {
        name: 'concert',
        message: 'concert-this'

    },
    {
        name:'song',
        message: 'spotify-this-song',
    },
    {
        name:'movie',
        message:'movie-this',
    },
    {
        name:'do',
        message:'do-what-it-says'
    }
])