var apiKey = "d70ef8022f47b07da7d017d3bf99f53b";

function getCity(city){
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    fetch(queryURL)
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
}

getCity("Pittsburgh");