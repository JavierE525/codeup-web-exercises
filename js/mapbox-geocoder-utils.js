<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Geocode Examples</title>
<!-- Mapbox CSS -->
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' rel='stylesheet' />
    <!-- Custom CSS -->
<style>
#map {
    /* the width and height may be set to any size */
    width: 100%;
    height: 700px;
}
</style>
</head>
<body>

<h1>My First Mapbox Map!</h1>

<!-- The HTML element that serves as the Mapbox container -->
<div id='map'></div>

    <!-- Mapbox JS -->
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.js'></script>

    <!-- Mapbox Geocoder Util Methods -->
    <script src="mapbox-geocoder-utils.js"></script>

    <!-- Custom JS -->
    <script>
var accessToken = YOUR_TOKEN_HERE;
mapboxgl.accessToken = accessToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

// reverse geocode method from mapbox-geocoder-utils.js
reverseGeocode({lng: -98.4861, lat: 29.4260}, accessToken).then(function(results) {
    // logs the address for The Alamo
    console.log(results);
});

</script>
</body>
</html>