let mapOptions={
    center: [18.534893498880855, 73.82789346327084],
    zoom:13
}
let map = L.map('map',mapOptions),
layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(layer);

let _pointA,
_pointB,
_polyline,
markerA=null,
markerB=null;

map.on('click', (e) =>{
    if(!_pointA){
        _pointA = e.latlng;
        markerA = L.marker(_pointA).addTo(map);
    }
    else if(!_pointB){
        _pointB = e.latlng;
        markerB = L.marker(_pointB).addTo(map);

        
    let length = map.distance(_pointA,_pointB);
    console.log("Point A :: ",_pointA);
    console.log("Point A :: ",_pointB);
    console.log(" Length :: ",length);
    _plotMidpoint = (length/2).latlng;
    console.log(" Plot :: ",_plotMidpoint);
    document.getElementById('length').innerHTML = length;

    var bounds = L.latLngBounds(_pointA,_pointB)
    var center = bounds.getCenter();
    var marker = L.marker(center).addTo(map);
 } 
 // else{
//     if(_polyline){
//         map.removeLayer(_polyline);
//         _polyline = null;
//     }
//     _pointA = e.latlng;

//     map.removeLayer(markerA);
//     map.removeLayer(markerB);

//     _pointB = null;

//     markerA =L.marker(_pointA).addTo(map);
// }
})