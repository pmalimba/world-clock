function updateTime() {
  //the hague
  let theHagueElement = document.querySelector("#the-hague");
  let theHagueDateElement = theHagueElement.querySelector(".date");
  let theHagueTimeElement = theHagueElement.querySelector(".time");
  let theHagueTime = moment().tz("Europe/Amsterdam");

  theHagueDateElement.innerHTML = theHagueTime.format("MMMM Do YYYY");
  theHagueTimeElement.innerHTML = theHagueTime.format(
    "h:mm:ss[<small>]P[</small>]"
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
updateTime();
setInterval(updateTime, 1000);
