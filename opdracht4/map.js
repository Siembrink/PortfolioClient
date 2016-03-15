var map;
var list = new Array();

function initMap() {


    $.ajax({
        type: "GET",
        url: "stations.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('station').each(function () {
                var lat = parseFloat($(this).find('lat').text());
                var lng = parseFloat($(this).find('long').text());
                var location = {lat: lat,  lng: lng};
                var marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    title: "Gello"
                });
            });
        },
        error: function () {
            alert("An error occurred while processing XML file.");
        }
    });


    var myLatLng = {lat: 52.314224, lng: 4.941841};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: myLatLng
    });






}


