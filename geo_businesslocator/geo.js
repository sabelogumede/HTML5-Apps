var restaurants = [
    {
        name: "Rocky Peak Spur", address: "Alberton, 1448",
        lat: -26.3095191, lon: 28.107312
    },
    {
        name: "Taj indian", address: "17 Abel Moller st, Brackenhurst",
        lat: -26.3096863, lon: 28.0380812
    },
    {
        name: "Pata Pata", address: "286 Fox St, Jeppestown",
        lat: -26.204158, lon: 27.9896957
    },
    {
        name: "Soul Souvlaki", address: "18 Albrecht Maboneng Precinct, Jeppestown",
        lat: -26.2037826, lon: 27.9902806
    },
    {
        name: "The Potato Shed", address: "Newtown Junction, Newtown",
        lat: -26.195206, lon: 28.0336781
    },
    {
        name: "Marble Restaurant", address: "19 Keyes Ave, Rosebank",
        lat: -26.1436171, lon: 27.9662977
    },
];

/* Calculate distance between two points in Earth in KM */
function getDistance(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
