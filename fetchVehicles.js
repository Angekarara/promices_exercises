async function getVehicles() {
  const res = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2"
  );
  const data = await res.json();

  const resul = data.Results;
  const manufacturer = resul.filter(
    (mfr) => mfr.Country === "UNITED STATES (USA)"
  );

  console.log(manufacturer);
}
getVehicles();
