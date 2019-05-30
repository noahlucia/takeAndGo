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

    axios.post("http://localhost:3000/api", { originNeighb, destNeighb })
      .then(response => {
        document.getElementById("search-results").innerHTML = ""

        console.log(response.data)


        document.getElementById("search-results").innerHTML +=
          `< article class="card" >
            <img class="card-img-top" src="{{creatorID.imgPath}}" alt="user image">
              <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">From: {{ origin }}</p>
                <p class="card-text">To: {{ destination }}</p>
                <p class="card-text">Price: {{ price }}</p>
                <p class="card-text">Passengers: {{ passengers }}</p>

                <a href="/trip/detail/{{this._id}}" class="button-join">Join</a>
              </div>
</article>`


      })
  }



}, false);
