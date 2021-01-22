var apiKey = "2a150efcdc8fd6427901a38f082e72cc";
var submitBtn = $('#submitBtn')
var city = $('#cityInput').val();


function getWeather(city){

    
    var city = $('#cityInput').val();
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response) {
        
        var weatherInfo = {
            name: response.name,
            temperature: response.main.temp,
            humidity: response.main.humidity,
            wind: response.wind.speed,
            lat: response.coord.lat,
            lon: response.coord.lon
        }

        function getUvIndex(response){
            let cordLat = response.coord.lat
            let cordLon = response.coord.lon
            var queryURL = `http://api.openweathermap.org/data/2.5/uvi?lat=${cordLat}&lon=${cordLon}&appid=${apiKey}`;
        
            $.ajax({
                url: queryURL,
                method: 'GET',
            }).then(function(response) {
                
                let currUVIndex = response.value;
                let uvColor = "green";
                let textColor = "white"
                
                if (currUVIndex >= 11) {
                    uvColor = "purple";
                } else if (currUVIndex >= 8) {
                    uvColor = "red";
                } else if (currUVIndex >= 6) {
                    uvColor = "orange";
                    textColour = "black"
                } else if (currUVIndex >= 3) {
                    uvColor = "yellow";
                    textColour = "black"
                }

                
                $('#uvIndex').append(`UV Index: <span class="text-${textColor} uvPadding" style="background-color: ${uvColor};">${currUVIndex}</span></p>`)
            });
        };
        getUvIndex(response);


        $('#currentWeatherName').text(weatherInfo.name);
        $('#temperature').text("Temperature: " + weatherInfo.temperature + "°C");
        $('#humidity').text("Humidity: " + weatherInfo.humidity + "%");
        $('#windSpeed').text("Wind Speed: " + weatherInfo.wind + "m/s");
    });
    
    
};



function getForcast(city){

    var city = $('#cityInput').val();
    var queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response) {
        

        var forcastInfo = {
            date: response.list.dt_text,
            temp: response.list.main.temp,
            humidity: response.list.main.humidity,
            icon: response.list.weather[0].icon

        };

        console.log(forcastInfo)

    });

}    



$('#submitBtn').on('click', function(event) {

    console.log($('#cityInput').val())
    event.preventDefault();
    getWeather();
    getForcast();
});

$('#searchHistory').on('click', function(event){
    event.preventDefault();
    getWeather();
    getForcast();
})

//finish forcast function
// add moment js for current days of the week
// set up local storage to save citys and add them to sidebar
// add icons for weather status