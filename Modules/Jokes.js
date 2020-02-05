const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = (client) => {
  
  client.jokes = {
    getRandomCNJoke: function(joke){
      request('http://api.icndb.com/jokes/random?limitTo=[nerdy]', function(error, reponse, body){
          if(!error && reponse.statusCode === 200){
            let dataJSON = JSON.parse(body);
            joke(dataJSON.value.joke)
          }
      })
    },
    getCustomJoke: function(firstName, lastName, joke){
      let fn = firstName;
      let ln = lastName;
      request('http://api.icndb.com/jokes/random?firstName=' + fn + '&lastName=' + ln + "&limitTo=[nerdy]", function (error, response, body) {
        if(!error && response.statusCode === 200) {
            var dataJSON = JSON.parse(body);  
            joke(dataJSON.value.joke);
        }
      });
    },
    getRandomDadJoke: function(joke){
      var options = {
        url: 'https://icanhazdadjoke.com/',
        headers: {
          'Accept': 'application/json'
        }
      };
    request(options, function (error, response, body) {
        if(!error && response.statusCode === 200) {
            var dataJSON = JSON.parse(body);
            joke(dataJSON.joke);
        }
});   
    }
  }
  
}