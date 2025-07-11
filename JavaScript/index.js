//City one
setInterval(function () {
  let cityOneElement = document.querySelector("#city-1");
  let cityOneDate = cityOneElement.querySelector("#date");
  let cityOneTime = cityOneElement.querySelector("#time");
  let cityOneTimeElement = moment().tz("Australia/Melbourne");
  cityOneDate.innerHTML = moment().format("MMMM Do YYYY");
  cityOneTime.innerHTML = cityOneTimeElement.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // city 2
  let cityTwoElement = document.querySelector("#city-2");
  let cityTwoDate = cityTwoElement.querySelector("#dateTwo");
  let cityTwoTime = cityTwoElement.querySelector("#timeTwo");
  let cityTwoTimeElement = moment().tz("Europe/Paris");
  cityTwoDate.innerHTML = moment().format("MMMM Do YYYY");
  cityTwoTime.innerHTML = cityTwoTimeElement.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

let cityUpdateInterval;
let currentCityTimeZone;

function updateCity(event) {
  let cityTimeZone = event ? event.target.value : currentCityTimeZone;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  // Store the timezone for interval updates
  currentCityTimeZone = cityTimeZone;

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  // Clear existing interval and create new one with cityTime variable
  if (event) {
    if (cityUpdateInterval) {
      clearInterval(cityUpdateInterval);
    }
    cityUpdateInterval = setInterval(function () {
      let cityTime = moment().tz(cityTimeZone);
      let cityElement = document.querySelector("#container-city");
      cityElement.innerHTML = `
      <div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date"> ${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <small> ${cityTime.format("A")}</small></div>
          </div> <small> <a href="/" >Back to Home Page</a></small>
      `;
    }, 1000);
  }

  // Initial update when city is selected
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#container-city");
  cityElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date"> ${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small> ${cityTime.format("A")}</small></div>
      </div> <small> <a href="/" >Back to Home Page</a></small>
  
  `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
