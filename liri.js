// require(".env").config();
// var Spotify = require('node-spotify-api');
// var keys = require("./keys");
// var spotify = new Spotify(keys.spotify);

// #This is the axios requirement that allows us to take advantage of the api#
var axios = require("axios");
// var datetime = require('node-datetime');
// #Storing the users desired action in a variable to use in the function#
var action = process.argv[2]
function director() {
  // #Taking everything after the users action and puting it into a viable format for the url
  var specifics = process.argv.slice(3).join("");
  // #Checking the actions so it can conduct the appropriate function
  if (action === "concert-this") {
    // #Link#
    var link = "https://rest.bandsintown.com/artists/" + specifics + "/events?app_id=codingbootcamp";
    axios.get(link).then(
      function (response) {
        // #Changes the time and date to something a little more presentable
        // var dt = response.data[0].datetime.create();
        // var formatted = dt.format('m/d/Y H:M:S');
        // #Logging all the necessary inforamtion needed for the concert
        console.log(response.data[0].venue.name + "\n\n",
          response.data[0].venue.city, ", ", response.data[0].venue.region, ", ", response.data[0].venue.country + "\n\n",
          response.data[0].datetime)
      }
    )
  }
}
director();
  // if (action === "spotify-this-song") {

  //   spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
  //     if (err) {
  //       return console.log('Error occurred: ' + err);
  //     }

  //     console.log(data);
  //   });
    // var link = "";
    //   axios.get(link).then(
    //       function (response) {
    //           console.log()
    //         }
