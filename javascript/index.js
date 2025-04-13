function updateTime() {
  // The Hague
  let theHagueElement = document.querySelector("#the-hague");
  if (theHagueElement) {
    let theHagueDateElement = theHagueElement.querySelector(".date");
    let theHagueTimeElement = theHagueElement.querySelector(".time");
    let theHagueTime = moment().tz("Europe/Amsterdam");

    theHagueDateElement.innerHTML = theHagueTime.format("MMMM Do YYYY");
    theHagueTimeElement.innerHTML = theHagueTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }

  // Auckland
  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandDateElement = aucklandElement.querySelector(".date");
    let aucklandTimeElement = aucklandElement.querySelector(".time");
    let aucklandTime = moment().tz("Pacific/Auckland");

    aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
    aucklandTimeElement.innerHTML = aucklandTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
}

// Update selected city
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment().tz.guess;
  }
  console.log("Selected city:", cityTimeZone);

  if (cityTimeZone === "") {
    // Reset to show The Hague and Auckland
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city" id="the-hague">
        <div>
          <h2>The Hague 🇳🇱</h2>
          <div class="date"></div>
        </div>
        <div>
          <div class="time"><small>PM</small></div>
        </div>
      </div>
      <div class="city" id="auckland">
        <div>
          <h2>Auckland 🇳🇿</h2>
          <div class="date"></div>
        </div>
        <div>
          <div class="time"><small>PM</small></div>
        </div>
      </div>
    `;
    updateTime(); // Update times immediately
    return;
  }

  // Map time zones to display names
  let cityName;
  switch (cityTimeZone) {
    case "Europe/Amsterdam":
      cityName = "Amsterdam 🇳🇱";
      break;
    case "Europe/Brussels":
      cityName = "Brussels 🇧🇪";
      break;
    case "Australia/Melbourne":
      cityName = "Melbourne 🇦🇺";
      break;
    case "Africa/Johannesburg":
      cityName = "Johannesburg 🇿🇦";
      break;
    case "Europe/Tallinn":
      cityName = "Tallinn 🇪🇪";
      break;
    default:
      cityName = cityTimeZone.split("/").pop(); // Fallback: last part of timezone
  }

  // Update cities to show only the selected city
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
      </div>
    </div>
  `;
}

// Initialize and update times
updateTime();
setInterval(updateTime, 1000);

// Bind select element
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
