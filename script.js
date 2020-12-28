var apiKey = "2a150efcdc8fd6427901a38f082e72cc";
var city = 'Boston'
var submitBtn = $('#submitBtn')
var lat = '42.36';
var lon = '-71.06';

function getWeather(){
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response) {
        
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
    var queryURL = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response) {
        
        let currUVIndex = response.value;
        let uvSeverity = "green";
        let textColor = "white"
        
        if (currUVIndex >= 11) {
            uvSeverity = "purple";
        } else if (currUVIndex >= 8) {
            uvSeverity = "red";
        } else if (currUVIndex >= 6) {
            uvSeverity = "orange";
            textColour = "black"
        } else if (currUVIndex >= 3) {
            uvSeverity = "yellow";
            textColour = "black"
        }

        $('#uvIndex').append(`UV Index: <span class="text-${textColor} uvPadding" style="background-color: ${uvSeverity};">${currUVIndex}</span></p>`)
    });
};

function getForcast(){
    var queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response) {
        console.log(response)
    });
};



$('#submitBtn').on('click', function(event) {

    
    event.preventDefault();
    getWeather();
    getUvIndex();
    getForcast();

    var key = 'city';
    var value = $('#city-input').val();
    if (key && value) {
        localStorage.setItem(key, value) 
    };
    
});