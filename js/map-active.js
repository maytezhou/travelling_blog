var map;
var latlng = new google.maps.LatLng(56.9496, 24.1052);
var stylez = [{
    featureType: "all",
    elementType: "all",
    stylers: [{
        saturation: -25
            }]
        }];
var mapOptions = {
    zoom: 15,
    center: latlng,
    scrollwheel: false,
    scaleControl: false,
    disableDefaultUI: true,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
    }
};
map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
var geocoder_map = new google.maps.Geocoder();
var address = 'Riga';
geocoder_map.geocode({
    'address': address
}, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            icon: '',
            position: map.getCenter(),
            animation: google.maps.Animation.BOUNCE,
        });
    } else {
        alert("Geocode was not successful for the following reason: " + status);
    }
});
var mapType = new google.maps.StyledMapType(stylez, {
    name: "Grayscale"
});
map.mapTypes.set('gMap', mapType);
map.setMapTypeId('gMap');


// Initialize and add the map function initMap() {
// The location of flag var flag = {lat: XXX, lng: YYY};
// The map, centered at flag var map = new google.maps.Map( document.getElementById('map'), {zoom: 4, center: flag});
// The marker, positioned at flag var marker = new google.maps.Marker({position: flag, map: map}); } src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">