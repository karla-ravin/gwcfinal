

var mymap = L.map('mapid').setView([41.5, -72.7], 8.5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2FybGEtcmF2aW4iLCJhIjoiY2prbzJ4cWQzMHZnNzNxcXJvN2htYXBreiJ9.FgRBIiXsVENpHWat-QqgGQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


// var marker = L.marker([41.0534, -73.5387]).addTo(mymap);
