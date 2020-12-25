var apiKey = "2a150efcdc8fd6427901a38f082e72cc";
var city = 'Cincinnati'
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
var submitBtn = $('#submit')

function getWeather(){
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response) {
        console.log(response)
        var searchInfo = {
            name: response.name,
            temperature: response.main.temp,
            humidity: response.main.humidity,
            wind: response.wind.speed
        }

        $('#currentWeatherName').text(searchInfo.name);
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




