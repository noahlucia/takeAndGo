document.addEventListener('DOMContentLoaded', () => {

  const origin = document.getElementById("originNeighb")
  const dest = document.getElementById("destNeighb")
  let originNeighb = origin.value
  let destNeighb = dest.value

  origin.onchange = () => {
    originNeighb = origin.value
    destNeighb = dest.value
    getTrips(originNeighb, destNeighb)
  }

  dest.onchange = () => {
    originNeighb = origin.value
    destNeighb = dest.value
    getTrips(originNeighb, destNeighb)
  }

  const getTrips = (originNeighb, destNeighb) => {

    axios.post("https://takeandgo.herokuapp.com/api", { originNeighb, destNeighb })
      .then(response => {
        document.getElementById("search-results").innerHTML = ""

        console.log(response.data)

        response.data.trips.forEach(trip => {

          document.getElementById("search-results").innerHTML +=

            `<article class="card">
  <div class="card-body">
    <div class="card-img">
      <img class="card-img-top" src="${trip.creatorID.imgPath}" alt="user image">
    </div>
    <div class="card-text">
      <h5 class="card-title">${trip.title}</h5>
      <p class="card-text">From: ${trip.origin}</p>
      <p class="card-text">To: ${trip.destination}</p>
      <p class="card-text">Price: ${trip.price}</p>
      <p class="card-text">Passengers: ${trip.passengers}</p>
      <a href="/trip/detail/${trip._id}" class="button">Detalles</a>
    </div>
  </div>
</article>
            `

        })

      })
  }



}, false);
