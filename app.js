document.getElementById("convert").addEventListener("submit", function (event) {
  event.preventDefault();
  const distance = parseFloat(document.getElementById("distance").value);
  const result = document.getElementById("answer");
  if (distance) {
    const conversion = distance * (1.609344).toFixed(3);
    result.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometres</h2>`;
  } else {
    result.innerHTML = `<h2>Please Provide a valid number</h2>`;
  }
});
