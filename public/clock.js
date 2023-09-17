function Time() {
  var date = new Date();

  var hr = date.getHours();
  var min = date.getMinutes();
  // var sec = date.getSeconds();

  var period = "";

  if (hr >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }

  if (hr == 0) {
    hr = 12;
  } else {
    if (hr > 12) {
      hr -= 12;
    }
  }

  hr = updatehr(hr);
  min = updatemin(min);
  // sec = update (sec);

  document.getElementById("digital-clock").innerText =
    hr + ":" + min + " " + period;

  document.getElementById("digital-clock-2").innerText =
    hr + ":" + min + " " + period;

  setTimeout(Time, 1000);
}

function updatehr(t) {
  if (t < 10) {
    return t;
  } else {
    return t;
  }
}

function updatemin(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}

Time();
