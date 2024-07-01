function countryDetails(country) {
  return fetch(`https://restcountries.com/v3.1/name/${country}`);
}
countryDetails("malawi")
  .then((res) => res.json())
  .then((data) => {
     const country = data[0].name.common
    const capital = data[0].capital[0]
    const latitude = data[0].latlng[0]
    const longitude = data[0].latlng[1]
    return fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const Current_Temperature = `${data.current_weather.temperature}°C`
       
console.log({
    country,
    capital,
    Current_Temperature
})

      });
  });
