mapboxgl.accessToken = mapboxKey;    
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-98.4916, 29.4252]
});

var marker = new mapboxgl.Marker()
    .setLngLat([30.5, 50.5]).addTo(map);
$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: openweathermapkey,
    lat: 29.1401,
    lon: 98.4936,
    units: "imperial"
}).done(function (data) {

    for (var i = 0; i < 5; i++) {
        let cardId = "#card" + i;

        // date
        let date = new Date(data.daily[i].dt * 1000);
        $(`#weatherDate` + i).html(date.toDateString());
        console.log(data.daily[i].dt);

        // weather icon
        // $(`icon` + i).html(icon)
        // console.log(data.weather[i].incon);

        // temp
        let lowTemp = data.daily[i].temp.min;
        let highTemp = data.daily[i].temp.max;
        $(`#high-low-temp` + i).html(lowTemp + '°F / ' + highTemp + '°F');
        console.log(data.daily[i].temp);

        // feels like //
        let feelsLike = data.daily[i].feels_like.day;
        $(`#feelsLike` + i).html(feelsLike + "%")
        console.log(data.daily[i].feels_like)

        // humidity //
        let humidity = data.daily[i].humidity;
        $(`#humidity` + i).html(humidity + "°F");
        console.log(data.daily[i].humidity)

        // Wind: 91 //
        let wind = data.daily[i].wind_speed;
        $(`#wind` + i).html(wind + " MPH")
        console.log("wind: " + data.daily[i].wind_speed);

        // pressure //
        let pressure = data.daily[i].pressure;
        $(`#pressure` + i).html(pressure + " nBAR")
        console.log(data.daily[i].pressure);
    }
});
