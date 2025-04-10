function updateTime() {
  //the hague
  let theHagueElement = document.querySelector("#the-hague");
  let theHagueDateElement = theHagueElement.querySelector(".date");
  let theHagueTimeElement = theHagueElement.querySelector(".time");
  let theHagueTime = moment().tz("Europe/Amsterdam");

  theHagueDateElement.innerHTML = theHagueTime.format("MMMM Do YYYY");
  theHagueTimeElement.innerHTML = theHagueTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  //auckland
  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTime = moment().tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = cityTimeZone;

  console.log(cityTimeZone);
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
