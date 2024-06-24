function whereAmI(lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data.countryName));
}
whereAmI(-34.0, -64.0);
