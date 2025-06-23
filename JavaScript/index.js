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
