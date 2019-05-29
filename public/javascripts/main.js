window.onload = () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {
      lat: 40.392618,
      lng: -3.697680,
    }
  })

  const directionsService = new google.maps.DirectionsService
  const directionsDisplay = new google.maps.DirectionsRenderer({
    draggable: true,
    map: map,
    panel: document.getElementById('right-panel')
  })
  const origin = document.getElementById('origin').innerText
  const destin = document.getElementById('destin').innerText


  displayRoute(origin, destin, directionsService,
    directionsDisplay);
  function displayRoute(origin, destination, service, display) {
    service.route({
      origin: origin,
      destination: destination,
      travelMode: 'DRIVING',
      avoidTolls: true
    }, function (response, status) {
      if (status === 'OK') {
        display.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }

  function computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }
    total = total / 1000;
    document.getElementById('total').innerHTML = total + ' km';
  }


}
window.onclick = e => {
  console.log(e)

}