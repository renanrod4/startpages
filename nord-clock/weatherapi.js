$(document).ready(function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.openweathermap.org/d\ata/2.5/weather?lat=-23.6286&lon=-47.0191&appid=65c53e121a3c3e448079332024b16cbe&units=metric",
        "method": "GET",
    }
    function getWeather() {
        $.ajax(settings).done(function (response) {
            console.log(response);
            temp = response['main']['temp']
            $('.temperature').text(Math.round(temp) + "°C")
        });
    }
    getWeather()
    setInterval(function () {
        getWeather()
    }, 10000);
});
    