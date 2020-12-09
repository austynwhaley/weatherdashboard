var apiKey = "abedb9d601e3b4828d2d985b7119ff3c";
var city = $('#city-input').val()
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "city&units=metric&APPID=" + apiKey;
var submitBtn = $('#submit')

function getWeather(){
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response) {
        console.log(response)
        var weatherInfo = {
            temperature: response.main.temp,
            humidity: response.main.humidity,
            wind: response.wind.speed
        }
    });
};


$('#submit').on('click', function(event) {

    getWeather()
    event.preventDefault()

    var key = 'city';
    var value = $('#city-input').val();
    if (key && value) {
        localStorage.setItem(key, value) 
    }
    
});


