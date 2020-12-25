var apiKey = "2a150efcdc8fd6427901a38f082e72cc";
var city = 'Boston'
var submitBtn = $('#submitBtn')

function getWeather(){
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response) {
        console.log(response)
        var searchInfo = {
            name: response.name,
            temperature: response.main.temp,
            humidity: response.main.humidity,
            wind: response.wind.speed,
            lat: response.coord.lat,
            lon: response.coord.lon
        }


        $('#currentWeatherName').text(searchInfo.name);
        $('#temperature').text("Temperature: " + searchInfo.temperature + "°C");
        $('#humidity').text("Humidity: " + searchInfo.humidity + "%");
        $('#windSpeed').text("Wind Speed: " + searchInfo.wind + "m/s");
    });
};

function getUvIndex(){
    var queryURL = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apikey}`
}

function getForcast(){
    var queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`
}



$('#submitBtn').on('click', function(event) {

    getWeather(city)
    event.preventDefault()

    var key = 'city';
    var value = $('#city-input').val();
    if (key && value) {
        localStorage.setItem(key, value) 
    }
    
});