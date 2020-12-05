var apiKey = "abedb9d601e3b4828d2d985b7119ff3c";
var city = 'Cincinnati'
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`

$.ajax({
    url: queryURL,
    method: 'GET',
}).then(function(response) {
    console.log(response)
})




















