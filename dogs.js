const button = document.querySelector("button");
const image = document.getElementById("dog");

async function dogs() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
//   image.src = data.message;
  console.log(data);
}

button.addEventListener("click", function () {
  dogs();
});
